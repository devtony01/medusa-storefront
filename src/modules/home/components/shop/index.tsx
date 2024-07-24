export default async function Shop() {
    return (
      <div className="flex flex-col pl-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] pr-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] mt-[40px] bg-[#ffffff] [@media(min-width:780px)]:mt-[80px]">
        <div className="section-layout-heading mb-[clamp(2.188rem,1.92rem+1.19vw,2.5rem)] [@media(min-width:780px)]:mb-[2.66667rem]">
          <div className="section-layout-heading-text">
            <h1 className="section-title text-[clamp(2.13333rem,calc(2.13333rem+(32)*((100vw-428px)/(1920-428))),4.26667rem)] leading-[clamp(3.2rem,calc(3.2rem+(32)*((100vw-428px)/(1920-428))),5.33333rem)] text-[#153a5b] font-bold tracking-[-0.00133rem] mb-0 mt-0 [@media(min-width:1440px)]:mb-0">
              Shop
            </h1>
          </div>
        </div>
  
        <div className="grid grid-rows-[repeat(3,_1fr)] gap-y-[2.66667rem] [@media(min-width:780px)]:grid-cols-[repeat(3,_1fr)] [@media(min-width:780px)]:grid-rows-[1fr] [@media(min-width:780px)]:gap-y-0 [@media(min-width:780px)]:gap-x-[2.66667rem]">
          <div className="flex items-center flex-col relative">
            <a className="shop-preview_link text-[1.06667rem] leading-[clamp(1.5rem,1.385rem+0.513vw,2rem)] tracking-[0.00133rem] text-[#153a5b] no-underline overflow-hidden rounded-[0.66667rem] text-center [@media(min-width:1920px)]:leading-[2.13333rem]"
              aria-label="Shop for Purification products"
              href="/shop?shop=purification">
              <div className="shop-preview_image rounded-[0.66667rem] overflow-hidden">
                <img className="[transition:0.8s_ease-in-out] hover:scale-[1.01]"
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781791/Homepage-v3/Navigation/update/purification-big.jpg"
                  alt="purification" />
              </div>
              <h3 className="shop-preview_title text-[clamp(1.625rem,1.946rem+-1.429vw,1.25rem)] leading-[clamp(2.188rem,1.92rem+1.19vw,2.5rem)] font-bold text-[#153a5b] mt-[1.33333rem] mb-[0.66667rem] [@media(min-width:780px)]:text-[clamp(1.25rem,0.6rem+1.333vw,1.5rem)] [@media(min-width:780px)]:leading-[clamp(1.5rem,0.2rem+2.667vw,2rem)] [@media(min-width:1080px)]:text-[clamp(1.5rem,1.018rem+0.714vw,1.875rem)] [@media(min-width:1080px)]:leading-[clamp(2rem,1.357rem+0.952vw,2.5rem)] [@media(min-width:1920px)]:text-[2rem] [@media(min-width:1920px)]:leading-[2.66667rem]">
                Purification
              </h3>
              <span className="shop-preview_subLink underline">
                Shop now
              </span>
            </a>
          </div>
  
          <div className="flex items-center flex-col relative">
            <a className="shop-preview_link text-[1.06667rem] leading-[clamp(1.5rem,1.385rem+0.513vw,2rem)] tracking-[0.00133rem] text-[#153a5b] no-underline overflow-hidden rounded-[0.66667rem] text-center [@media(min-width:1920px)]:leading-[2.13333rem]"
              aria-label="Shop for Home products"
              href="/shop?shop=home">
              <div className="shop-preview_image rounded-[0.66667rem] overflow-hidden">
                <img className="[transition:0.8s_ease-in-out] hover:scale-[1.01]"
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/home-big.jpg"
                  alt="home" />
              </div>
              <h3 className="shop-preview_title text-[clamp(1.625rem,1.946rem+-1.429vw,1.25rem)] leading-[clamp(2.188rem,1.92rem+1.19vw,2.5rem)] font-bold text-[#153a5b] mt-[1.33333rem] mb-[0.66667rem] [@media(min-width:780px)]:text-[clamp(1.25rem,0.6rem+1.333vw,1.5rem)] [@media(min-width:780px)]:leading-[clamp(1.5rem,0.2rem+2.667vw,2rem)] [@media(min-width:1080px)]:text-[clamp(1.5rem,1.018rem+0.714vw,1.875rem)] [@media(min-width:1080px)]:leading-[clamp(2rem,1.357rem+0.952vw,2.5rem)] [@media(min-width:1920px)]:text-[2rem] [@media(min-width:1920px)]:leading-[2.66667rem]">
                Home
              </h3>
              <span className="shop-preview_subLink underline">
                Shop now
              </span>
            </a>
          </div>
  
          <div className="flex items-center flex-col relative">
            <a className="shop-preview_link text-[1.06667rem] leading-[clamp(1.5rem,1.385rem+0.513vw,2rem)] tracking-[0.00133rem] text-[#153a5b] no-underline overflow-hidden rounded-[0.66667rem] text-center [@media(min-width:1920px)]:leading-[2.13333rem]"
              aria-label="Shop for Drinkware products"
              href="/shop?shop=drinkware">
              <div className="shop-preview_image rounded-[0.66667rem] overflow-hidden">
                <img className="[transition:0.8s_ease-in-out] hover:scale-[1.01]"
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/drinkware-big-us.jpg"
                  alt="drinkware" />
              </div>
              <h3 className="shop-preview_title text-[clamp(1.625rem,1.946rem+-1.429vw,1.25rem)] leading-[clamp(2.188rem,1.92rem+1.19vw,2.5rem)] font-bold text-[#153a5b] mt-[1.33333rem] mb-[0.66667rem] [@media(min-width:780px)]:text-[clamp(1.25rem,0.6rem+1.333vw,1.5rem)] [@media(min-width:780px)]:leading-[clamp(1.5rem,0.2rem+2.667vw,2rem)] [@media(min-width:1080px)]:text-[clamp(1.5rem,1.018rem+0.714vw,1.875rem)] [@media(min-width:1080px)]:leading-[clamp(2rem,1.357rem+0.952vw,2.5rem)] [@media(min-width:1920px)]:text-[2rem] [@media(min-width:1920px)]:leading-[2.66667rem]">
                Drinkware
              </h3>
              <span className="shop-preview_subLink underline">
                Shop now
              </span>
            </a>
            <div className="absolute top-[1.33333rem] left-[1.33333rem] inline-flex flex-row items-center justify-center px-[0.66667rem] py-[0.4rem] min-h-[1.46667rem] bg-[#ffffff] rounded-[0.66667rem] text-[0.66667rem] leading-none font-bold text-[#153a5b] uppercase text-center">
              New
            </div>
          </div>
        </div>
      </div>
    )
  }
  