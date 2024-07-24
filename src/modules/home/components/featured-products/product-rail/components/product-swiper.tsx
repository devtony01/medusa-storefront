"use client"

import React, { useRef, useEffect, useState } from 'react';
import { Region, ProductVariant } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { onlyUnique } from "@lib/util/only-unique";
import Swiper from 'swiper';
import { Navigation, Pagination, } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import "swiper/css";
import "../../../styles.css";

interface PricedProductProps {
    pricedProducts: (PricedProduct | null)[];
    isFeatured?: boolean;
    region: Region;
}

const ProductSwiper: React.FC<PricedProductProps> = ({ pricedProducts, isFeatured, region }) => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const variantsSwiperRef = useRef<HTMLDivElement>(null);

    const [swiper, setSwiper] = useState<Swiper | null>(null);
    const [variantsSwiper, setVariantsSwiper] = useState<Swiper | null>(null);

    const swiperOptions: SwiperOptions = {
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
        spaceBetween: 1,
        slidesPerView: "auto",
    };

    useEffect(() => {
        if (swiperRef.current && !swiper) {
            const newSwiper = new Swiper(swiperRef.current, swiperOptions);
            setSwiper(newSwiper);
        }

        if (variantsSwiperRef.current && !variantsSwiper) {
            const newVariantsSwiper = new Swiper(variantsSwiperRef.current, variantsSwiperOptions);
            setVariantsSwiper(newVariantsSwiper);
        }

        return () => {
            if (swiper) swiper.destroy(true, true);
            if (variantsSwiper) variantsSwiper.destroy(true, true);
        };
    }, [swiperRef, variantsSwiperRef, swiper, variantsSwiper]);

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);

    useEffect(() => {
        if (variantsSwiper) {
            variantsSwiper.update();
        }
    }, [variantsSwiper]);

    const resolvedProducts = React.useMemo(() => pricedProducts, [pricedProducts]);

    return (
        <div>
            <div className="swiper product-swiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                    {resolvedProducts?.map((product) => {
                        if (!product) {
                            return null; // Skip this iteration if product is undefined
                        }

                        return (
                            <div className="swiper-slide product-swiper-slide" key={product?.id} style={{ marginRight: "40px" }}>
                                <div className="relative h-full p-0 rounded-[10px] isolate" aria-label={`${product.title} product`}>
                                    <div className="w-full h-full absolute top-0 left-0 bg-[rgb(244,_248,_250)] rounded-[10px] overflow-hidden pointer-events-none
                                    before:content-[''] before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[rgb(247,_248,_248)] before:duration-300 before:ease-in-out before:[transition-property:background-color]">
                                    </div>

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

                                        <div className="shopCard_variantsInfo relative flex justify-center gap-y-[0.53333rem] gap-x-[1.06667rem] flex-wrap">
                                            <div className="flex justify-center items-center gap-[1.06667rem] text-[clamp(0.93333rem,-0.573727px+0.93333rem+0.134048vw,1.06667rem)] leading-normal text-[rgb(21,_58,_91)] pr-1">
                                                {/* <span>{selectedVariant.title}</span> */}
                                                <span>Obsidian Black</span>
                                            </div>

                                            <div className="flex justify-center items-center gap-[1.06667rem] font-[Value] text-[clamp(0.93333rem,-0.573727px+0.93333rem+0.134048vw,1.06667rem)] leading-normal text-[rgb(21,_58,_91)]" aria-label="Select Pure Vibes size">
                                                {product.options?.map((option) => option.values.map((v) => v.value).filter(onlyUnique).map((v) => {
                                                    if (option.title === "Size") {
                                                        return (
                                                            <button
                                                                key={option.id}
                                                                // onClick={() => { updateOptions(product?.id!, { [option.id]: v }) }}
                                                                className="inline-flex text-center opacity-100 duration-300 ease-in-out [transition-property:opacity,_text-decoration-color] cursor-pointer p-0 m-0 [font:inherit]" type="button" aria-label="Select 17 oz size">
                                                                {v}
                                                            </button>
                                                        );
                                                    }
                                                    return null;
                                                }))}
                                            </div>
                                        </div>

                                        <div className="shopCard_variants -mx-[1.33333rem] my-[0rem] [@media(min-width:960px)]:-mx-[2.66667rem] [@media(min-width:960px)]:my-[0rem]">
                                            <div className="flex justify-center relative max-w-[38rem] mx-[auto] my-0 px-[3.73333rem] py-[0rem]">
                                                <div ref={variantsSwiperRef} className="swiper variantsSwiper_swiper">
                                                    <div className="swiper-wrapper variantsSwiper_swiper_inner" aria-label="Select Pure Vibes variant">
                                                        {product.options?.map((option) => option.values.map((v) => v.value).filter(onlyUnique).map((v) => {
                                                            if (option.title === "Color") {
                                                                return (
                                                                    <div className="swiper-slide variantsSwiper_swiper_item" key={option.id}>
                                                                        <div>
                                                                            <button>
                                                                                {v}
                                                                            </button>
                                                                        </div>

                                                                    </div>
                                                                );
                                                            }
                                                            return null;
                                                        }))}
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
                    })}
                </div>
            </div>
            <div className="swiper-pagination pagination-2"></div>
        </div>
    );
};

export default ProductSwiper;
