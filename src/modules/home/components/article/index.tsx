"use client"

import { useRef, useEffect, useState } from 'react';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "../styles.css"

const Article = () => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const [swiper, setSwiper] = useState<Swiper | null>(null);

    const options: SwiperOptions = {
        modules: [Pagination],
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".articleSwiper_swiper-pagination",
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
        <div>
            <section className="hero-container bg-[url(https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684953088/Homepage-v3/our_mission_mobile.jpg)] h-screen w-full bg-cover bg-center pl-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] pr-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)] pb-[clamp(2.5rem,1.429rem+4.762vw,3.75rem)] [transition:0.5s_ease-in-out] bg-no-repeat relative overflow-hidden min-h-[42rem]
            [@media(min-width:780px)]:bg-[url(https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684877508/Homepage-v3/our_mission.jpg)] [@media(min-width:780px)]:bg-center [@media(min-width:780px)]:bg-cover [@media(min-width:780px)]:h-[calc(100vh-55px)] [@media(min-width:780px)]:pt-16 [@media(min-width:780px)]:pb-16
            [@media(min-width:1440px)]:pb-[clamp(3.75rem,0rem+4.167vw,5rem)] [@media(min-width:1440px)]: [@media(min-width:1440px)]:bg-cover
            lg:min-h-[53.33333rem] lg:h-screen css-fixuoi eov0edr0">
                <div className="main-wrapper grid grid-cols-[repeat(1,_1fr)] items-end w-full h-full grid-flow-col [@media(min-width:780px)]:grid-cols-[repeat(2,_1fr)] [@media(min-width:780px)]:grid-flow-row
                after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[linear-gradient(rgba(21,_58,_91,_0)_0%,_rgba(21,_58,_91,_0)_33.33%,_rgba(21,_58,_91,_0.1)_66.67%,_rgba(21,_58,_91,_0.8)_100%)]">
                    <article className="flex flex-col [transition:0.8s_ease-in-out] css-1xsj4rk eov0edr1">
                        <div className="title text-[#ffffff] text-[clamp(1.06667rem,calc(1.06667rem+(4)*((100vw-428px)/(1920-428))),1.33333rem)] leading-[clamp(1.6rem,calc(1.6rem+(8)*((100vw-428px)/(1920-428))),2.13333rem)] mb-[clamp(0.469rem,0.284rem+0.379vw,0.625rem)] mt-0 [transition:0.8s_ease-in-out] font-normal
                        [@media(min-width:780px)]:leading-[clamp(1.375rem,0.784rem+1.212vw,1.875rem)] [@media(min-width:1440px)]:mb-[0.66667rem]">
                            Our mission</div>
                        <h2 className="headline text-[#ffffff] text-[clamp(2.13333rem,calc(2.13333rem+(48)*((100vw-428px)/(1920-428))),5.33333rem)] font-black leading-[clamp(3.33333rem,calc(3.33333rem+(30)*((100vw-428px)/(1920-428))),5.33333rem)] tracking-[-0.00133rem] max-w-[24.66667rem] mt-0 mb-[clamp(1.875rem,1.667rem+0.926vw,2.5rem)] [transition:0.8s_ease-in-out]
                        [@media(min-width:680px)]:max-w-full [@media(min-width:1440px)]:mb-[clamp(1.875rem,0rem+2.083vw,2.5rem)]">
                            Drink brilliantly</h2>
                        <div className="description text-[#ffffff] text-[1.33333rem] leading-[2.13333rem] tracking-[0.00133rem] max-w-[37.33333rem] opacity-90 [transition:0.8s_ease-in-out]">We make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere.</div>
                        <div className="hero-cta">
                            <button aria-label="Learn more" type="button" 
                            className="hero-cta_button flex align-middle items-center justify-between relative min-w-[0] m-0 !px-[1.06667rem] !py-[0.8rem] border-solid rounded-[75px] bg-[#ffffff] font-[Value_Bold] text-[clamp(0.938rem,1.152rem+-0.952vw,0.688rem)] leading-none tracking-[0] no-underline cursor-pointer duration-300 ease-in-out delay-[0ms] [transition-property:border-color,_color,_background-color,_text-decoration-color] select-none border-[0] w-[fit-content] gap-[1.06667rem] [transition:0.5s_ease-in-out] [backface-visibility:hidden] outline-[1px_solid_transparent] will-change-transform 
                            [@media(min-width:1440px)]:text-[1rem] [@media(min-width:1440px)]:rounded-[100px] [@media(min-width:1440px)]:text-[#153a5b] 
                            [@media(min-width:960px)]:min-w-[0] [@media(min-width:960px)]:px-[1.66667rem] [@media(min-width:960px)]:py-4 [@media(min-width:960px)]:text-[1rem]
                            mt-[clamp(1.875rem,1.667rem+0.926vw,2.5rem)] [@media(min-width:1440px)]:mt-[2.66667rem] css-1575s3f edhpqag0" tabIndex={0}>
                                <span className='text-[#153a5b]'>Learn more</span>
                                <span className="btn_icon btn_iconRight [display:inherit] text-[1.6rem] mx-[0rem] -my-[0.26667rem] [@media(min-width:960px)]:text-[1.6rem] -mr-[0.26667rem] text-[#153a5b] ml-0">
                                    <span color="text.default" className="inline-flex align-middle select-none flex-shrink-0 text-[1rem] text-[#153a5b] css-k6mmje e18bqli0">
                                        <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit] [transition:0.5s_ease-in-out] fill-[#153A5B] opacity-60 css-82n8sf expsv8r0" focusable="false" viewBox="0 0 22 10" color="text.default" aria-hidden="true">
                                            <path d="M10.4688 10.7812C10.3125 10.6562 10.25 10.4688 10.25 10.25C10.25 10.0625 10.3125 9.875 10.4688 9.75L13.4375 6.75H0.75C0.3125 6.75 0 6.4375 0 6C0 5.59375 0.3125 5.25 0.75 5.25H13.4375L10.4688 2.28125C10.1562 2 10.1562 1.53125 10.4688 1.25C10.75 0.9375 11.2188 0.9375 11.5312 1.25L15.7812 5.5C16.0625 5.78125 16.0625 6.25 15.7812 6.53125L11.5312 10.7812C11.2188 11.0938 10.75 11.0938 10.4688 10.7812Z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </article>
                    {/* <div data-focus-guard="true" tabIndex={-1} style="width:1px;height:0px;padding:0;overflow:hidden;position:fixed;top:1px;left:1px"></div> */}
                    {/* <div data-focus-lock-disabled="disabled">
                        <div className="active-slider-wrap">
                            <div className="main-wrapper_slider [transition:0.8s_ease-in-out] z-[29] [@media(min-width:1440px)]:grid [@media(min-width:1440px)]:items-center [@media(min-width:1440px)]:absolute [@media(min-width:1440px)]:z-20 [@media(min-width:1440px)]:top-[0] [@media(min-width:1440px)]:right-[0] [@media(min-width:1440px)]:h-full [@media(min-width:1440px)]:w-[78vw] [@media(min-width:1440px)]:[transition:0.5s_ease-in-out] [@media(min-width:1440px)]:translate-x-[40%]
                            after:content-[''] after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-[rgb(7,_29,_53)] after:[transition:all_0.8s_ease-in-out_0s]
                            [@media(min-width:1440px)]:after:content-[''] [@media(min-width:1440px)]:after:absolute [@media(min-width:1440px)]:after:top-0 [@media(min-width:1440px)]:after:right-0 [@media(min-width:1440px)]:after:w-0 [@media(min-width:1440px)]:after:h-full [@media(min-width:1440px)]:after:bg-[linear-gradient(90deg,_rgba(21,_58,_91,_0)_0%,_rgb(9,_33,_58)_74.93%,_rgb(7,_29,_53)_100%)] [@media(min-width:1440px)]:after:[transition:all_0.5s_ease-in-out_0s] [@media(min-width:1440px)]:after:z-[19]">
                                <section className="h-[30rem] lg:h-[35.5rem] [@media(min-width:1440px)]:mr-0 [@media(min-width:1440px)]:ml-0 css-wo0113 ecovu060">
                                    <div className="swiper articleSwiper_swiper" ref={swiperRef}>
                                        <div className="swiper-wrapper articleSwiper_swiper-wrapper">

                                            <div className="swiper-slide articleSwiper_swiper-slide">
                                                <article className="bg-[#153A5B] bg-cover bg-center w-full max-w-[410px] rounded-[0.66667rem] flex flex-col justify-end cursor-pointer [transition:0.5s_ease-in-out] h-full css-w81niy e1gsbpxt0">
                                                    <img className="slider-card_image box-border w-full h-full max-w-[410px] rounded-[0.66667rem] object-cover" src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-1.jpg" alt="LARQ Bottle PureVis™ Granite White in a hand" />
                                                    <div className="slider-card_innerWrapper absolute bottom-[40px] left-[0] pl-[20px] pr-[20px] [transition:0.5s_ease-in-out] [@media(min-width:780px)]:pl-[40px] [@media(min-width:780px)]:pr-[40px]">
                                                        <h3 className="slider-card_headline z-[2] [transition:0.5s_ease-in-out] text-[1.33333rem] leading-[2.13333rem] font-bold text-[#ffffff] m-0">Award winning design</h3>
                                                        <span className="slider-card_description [transition:0.5s_ease-in-out] tracking-[0.02em] text-[1.06667rem] leading-[1.6rem] text-[#ffffff] z-[2]">When it comes to form and function, we’ve got it down.</span>
                                                        <a href="/shop" className="slider-card_cta flex align-middle items-center justify-between relative min-w-[0] m-0 !px-[1.06667rem] !py-[0.8rem] border-solid rounded-[75px] bg-[#ffffff] font-[Value_Bold] text-[clamp(0.938rem,1.152rem+-0.952vw,0.688rem)] leading-none tracking-[0] no-underline cursor-pointer duration-300 ease-in-out delay-[0ms] [transition-property:border-color,_color,_background-color,_text-decoration-color] select-none border-[0] w-[fit-content] gap-[1.06667rem] [transition:0.5s_ease-in-out] [backface-visibility:hidden] outline-[1px_solid_transparent]
                                                        mt-[1.6rem] text-[rgb(21,_58,_91)]
                                                        [@media(min-width:960px)]:min-w-[0] [@media(min-width:960px)]:px-[1.66667rem] [@media(min-width:960px)]:py-4 [@media(min-width:960px)]:text-[1rem]
                                                        [@media(min-width:1440px)]:text-[1rem] [@media(min-width:1440px)]:rounded-[100px] [@media(min-width:1440px)]:text-[#153a5b]
                                                        [@media(min-width:1440px)]:opacity-0 [@media(min-width:1440px)]:translate-y-[20px] [@media(min-width:1440px)]:[transition:opacity_0.5s_ease-in-out_0s,_transform_0.5s_ease-in-out_0s] [@media(min-width:1440px)]:absolute [@media(min-width:1440px)]:-bottom-[60px] [@media(min-width:1440px)]:mt-0 will-change-transform css-1575s3f edhpqag0" tabIndex={-1}>Shop now
                                                            <span className="btn_icon btn_iconRight [display:inherit] text-[1.6rem] mx-[0rem] -my-[0.26667rem] [@media(min-width:960px)]:text-[1.6rem] -mr-[0.26667rem]">
                                                                <span color="text.default" className="inline-flex align-middle select-none flex-shrink-0 text-[1rem] css-k6mmje e18bqli0">
                                                                    <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit] [transition:0.5s_ease-in-out] fill-[#153A5B] opacity-60 css-82n8sf expsv8r0" focusable="false" viewBox="0 0 22 10" color="text.default" aria-hidden="true">
                                                                        <path d="M10.4688 10.7812C10.3125 10.6562 10.25 10.4688 10.25 10.25C10.25 10.0625 10.3125 9.875 10.4688 9.75L13.4375 6.75H0.75C0.3125 6.75 0 6.4375 0 6C0 5.59375 0.3125 5.25 0.75 5.25H13.4375L10.4688 2.28125C10.1562 2 10.1562 1.53125 10.4688 1.25C10.75 0.9375 11.2188 0.9375 11.5312 1.25L15.7812 5.5C16.0625 5.78125 16.0625 6.25 15.7812 6.53125L11.5312 10.7812C11.2188 11.0938 10.75 11.0938 10.4688 10.7812Z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="swiper-slide articleSwiper_swiper-slide">
                                                <article className="bg-[#153A5B] bg-cover bg-center w-full max-w-[410px] rounded-[0.66667rem] flex flex-col justify-end cursor-pointer [transition:0.5s_ease-in-out] h-full css-w81niy e1gsbpxt0">
                                                    <img className="slider-card_image box-border w-full h-full max-w-[410px] rounded-[0.66667rem] object-cover" src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-2.jpg" alt="LARQ Pitcher PureVis™ Pure White sipping water in the glass" />
                                                    <div className="slider-card_innerWrapper absolute bottom-[40px] left-[0] pl-[20px] pr-[20px] [transition:0.5s_ease-in-out] [@media(min-width:780px)]:pl-[40px] [@media(min-width:780px)]:pr-[40px]">
                                                        <h3 className="slider-card_headline z-[2] [transition:0.5s_ease-in-out] text-[1.33333rem] leading-[2.13333rem] font-bold text-[#ffffff] m-0">The future of hydration</h3>
                                                        <span className="slider-card_description [transition:0.5s_ease-in-out] tracking-[0.02em] text-[1.06667rem] leading-[1.6rem] text-[#ffffff] z-[2]">PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience.</span>
                                                        <a href="/technology" className="slider-card_cta flex align-middle items-center justify-between relative min-w-[0] m-0 !px-[1.06667rem] !py-[0.8rem] border-solid rounded-[75px] bg-[#ffffff] font-[Value_Bold] text-[clamp(0.938rem,1.152rem+-0.952vw,0.688rem)] leading-none tracking-[0] no-underline cursor-pointer duration-300 ease-in-out delay-[0ms] [transition-property:border-color,_color,_background-color,_text-decoration-color] select-none border-[0] w-[fit-content] gap-[1.06667rem] [transition:0.5s_ease-in-out] [backface-visibility:hidden] outline-[1px_solid_transparent] mt-[1.6rem] text-[rgb(21,_58,_91)]
                                                        [@media(min-width:960px)]:min-w-[0] [@media(min-width:960px)]:px-[1.66667rem] [@media(min-width:960px)]:py-4 [@media(min-width:960px)]:text-[1rem]
                                                        [@media(min-width:1440px)]:text-[1rem] [@media(min-width:1440px)]:rounded-[100px] [@media(min-width:1440px)]:text-[#153a5b]
                                                        [@media(min-width:1440px)]:opacity-0 [@media(min-width:1440px)]:translate-y-[20px] [@media(min-width:1440px)]:[transition:opacity_0.5s_ease-in-out_0s,_transform_0.5s_ease-in-out_0s] [@media(min-width:1440px)]:absolute [@media(min-width:1440px)]:-bottom-[60px] [@media(min-width:1440px)]:mt-0 will-change-transform css-1575s3f edhpqag0" tabIndex={-1} >How it works
                                                            <span className="btn_icon btn_iconRight [display:inherit] text-[1.6rem] mx-[0rem] -my-[0.26667rem] [@media(min-width:960px)]:text-[1.6rem] -mr-[0.26667rem]">
                                                                <span color="text.default" className="inline-flex align-middle select-none flex-shrink-0 text-[1rem] css-k6mmje e18bqli0">
                                                                    <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit] [transition:0.5s_ease-in-out] fill-[#153A5B] opacity-60 css-82n8sf expsv8r0" focusable="false" viewBox="0 0 22 10" color="text.default" aria-hidden="true">
                                                                        <path d="M10.4688 10.7812C10.3125 10.6562 10.25 10.4688 10.25 10.25C10.25 10.0625 10.3125 9.875 10.4688 9.75L13.4375 6.75H0.75C0.3125 6.75 0 6.4375 0 6C0 5.59375 0.3125 5.25 0.75 5.25H13.4375L10.4688 2.28125C10.1562 2 10.1562 1.53125 10.4688 1.25C10.75 0.9375 11.2188 0.9375 11.5312 1.25L15.7812 5.5C16.0625 5.78125 16.0625 6.25 15.7812 6.53125L11.5312 10.7812C11.2188 11.0938 10.75 11.0938 10.4688 10.7812Z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="swiper-slide articleSwiper_swiper-slide">
                                                <article className="bg-[#153A5B] bg-cover bg-center w-full max-w-[410px] rounded-[0.66667rem] flex flex-col justify-end cursor-pointer [transition:0.5s_ease-in-out] h-full css-w81niy e1gsbpxt0">
                                                    <img className="slider-card_image box-border w-full h-full max-w-[410px] rounded-[0.66667rem] object-cover" src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-3.jpg" alt="Hands around opened outdoor water valve" />
                                                    <div className="slider-card_innerWrapper absolute bottom-[40px] left-[0] pl-[20px] pr-[20px] [transition:0.5s_ease-in-out] [@media(min-width:780px)]:pl-[40px] [@media(min-width:780px)]:pr-[40px]">
                                                        <h3 className="slider-card_headline z-[2] [transition:0.5s_ease-in-out] text-[1.33333rem] leading-[2.13333rem] font-bold text-[#ffffff] m-0">Better for you and the planet</h3>
                                                        <span className="slider-card_description [transition:0.5s_ease-in-out] tracking-[0.02em] text-[1.06667rem] leading-[1.6rem] text-[#ffffff] z-[2]">A portion of every purchase helps restore our oceans and brings clean water to communities in need.</span>
                                                        <button type="button" className="slider-card_cta flex align-middle items-center justify-between relative min-w-[0] m-0 !px-[1.06667rem] !py-[0.8rem] border-solid rounded-[75px] bg-[#ffffff] font-[Value_Bold] text-[clamp(0.938rem,1.152rem+-0.952vw,0.688rem)] leading-none tracking-[0] no-underline cursor-pointer duration-300 ease-in-out delay-[0ms] [transition-property:border-color,_color,_background-color,_text-decoration-color] select-none border-[0] w-[fit-content] gap-[1.06667rem] [transition:0.5s_ease-in-out] [backface-visibility:hidden] outline-[1px_solid_transparent]
                                                        mt-[1.6rem] text-[rgb(21,_58,_91)]
                                                        [@media(min-width:960px)]:min-w-[0] [@media(min-width:960px)]:px-[1.66667rem] [@media(min-width:960px)]:py-4 [@media(min-width:960px)]:text-[1rem]
                                                        [@media(min-width:1440px)]:text-[1rem] [@media(min-width:1440px)]:rounded-[100px] [@media(min-width:1440px)]:text-[#153a5b]
                                                        [@media(min-width:1440px)]:opacity-0 [@media(min-width:1440px)]:translate-y-[20px] [@media(min-width:1440px)]:[transition:opacity_0.5s_ease-in-out_0s,_transform_0.5s_ease-in-out_0s] [@media(min-width:1440px)]:absolute [@media(min-width:1440px)]:-bottom-[60px] [@media(min-width:1440px)]:mt-0 will-change-transform css-1575s3f edhpqag0" tabIndex={-1}>Measure my impact
                                                            <span className="btn_icon btn_iconRight [display:inherit] text-[1.6rem] mx-[0rem] -my-[0.26667rem] [@media(min-width:960px)]:text-[1.6rem] -mr-[0.26667rem]">
                                                                <span color="text.default" className="inline-flex align-middle select-none flex-shrink-0 text-[1rem] css-k6mmje e18bqli0">
                                                                    <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit] [transition:0.5s_ease-in-out] fill-[#153A5B] opacity-60 css-82n8sf expsv8r0" focusable="false" viewBox="0 0 22 10" color="text.default" aria-hidden="true">
                                                                        <path d="M10.4688 10.7812C10.3125 10.6562 10.25 10.4688 10.25 10.25C10.25 10.0625 10.3125 9.875 10.4688 9.75L13.4375 6.75H0.75C0.3125 6.75 0 6.4375 0 6C0 5.59375 0.3125 5.25 0.75 5.25H13.4375L10.4688 2.28125C10.1562 2 10.1562 1.53125 10.4688 1.25C10.75 0.9375 11.2188 0.9375 11.5312 1.25L15.7812 5.5C16.0625 5.78125 16.0625 6.25 15.7812 6.53125L11.5312 10.7812C11.2188 11.0938 10.75 11.0938 10.4688 10.7812Z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination articleSwiper_swiper-pagination"></div>
                                </section>
                            </div>
                            <button type="button" className="back-button z-[2] flex align-middle items-center justify-between min-w-[0] m-0 !px-[1.06667rem] !py-[0.8rem] border-solid rounded-[75px] bg-transparent !text-[#ffffff] font-[Value_Bold] text-[clamp(0.938rem,1.152rem+-0.952vw,0.688rem)] leading-none tracking-[0] no-underline cursor-pointer duration-300 ease-in-out delay-[0ms] [transition-property:border-color,_color,_background-color,_text-decoration-color] select-none border-[1px] border-[#D9E2E9] gap-[1.06667rem] w-[fit-content] [backface-visibility:hidden] outline-[1px_solid_transparent] will-change-transform
                            opacity-100 absolute left-[2.66667rem] bottom-[2.66667rem] [transition:all_0.75s_ease-in-out_0s] 
                            [@media(min-width:780px)]:left-16 [@media(min-width:960px)]:min-w-[0] [@media(min-width:960px)]:px-[1.66667rem] [@media(min-width:960px)]:py-4 [@media(min-width:960px)]:text-[1rem] 
                            [@media(min-width:1440px)]:text-[1rem] [@media(min-width:1440px)]:rounded-[100px] [@media(min-width:1440px)]:text-[#153a5b] [@media(min-width:1440px)]:bottom-[5.33333rem] css-1b0dcoy edhpqag0" tabIndex={-1}>
                                <span className="btn_icon btn_iconLeft [display:inherit] text-[1.6rem] mx-[0rem] -my-[0.26667rem] [@media(min-width:960px)]:text-[1.6rem] -ml-[0.26667rem]">
                                    <span color="text.default" className="inline-flex align-middle select-none flex-shrink-0 text-[1rem] css-k6mmje e18bqli0">
                                        <svg className="inline-flex align-middle w-[1em] h-[1em] select-none flex-shrink-0 [font-size:inherit] [transition:0.5s_ease-in-out] fill-[#ffffff] css-82n8sf expsv8r0" focusable="false" viewBox="0 0 22 10" color="text.default" aria-hidden="true">
                                            <path d="M4.625 10.875L0.125 6.375C0.03125 6.28125 0 6.15625 0 6C0 5.875 0.03125 5.75 0.125 5.65625L4.625 1.15625C4.8125 0.96875 5.15625 0.96875 5.34375 1.15625C5.53125 1.34375 5.53125 1.6875 5.34375 1.875L1.6875 5.5H15.5C15.75 5.5 16 5.75 16 6C16 6.28125 15.75 6.5 15.5 6.5H1.6875L5.34375 10.1562C5.53125 10.3438 5.53125 10.6875 5.34375 10.875C5.15625 11.0625 4.8125 11.0625 4.625 10.875Z"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span>Back</span>
                            </button>
                        </div>
                    </div> */}
                    {/* <div data-focus-guard="true" tabIndex={-1} style="width:1px;height:0px;padding:0;overflow:hidden;position:fixed;top:1px;left:1px"></div> */}
                </div>
            </section>
            {/* <div data-focus-guard="true" tabIndex={-1} style="width:1px;height:0px;padding:0;overflow:hidden;position:fixed;top:1px;left:1px"></div> */}
            {/* <div data-focus-lock-disabled="disabled">
                <article aria-hidden="true" className="w-screen h-screen fixed top-[0] right-[0] translate-x-full [transition:transform_0.8s_ease-in-out] bg-[#f5f9fc] flex justify-center overflow-y-auto mr-0 z-[101] 
                [@media(min-width:780px)]:-mr-4 [@media(min-width:780px)]:w-[calc(100vw+15)] [@media(min-width:1200px)]:w-[1080px] css-1aqxxs0 e160mgzd0">
                    <div className="slideout_innerWrapper pt-[8.53333rem] max-w-[920px] w-full relative">
                        <button className="slideout_close w-[3.2rem] h-[3.2rem] rounded-[100%] flex items-center justify-center [filter:drop-shadow(0px_2px_5px_rgba(21,_58,_91,_0.15))] bg-[#ffffff] absolute top-[40px] right-[20px]
                        [@media(min-width:1080px)]:top-[80px] [@media(min-width:1080px)]:right-[0]" tabIndex={-1} aria-label="Close">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M10.75 9.71875C11.0312 10.0312 11.0312 10.5 10.75 10.7812C10.4375 11.0938 9.96875 11.0938 9.6875 10.7812L6 7.0625L2.28125 10.7812C1.96875 11.0938 1.5 11.0938 1.21875 10.7812C0.90625 10.5 0.90625 10.0312 1.21875 9.71875L4.9375 6L1.21875 2.28125C0.90625 1.96875 0.90625 1.5 1.21875 1.21875C1.5 0.90625 1.96875 0.90625 2.25 1.21875L6 4.96875L9.71875 1.25C10 0.9375 10.4688 0.9375 10.75 1.25C11.0625 1.53125 11.0625 2 10.75 2.3125L7.03125 6L10.75 9.71875Z" fill="#153A5B"></path>
                            </svg>
                        </button>
                        <h1 className="slideout_headline text-[2rem] font-bold leading-[2.66667rem] text-[#153a5b] mb-[2.13333rem] text-center max-w-3xl mx-[auto] my-[32px] px-[1.33333rem] py-[0rem]
                        [@media(min-width:1080px)]:text-[2.66667rem] [@media(min-width:1080px)]:px-[2.66667rem] [@media(min-width:1080px)]:py-[0rem] [@media(min-width:1080px)]:leading-[3.33333rem]">One million single use plastic bottles are thrown out every minute!</h1>
                        <span className="slideout_description text-[1rem] font-normal leading-8 text-[#153a5b] opacity-80 w-full text-center inline-block px-[1.33333rem] py-[0rem]
                        [@media(min-width:1080px)]:text-[1.33333rem] [@media(min-width:1080px)]:px-[2.66667rem] [@media(min-width:1080px)]:py-[0rem] [@media(min-width:1080px)]:leading-[2.13333rem]">Measure your impact on the world and your wallet</span>
                        <img className="slideout_image mb-[0rem] [@media(min-width:1080px)]:mb-[0rem]" src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685044238/Homepage-v3/city_and_plastic_illustration.png" alt="Plastic and city illustration" />
                        <div className="slideout_content rounded-[0.66667rem] w-full flex justify-center pb-[2.66667rem] [@media(min-width:1080px)]:pb-[7.33333rem]">
                        </div>
                    </div>
                </article>
                <div className="fixed w-full h-full right-[0] top-[0] bg-[rgba(0,_0,_0,_0.2)] opacity-0 invisible [transition:opacity_0.8s_ease-in-out,_visibility_0.8s_ease-out_0.8s] z-[100] css-9qbjej e160mgzd1"></div>
            </div> */}

            {/* <div data-focus-guard="true" tabIndex={-1} style="width:1px;height:0px;padding:0;overflow:hidden;position:fixed;top:1px;left:1px"></div> */}
        </div>
    )
}

export default Article;