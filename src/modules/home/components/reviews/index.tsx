"use client"

import { useRef, useEffect, useState } from 'react';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import uniqueId from 'lodash/uniqueId';

import "swiper/css";
import "../styles.css"

const Reviews = () => {

  const swiperRef = useRef<HTMLDivElement>(null);
  // const idRef = useRef<string>(uniqueId('carousel_'));
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const options: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".pagination-1",
      clickable: true,
    },
  };

  useEffect(() => {
    if (swiperRef.current) {
      setSwiper(new Swiper(swiperRef.current, options));

      return () => {
        if (swiper !== null)
          swiper.destroy(true, true);
      };
    }
  }, [swiperRef.current]);

  useEffect(() => {
    if (swiper) {
      // This forces Swiper to recalculate slides and pagination
      swiper.update();
    }
  }, [swiper]);

  return (
    <div className="slider-wrap [@media(min-width:1440px)]:mr-0 [@media(min-width:1440px)]:[flex-basis:93.33333rem]">
      <section className="mx-[-56.5791px] [@media(min-width:1440px)]:mx-0">
        <div className="swiper reviews-swiper" ref={swiperRef}>
            <div className='swiper-wrapper reviews-swiper-wrapper'>
              <div className="swiper-slide reviews-swiper-slide" style={{ marginRight: "40px" }}>
                <div className="flex flex-col h-full font-[Value] text-[#153a5b] bg-[#f5f9fc] p-[1.6rem] [@media(min-width:1440px)]:bg-none [@media(min-width:1440px)]:p-0 [@media(min-width:1440px)]:max-w-[21.33333rem] [@media(min-width:1440px)]:[flex-basis:21.33333rem]">
                  <div className="reviewItem_quote text-[clamp(1.06667rem,calc(1.06667rem+(4)*((100vw-428px)/(1920-428))),1.33333rem)] leading-[clamp(1.6rem,calc(1.6rem+(8)*((100vw-428px)/(1920-428))),2.13333rem)] mb-[clamp(3.75rem,0.046rem+18.519vw,5rem)]">
                    What’s the Next Status Water Bottle? Three of our experts named
                    the LARQ bottle as one to watch.
                  </div>
                  <div className="reviewItem_by mt-auto">
                    <img className="reviewItem_byLogo w-[clamp(4.688rem,0.058rem+23.148vw,6.25rem)] max-w-none h-auto ml-px"
                      src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/strategist.png"
                      alt="The Strategist"
                      decoding="async"
                      loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide reviews-swiper-slide" style={{ marginRight: "40px" }}>
                <div className="flex flex-col h-full font-[Value] text-[#153a5b] bg-[#f5f9fc] p-[1.6rem] [@media(min-width:1440px)]:bg-none [@media(min-width:1440px)]:p-0 [@media(min-width:1440px)]:max-w-[21.33333rem] [@media(min-width:1440px)]:[flex-basis:21.33333rem]">
                  <div className="reviewItem_quote text-[clamp(1.06667rem,calc(1.06667rem+(4)*((100vw-428px)/(1920-428))),1.33333rem)] leading-[clamp(1.6rem,calc(1.6rem+(8)*((100vw-428px)/(1920-428))),2.13333rem)] mb-[clamp(3.75rem,0.046rem+18.519vw,5rem)]">
                    The result is that every glass of water tastes crisp and fresh.
                  </div>
                  <div className="reviewItem_by mt-auto">
                    <img className="reviewItem_byLogo w-[clamp(4.688rem,0.058rem+23.148vw,6.25rem)] max-w-none h-auto ml-px"
                      src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/oprah_Magazine.png"
                      alt="The Oprah Magazine"
                      decoding="async"
                      loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide reviews-swiper-slide" style={{ marginRight: "40px" }}>
                <div className="flex flex-col h-full font-[Value] text-[#153a5b] bg-[#f5f9fc] p-[1.6rem] [@media(min-width:1440px)]:bg-none [@media(min-width:1440px)]:p-0 [@media(min-width:1440px)]:max-w-[21.33333rem] [@media(min-width:1440px)]:[flex-basis:21.33333rem]">
                  <div className="reviewItem_quote text-[clamp(1.06667rem,calc(1.06667rem+(4)*((100vw-428px)/(1920-428))),1.33333rem)] leading-[clamp(1.6rem,calc(1.6rem+(8)*((100vw-428px)/(1920-428))),2.13333rem)] mb-[clamp(3.75rem,0.046rem+18.519vw,5rem)]">
                    Easier to drink through the straw than other water filter
                    bottles.
                  </div>
                  <div className="reviewItem_by mt-auto">
                    <img className="reviewItem_byLogo w-[clamp(4.688rem,0.058rem+23.148vw,6.25rem)] max-w-none h-auto ml-px"
                      src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1704808606/v3-images/media-block/Good_Housekeeping.png"
                      alt="Good Housekeeping"
                      decoding="async"
                      loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide reviews-swiper-slide" style={{ marginRight: "40px" }}>
                <div className="flex flex-col h-full font-[Value] text-[#153a5b] bg-[#f5f9fc] p-[1.6rem] [@media(min-width:1440px)]:bg-none [@media(min-width:1440px)]:p-0 [@media(min-width:1440px)]:max-w-[21.33333rem] [@media(min-width:1440px)]:[flex-basis:21.33333rem]">
                  <div className="reviewItem_quote text-[clamp(1.06667rem,calc(1.06667rem+(4)*((100vw-428px)/(1920-428))),1.33333rem)] leading-[clamp(1.6rem,calc(1.6rem+(8)*((100vw-428px)/(1920-428))),2.13333rem)] mb-[clamp(3.75rem,0.046rem+18.519vw,5rem)]">
                    You Should Ditch Your Old Water Dispenser For The High-Tech LARQ
                    Pitcher PureVis™.
                  </div>
                  <div className="reviewItem_by mt-auto">
                    <img className="reviewItem_byLogo w-[clamp(4.688rem,0.058rem+23.148vw,6.25rem)] max-w-none h-auto ml-px"
                      src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1689147058/v3-images/media-block/BP-logo-black.png"
                      alt="Best"
                      decoding="async"
                      loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="swiper-pagination pagination-1"></div>
      </section>
    </div>
  )
}

export default Reviews