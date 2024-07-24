 export default async function FeaturedProducts() {
    return (
      <div className="flex flex-col pl-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] pr-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] mt-[40px] bg-[#ffffff] [@media(min-width:780px)]:mt-[80px]">
        <article className="bg-[linear-gradient(41.11deg,_#F9E9E8_0%,_rgba(235,_243,_249,_0)_100%)] w-full grid grid-rows-[repeat(3,_1fr)] pl-[clamp(2.5rem,1.667rem+3.704vw,5rem)] pr-[clamp(2.5rem,1.667rem+3.704vw,5rem)] pt-[5.33333rem] pb-[5.33333rem] items-center gap-y-[4.66667rem] rounded-[0.66667rem] [@media(min-width:780px)]:grid-rows-[repeat(1,_1fr)] [@media(min-width:780px)]:grid-cols-[repeat(3,_1fr)] [@media(min-width:780px)]: [@media(min-width:780px)]:gap-x-[5.33333rem] [@media(min-width:780px)]:gap-y-0">
          <div className="flex flex-col items-center">
            <div className="usp-card_icon mb-[1.33333rem]">
              <span className="inline-flex align-middle select-none flex-shrink-0 text-[3.2rem]"
                color="F3756D">
                <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit]"
                  focusable="false" viewBox="0 0 48 48" color="text.default" aria-hidden="true">
                  <path fill="#F3756D" fillRule="evenodd" d="M15.024 19.49c0-.539.437-.975.976-.975h16.5a.975.975 0 0 1 .974.975v.525H35.5a2.475 2.475 0 0 1 2.474 2.475v3a2.475 2.475 0 0 1-2.474 2.475h-2.026v.525a.975.975 0 0 1-.974.975H16a.975.975 0 0 1-.976-.975v-.525H13a2.475 2.475 0 0 1-2.476-2.475v-3A2.475 2.475 0 0 1 13 20.015h2.024v-.525Zm0 2.475H13a.525.525 0 0 0-.525.525v3c0 .29.235.525.524.525h2.025v-4.05Zm1.95 5.55h14.55v-7.05h-14.55v7.05Zm16.5-5.55v4.05H35.5c.29 0 .525-.235.525-.525v-3a.525.525 0 0 0-.526-.525h-2.025Z" clipRule="evenodd"></path>
                  <path fill="#F3756D" fillRule="evenodd" d="M32.053 2.083a.975.975 0 0 1 1.264.55l2.127 5.407-5.408 2.127a.975.975 0 1 1-.713-1.814l2.521-.992A18.285 18.285 0 0 0 8.585 33.418a.975.975 0 1 1-1.671 1.004A20.235 20.235 0 0 1 32.326 5.44l-.824-2.093a.975.975 0 0 1 .55-1.264Zm8.194 11.141a.975.975 0 0 1 1.338.334A20.235 20.235 0 0 1 16.154 42.53l.815 2.107a.975.975 0 0 1-1.819.704l-1.74-4.5a.975.975 0 0 1 .55-1.259l4.47-1.77a.975.975 0 1 1 .718 1.813l-2.5.99a18.286 18.286 0 0 0 23.266-26.054.975.975 0 0 1 .333-1.338Z" clipRule="evenodd"></path>
                </svg>
              </span>
            </div>
            <h3 className="usp-card_title text-[clamp(1.33333rem,calc(1.33333rem+(10)*((100vw-428px)/(1920-428))),2rem)] leading-[clamp(2.13333rem,calc(2.13333rem+(8)*((100vw-428px)/(1920-428))),2.66667rem)] mb-[clamp(1.063rem,0.902rem+0.714vw,1.25rem)] mt-0 font-bold tracking-[-0.00133rem] text-[#153a5b] text-center [@media(min-width:780px)]:mb-[20px]">
              Say yes to refills
            </h3>
            <span className="usp-card_description text-[1.06667rem] leading-[1.6rem] text-center text-[#153a5b]">
              Save money and make single-use water bottles a thing of the past.
            </span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="usp-card_icon mb-[1.33333rem]">
              <span className="inline-flex align-middle select-none flex-shrink-0 text-[3.2rem]"
                color="F3756D">
                <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit]"
                  focusable="false" viewBox="0 0 48 48" color="text.default" aria-hidden="true">
                  <path fill="#F3756D" d="m24.64 6.341-.003-.002A1.01 1.01 0 0 0 23.87 6h-.047a.867.867 0 0 0-.677.34c-.125.138-12.422 15.46-12.422 22.668a13.139 13.139 0 1 0 26.274 0c0-7.127-12.236-22.512-12.359-22.667Zm10.41 22.667v.128a11.19 11.19 0 0 1-22.377-.128c0-5.858 9.906-18.81 11.188-20.461 2.666 3.494 11.19 15.088 11.19 20.46Z"></path>
                  <path fill="#F3756D" d="M23.697 34.892a.979.979 0 1 0 .004 1.958 8.213 8.213 0 0 0 8.202-8.202.98.98 0 0 0-1.958 0 6.251 6.251 0 0 1-6.244 6.244h-.004Z"></path>
                </svg>
              </span>
            </div>
            <h3 className="usp-card_title text-[clamp(1.33333rem,calc(1.33333rem+(10)*((100vw-428px)/(1920-428))),2rem)] leading-[clamp(2.13333rem,calc(2.13333rem+(8)*((100vw-428px)/(1920-428))),2.66667rem)] mb-[clamp(1.063rem,0.902rem+0.714vw,1.25rem)] mt-0 font-bold tracking-[-0.00133rem] text-[#153a5b] text-center [@media(min-width:780px)]:mb-[20px]">
              A smart way to sip
            </h3>
            <span className="usp-card_description text-[1.06667rem] leading-[1.6rem] text-center text-[#153a5b]">
              PureVis™ and Nano Zero technology improves water quality for a
              brilliant hydration experience on the go.
            </span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="usp-card_icon mb-[1.33333rem]">
              <span className="inline-flex align-middle select-none flex-shrink-0 text-[3.2rem]"
                color="F3756D">
                <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit]"
                  focusable="false" viewBox="0 0 48 48" color="text.default" aria-hidden="true">
                  <path
                    fill="#F3756D" d="M42.113 8.387a16.864 16.864 0 0 0-13.736 2.515 12.898 12.898 0 0 0-3.902 5.482 12.898 12.898 0 0 0-3.902-5.353A16.734 16.734 0 0 0 6.837 8.516.967.967 0 0 0 6 9.548a12.479 12.479 0 0 0 5.127 10.125 14.252 14.252 0 0 0 8.383 2.515 16.898 16.898 0 0 0 3.837-.484v17.283a1.031 1.031 0 0 0 2.032 0V21.543c1.331.319 2.694.491 4.063.516 2.989.062 5.922-.818 8.383-2.515a12.479 12.479 0 0 0 5.127-10.125.967.967 0 0 0-.838-1.032Zm-1.225 1.838A10.415 10.415 0 0 1 36.63 17.9a13.51 13.51 0 0 1-10.93 1.677 11.576 11.576 0 0 1 3.965-7.094 14.544 14.544 0 0 1 11.222-2.257ZM23.25 19.576A13.51 13.51 0 0 1 12.319 17.9a10.416 10.416 0 0 1-4.257-7.674 14.51 14.51 0 0 1 11.222 2.257 11.575 11.575 0 0 1 3.966 7.094Z"></path>
                </svg>
              </span>
            </div>
            <h3 className="usp-card_title text-[clamp(1.33333rem,calc(1.33333rem+(10)*((100vw-428px)/(1920-428))),2rem)] leading-[clamp(2.13333rem,calc(2.13333rem+(8)*((100vw-428px)/(1920-428))),2.66667rem)] mb-[clamp(1.063rem,0.902rem+0.714vw,1.25rem)] mt-0 font-bold tracking-[-0.00133rem] text-[#153a5b] text-center [@media(min-width:780px)]:mb-[20px]">
              Hydrate with purpose
            </h3>
            <span className="usp-card_description text-[1.06667rem] leading-[1.6rem] text-center text-[#153a5b]">
              A portion of proceeds supports environmental and clean water
              projects worldwide.
            </span>
          </div>
        </article>
      </div>
    )
  }
  