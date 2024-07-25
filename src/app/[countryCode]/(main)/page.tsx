import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Reviews from "@modules/home/components/reviews"
import Rating from "@modules/home/components/rating"
import Shop from "@modules/home/components/shop"
import Infographic from "@modules/home/components/infographic"
import Hero from "@modules/home/components/hero"
import Article from "@modules/home/components/article"
import Magazine from "@modules/home/components/magazine"

import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"


export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  // const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  // if (!collections || !region) {
  //   return null
  // }

  if (!region) {
    return null
  }

  return (
    <>
      <div>
        <main>
          <Hero />
          <div className="flex flex-col pl-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] pr-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] mt-[40px] bg-[#ffffff] [@media(min-width:780px)]:mt-[80px]">
            <div className="min-h-[1.33333rem] text-[#153a5b] [@media(min-width:1440px)]:block [@media(min-width:1440px)]:justify-between [@media(min-width:1440px)]:gap-[2.66667rem]">
              <Rating />
              <Reviews />
            </div>
          </div>
          <Shop />
          <Infographic />
          <ul className="list-none">
          <FeaturedProducts collections={[]} region={region} />
          </ul>
          <Article />
          {/* <Magazine /> */}
        </main>
      </div>
    </>
  )
}
