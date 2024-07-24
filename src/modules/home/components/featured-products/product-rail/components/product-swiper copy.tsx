"use client"

import React, { useRef, useEffect, useState, useMemo } from 'react';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, } from 'swiper/modules';
import uniqueId from 'lodash/uniqueId';
import { useParams } from "next/navigation"
import isEqual from 'lodash/isEqual'

import LocalizedClientLink from "@modules/common/components/localized-client-link"

import { Region , ProductVariant} from "@medusajs/medusa";
import { PricedProduct, PricedVariant } from "@medusajs/medusa/dist/types/pricing"

import { onlyUnique } from "@lib/util/only-unique"

import "swiper/css";
import "../../../styles.css"

interface PricedProductProps {
  pricedProducts: (PricedProduct | null)[];
  isFeatured?: boolean;
  region: Region;
}

const ProductSwiper: React.FC<PricedProductProps> = ({ pricedProducts, isFeatured, region }) => {

  const [options, setOptions] = useState<Record<string, Record<string, string>>>({})

  const [isAdding, setIsAdding] = useState(false)

  const countryCode = useParams().countryCode as string

  // initialize the options state for each product
  useEffect(() => {
    const optionObj: Record<string, Record<string, string>> = {}

    for (const product of pricedProducts) {
      if (product?.variants?.length! > 0) {
        const firstVariant = product?.variants[0]
        optionObj[product?.id!] = {}
        for (const option of firstVariant?.options!) {
          optionObj[product?.id!][option.id] = option.value
        }
      } else {
        optionObj[product?.id!] = {}
        for (const option of product?.options || []) {
          optionObj[product?.id!][option.id] = ''
        }
      }
    }

    setOptions(optionObj)
  }, [pricedProducts])

  // memoized record of the products' variants
  const variantRecords = useMemo(() => {
    const map: Record<string, Record<string, Record<string, string>>> = {}

    for (const product of pricedProducts) {
      const productVariants = product?.variants
      map[product?.id!] = {}

      for (const variant of productVariants!) {
        if (!variant.options || !variant.id) continue

        const temp: Record<string, string> = {}

        for (const option of variant.options) {
          temp[option.id] = option.value
        }

        map[product?.id!][variant.id] = temp
      }
    }

    return map
  }, [pricedProducts])

  // memoized function to check if the current options are a valid variant for each product
  const variants = useMemo(() => {
    const result: Record<string, PricedVariant> = {}

    for (const product of pricedProducts) {
      let variantId: string | undefined = undefined

      for (const key of Object.keys(variantRecords[product?.id!])) {
        if (isEqual(variantRecords[product?.id!][key], options[product?.id!])) {
          variantId = key
        }
      }
      const variant = product?.variants.find((v) => v.id === variantId);

      if (!variant) {
        console.error(`Variant not found for product ID: ${product?.id}`);
        // Handle the error appropriately. Maybe assign a default variant or throw an error.
        // For demonstration, I'll just assign the first variant as a fallback.
        result[product?.id!] = product?.variants[0]!;
      } else {
        result[product?.id!] = variant;
      }
    }

    return result
  }, [options, variantRecords, pricedProducts])

  // if a product only has one variant, then select it
  useEffect(() => {
    const newOptions = { ...options }

    for (const product of pricedProducts) {
      if (product?.variants.length === 1 && product.variants[0].id) {
        newOptions[product?.id!] = variantRecords[product?.id!][product.variants[0].id]
      }
    }

    setOptions(newOptions)
  }, [pricedProducts, variantRecords])

  // update the options when a variant is selected for a product
  const updateOptions = (productId: string, update: Record<string, string>) => {
    setOptions({ ...options, [productId]: { ...options[productId], ...update } })
  }

  const inStock = useMemo(() => {
    const result: Record<string, boolean> = {}

    for (const product of pricedProducts) {
      const variant = variants[product?.id!]

      // If we don't manage inventory, we can always add to cart
      if (variant && !variant.manage_inventory) {
        result[product?.id!] = true
        continue
      }

      // If we allow back orders on the variant, we can add to cart
      if (variant && variant.allow_backorder) {
        result[product?.id!] = true
        continue
      }

      // If there is inventory available, we can add to cart
      if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
        result[product?.id!] = true
        continue
      }

      // Otherwise, we can't add to cart
      result[product?.id!] = false
    }

    return result
  }, [variants, pricedProducts])

  const swiperRef = useRef<HTMLDivElement>(null);

  const variantsSwiperRef = useRef<HTMLDivElement>(null);

  // const idRef = useRef<string>(uniqueId('carousel_'));
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const [variantsSwiper, setVariantsSwiper] = useState<Swiper | null>(null);

  const SwiperOptions: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".pagination-2",
      clickable: true,
    }
  };

  const variantsSwiperOptions: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: false,
  };

  useEffect(() => {
    if (swiperRef.current) {
      setSwiper(new Swiper(swiperRef.current, SwiperOptions));
    }

    if (variantsSwiperRef.current) {
      setVariantsSwiper(new Swiper(variantsSwiperRef.current, variantsSwiperOptions));
    }

    return () => {
      if (swiper !== null)
        swiper.destroy(true, true);

      if (variantsSwiper !== null)
        variantsSwiper.destroy(true, true);
    };
  }, [swiperRef.current, variantsSwiperRef.current]);

  useEffect(() => {
    if (swiper) {
      // This forces Swiper to recalculate slides and pagination
      swiper.update();
    }

    if (variantsSwiper) {
      // This forces Swiper to recalculate slides and pagination
      variantsSwiper.update();
    }
  }, [swiper, variantsSwiper]);

  const resolvedProducts = React.useMemo(() => pricedProducts, [pricedProducts]);

  return (
    <div>
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {
            (resolvedProducts)?.map((product) => {

              if (!product) {
                // Optionally, handle the case where product is undefined
                return null// Skip this iteration if product is undefined
              }

              const selectedVariant = variants[product?.id!];

              return (
                <div className='swiper-slide mr-[40]' key={product?.id}>
                  <div className="relative h-full p-0 rounded-[10px] isolate" aria-label={`${product.title} product`}>

                    <div className="w-full h-full absolute top-0 left-0 bg-[rgb(244,_248,_250)] rounded-[10px] overflow-hidden pointer-events-none
                    before:content-[''] before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[rgb(247,_248,_248)] before:duration-300 before:ease-in-out before:[transition-property:background-color]">
                    </div>

                    {/* <div className="flex flex-row items-center gap-[0.66667rem] p-[1.33333rem] absolute top-0 left-0 text-[0.66667rem] leading-none pointer-events-none">
                      <div className="pill inline-flex flex-row items-center justify-center px-[0.4rem] py-[0.26667rem] min-h-[1.33333rem] bg-[rgb(66,_100,_98)] rounded-[0.8rem] border border-solid border-[rgb(66,_100,_98)] text-[0.66667rem] leading-none font-bold text-[rgb(255,_255,_255)] uppercase text-center">
                        Save $20.85 on Hydration Set
                      </div>
                    </div> */}

                    <div className="relative text-center max-w-[clamp(632px,100%,100%)]">
                      <div className="productMedia max-w-[42.1333rem] mx-[auto] my-0">
                        <div className="productMedia_asset w-full pb-[100%] relative block">
                          <LocalizedClientLink href={`/products/${product.handle}`} className="productMedia_wrap group block hover:text-[#757575] hover:outline-[0]">
                            <img
                              className="productMedia_assetImage w-full h-full absolute top-0 left-0 object-cover"
                              src={product.thumbnail!}
                              alt="Swig Squad"
                              decoding="async"
                              loading="lazy"
                            />
                          </LocalizedClientLink>
                        </div>
                      </div>
                    </div>

                    <div className="shopCard_content flex flex-col gap-[clamp(1.06667rem,-2.29491px+1.06667rem+0.536193vw,1.6rem)] pt-[0rem] px-[1.33333rem] pb-[2.66667rem] text-center [@media(min-width:960px)]:pt-[0rem] [@media(min-width:960px)]:px-[2.66667rem] [@media(min-width:960px)]:pb-[2.66667rem]">
                      <div className="relative">
                        <h2 className="productTitle m-0 p-0 text-[clamp(1.06667rem,-1.14745px+1.06667rem+0.268097vw,1.33333rem)] leading-[1.2] font-bold text-[rgb(21,_58,_91)]">
                          {product.title}
                        </h2>
                      </div>

                      <div className="shopCard_variantsInfo relative flex justify-center gap-[0.53333rem 1.06667rem] flex-wrap">
                        <div className="flex justify-center items-center gap-[1.06667rem] text-[clamp(0.93333rem,-0.573727px+0.93333rem+0.134048vw,1.06667rem)] leading-normal text-[rgb(21,_58,_91)]">
                          <span>{selectedVariant.title}</span>
                        </div>

                        <div className="flex justify-center items-center gap-[1.06667rem] font-[Value] text-[clamp(0.93333rem,-0.573727px+0.93333rem+0.134048vw,1.06667rem)] leading-normal text-[rgb(21,_58,_91)]" aria-label="Select Pure Vibes size">
                          {
                            product.options?.map((option) => option.values.map((v) => v.value).filter(onlyUnique).map((v) => {
                              if (option.title === "Size")
                                return (
                                  <button
                                    onClick={() => { updateOptions(product?.id!, { [option.id]: v }) }}
                                    className="inline-flex text-center opacity-100 duration-300 ease-in-out [transition-property:opacity,_text-decoration-color] cursor-pointer p-0 m-0 [font:inherit]" type="button" aria-label="Select 17 oz size">
                                    {v}
                                  </button>
                                )
                            }))
                          }
                        </div>
                      </div>

                      <div className="shopCard_variants -mx-[1.33333rem] my-[0rem] [@media(min-width:960px)]:-mx-[2.66667rem] [@media(min-width:960px)]:my-[0rem]">
                        <div className="flex justify-center relative max-w-[38rem] mx-[auto] my-0 px-[3.73333rem] py-[0rem]">
                          <div ref={variantsSwiperRef} className="swiper relative overflow-hidden m-0 max-w-[17.0667rem] [@media(min-width:266px)and(max-width:330px)]:max-w-[17.0667rem]">
                            <div className="swiper-wrapper flex [flex-flow:row] translate-x-[calc(0px)] duration-300 ease-in-out [transition-property:transform]" aria-label="Select Pure Vibes variant">
                              {
                                product.options?.map((option) => option.values.map((v) => v.value).filter(onlyUnique).map((v) => {
                                  if (option.title === "Color")
                                    return (
                                      <div className="swiper-slide flex-[0_0_64px] w-[64px] p-0">
                                        <button 
                                          onClick={() => { updateOptions(product?.id!, { [option.id]: v }) }}
                                          // title={option.title}
                                          className="box-border w-full pb-[100%] flex relative bg-transparent isolate cursor-pointer overflow-hidden [border-width:initial] border-none [border-color:initial] [border-image:initial] rounded-[4px]
                                          after:content-[''] after:block after:w-full after:h-full after:absolute after:left-0 after:top-0 after:pointer-events-none after:duration-300 after:ease-in-out after:[transition-property:border-color] after:border after:border-solid after:border-[rgba(21,_58,_91,_0.4)] after:rounded-[4px]" type="button">
                                          {product?.variants && product.variants.map((variant) => {
                                            if (v === variant.title)
                                              return (
                                                <img
                                                  className="top-0 left-0 absolute w-full h-full object-cover pointer-events-none"
                                                  src=""
                                                  alt="Pure Vibes Obsidian Black"
                                                  decoding="async"
                                                  loading="lazy"
                                                />
                                              )
                                          })}
                                        </button>
                                      </div>
                                    )
                                }))
                              }
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="!border-[0px] [clip:rect(1px,_1px,_1px,_1px)!important] [clip-path:inset(50%)!important] !h-px !-m-[1px] !overflow-hidden !p-0 !absolute !w-px !whitespace-nowrap">
                        Starting at $109.00 instead of $129.85
                      </div>
                      <div className="relative text-[clamp(0.93333rem,-0.573727px+0.93333rem+0.134048vw,1.06667rem)] leading-normal text-[rgb(21,_58,_91)]" aria-hidden="true">
                        <span className="priceOld line-through" aria-hidden="true">
                          $129.85
                        </span>
                        <span className="priceCurrent" aria-hidden="true">
                          $109
                        </span>
                      </div>

                    </div>
                    
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="swiper-pagination pagination-2"></div>
    </div>
  );
}

export default ProductSwiper;

