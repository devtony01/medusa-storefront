import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer
      className="bg-[#f5f9fc] px-[clamp(1.375rem,-0.106rem+7.407vw,1.875rem)] py-[clamp(2.75rem,-0.213rem+14.815vw,3.75rem)] overflow-hidden relative
                [@media(min-width:1180px)]:px-[2.66667rem] [@media(min-width:1180px)]:py-16 [@media(min-width:1180px)]:flex [@media(min-width:1180px)]:justify-between
                [@media(min-width:1440px)]:px-[clamp(2.5rem,-5rem+8.333vw,5rem)] [@media(min-width:1440px)]:py-[clamp(3.75rem,0rem+4.167vw,5rem)]">

      <div className="content-wrap mb-[clamp(2.5rem,-1.204rem+18.519vw,3.75rem)] [@media(min-width:740px)]:mb-0">
        <div className="signup-navigation [@media(min-width:740px)]:flex [@media(min-width:740px)]:justify-between [@media(min-width:740px)]:mb-16 [@media(min-width:1180px)]:mr-8 [@media(min-width:1180px)]:justify-start">
          <div className="newsletter-social [@media(min-width:740px)]:max-w-[21.66667rem] [@media(min-width:1180px)]:max-w-[15.6rem] [@media(min-width:1180px)]:mr-[9.33333rem] [@media(min-width:1440px)]:max-w-[999999px] [@media(min-width:1440px)]:mr-[clamp(8.75rem,-0.625rem+10.417vw,11.875rem)] [@media(min-width:1440px)]:w-[clamp(19.188rem,-0.125rem+21.458vw,25.625rem)]">
            <div className="mb-[clamp(1.375rem,-0.106rem+7.407vw,1.875rem)] [@media(min-width:740px)]:mb-[1.46667rem] css-7e8grp e16r55k60">
              <h3 className="newsletter-title mt-0 text-[clamp(2rem,calc(2rem+(10)*((100vw-428px)/(1920-428))),2.66667rem)] leading-[clamp(2rem,calc(2rem+(10)*((100vw-428px)/(1920-428))),2.66667rem)]">Become an insider</h3>
              <p className="newsletter-subtitle text-[clamp(1rem,calc(1rem+(5)*((100vw-428px)/(1920-428))),1.33333rem)] leading-[clamp(1.46667rem,calc(1.46667rem+(8)*((100vw-428px)/(1920-428))),2rem)] text-[#153a5b] mb-8">
                Receive exclusive offers, hydration news, and more when you
                subscribe.
              </p>
              <form className="newsletter-form relative">
                <div className="newsletterBlock_input relative m-0 p-0 inline-flex flex-col w-full [@media(min-width:960px)]:inline-flex [@media(min-width:960px)]:flex-col css-145d084 ebmnkwy0">
                  <label
                    htmlFor="footerNewsletter_subscribe"
                    id="footerNewsletter_subscribe-inputLabel"
                    className="label flex items-start w-px !absolute ml-[0rem] mr-[0rem] my-[0rem] text-[1rem] leading-normal cursor-pointer h-px p-0 overflow-hidden [clip:rect(0,_0,_0,_0)] whitespace-nowrap border-[0] css-1lfavjz eteg7160"
                  >
                    <span>Enter your email</span>
                    <small className="block mr-[0rem] my-[0.33333rem] ml-auto pl-4 pr-[0] py-[0] flex-shrink-0 text-[#6f7477] text-[0.66667rem] uppercase">Required</small>
                  </label>
                  <div className="inputContainer flex flex-row flex-[1] items-start">
                    <div className="inputContainer_inner flex flex-col flex-[1] w-full">
                      <div className="inputWrap relative cursor-text inline-flex box-border items-center bg-[#ffffff] border-[1px] border-solid border-transparent rounded-[50px] [box-shadow:none] duration-100 ease-in-out delay-[0ms] [transition-property:border-color]">
                        <input
                          className="[font:inherit] text-[#5a5e60] font-[Value] px-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] py-[clamp(1.063rem,-0.049rem+5.556vw,1.438rem)] border-[0] rounded-[50px] box-border bg-transparent bg-none m-0 block min-w-[0] w-full text-[clamp(0.75rem,0.009rem+3.704vw,1rem)] leading-[normal] text-left [animation-duration:10ms] invalid:[box-shadow:none]
                          [@media(min-width:740px)]:!text-[0.93333rem] [@media(min-width:740px)]:!px-4 [@media(min-width:740px)]:!py-[0.46667rem]
                          [@media(min-width:1440px)]:!text-[clamp(0.875rem,0.688rem+0.208vw,0.938rem)] [@media(min-width:1440px)]:!px-[clamp(0.938rem,0rem+1.042vw,1.25rem)] [@media(min-width:1440px)]:!py-[clamp(0.5rem,-0.25rem+0.833vw,0.75rem)]"
                          type="email"
                          name="email"
                          aria-invalid="false"
                          id="footerNewsletter_subscribe"
                          placeholder="Email address"
                          aria-label="Enter your email address to subscribe to our Newsletter"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="newsletter-submit-button w-[clamp(1.438rem,-0.6rem+10.185vw,2.125rem)] block absolute right-[clamp(0.688rem,-0.979rem+8.333vw,1.25rem)] top-[clamp(1.063rem,0.967rem+0.476vw,1.188rem)] [@media(min-width:740px)]:w-[1.46667rem] [@media(min-width:740px)]:right-2 [@media(min-width:740px)]:top-[0.53333rem] [@media(min-width:1440px)]:w-[clamp(1.375rem,-0.125rem+1.667vw,1.875rem)] [@media(min-width:1440px)]:top-[0.6rem]"
                  aria-label="Submit newsletter form"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <rect width="32" height="32" rx="16" fill="#EBF3F9"></rect>
                    <path
                      opacity="0.8"
                      d="M18.4688 20.7812C18.3125 20.6562 18.25 20.4688 18.25 20.25C18.25 20.0625 18.3125 19.875 18.4688 19.75L21.4375 16.75H8.75C8.3125 16.75 8 16.4375 8 16C8 15.5938 8.3125 15.25 8.75 15.25H21.4375L18.4688 12.2812C18.1562 12 18.1562 11.5312 18.4688 11.25C18.75 10.9375 19.2188 10.9375 19.5312 11.25L23.7812 15.5C24.0625 15.7812 24.0625 16.25 23.7812 16.5312L19.5312 20.7812C19.2188 21.0938 18.75 21.0938 18.4688 20.7812Z"
                      fill="#153A5B"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <ul className="list-none m-0 p-0 text-center flex flex-row justify-center gap-[clamp(1.125rem,0.014rem+5.556vw,1.5rem)] mb-[clamp(2.313rem,-0.095rem+12.037vw,3.125rem)] [@media(min-width:740px)]:justify-start [@media(min-width:740px)]:mb-0 css-17ppu9 e16b6p9b0">
              <li className="socialLinksItem">
                <a
                  href="https://www.facebook.com/livelarq/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="LARQ Facebook Page"
                  className="socialLinksItemLink inline-block w-[clamp(2.25rem,0.028rem+11.111vw,3rem)] [@media(min-width:740px)]:w-[2.4rem] [@media(min-width:1440px)]:w-[clamp(2.25rem,0rem+2.5vw,3rem)]"
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <rect width="48" height="48" rx="24" fill="white"></rect>
                    <path
                      opacity="0.8"
                      d="M28.6484 25.75L29.1953 22.1562H25.7188V19.8125C25.7188 18.7969 26.1875 17.8594 27.75 17.8594H29.3516V14.7734C29.3516 14.7734 27.9062 14.5 26.5391 14.5C23.6875 14.5 21.8125 16.2578 21.8125 19.3828V22.1562H18.6094V25.75H21.8125V34.5H25.7188V25.75H28.6484Z"
                      fill="#153A5B"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="socialLinksItem">
                <a
                  href="https://www.instagram.com/livelarq/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="LARQ Instagram Page"
                  className="socialLinksItemLink inline-block w-[clamp(2.25rem,0.028rem+11.111vw,3rem)] [@media(min-width:740px)]:w-[2.4rem] [@media(min-width:1440px)]:w-[clamp(2.25rem,0rem+2.5vw,3rem)]"
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <rect width="48" height="48" rx="24" fill="white"></rect>
                    <path
                      opacity="0.8"
                      d="M24 20.0078C21.5 20.0078 19.5078 22.0391 19.5078 24.5C19.5078 27 21.5 28.9922 24 28.9922C26.4609 28.9922 28.4922 27 28.4922 24.5C28.4922 22.0391 26.4609 20.0078 24 20.0078ZM24 27.4297C22.3984 27.4297 21.0703 26.1406 21.0703 24.5C21.0703 22.8984 22.3594 21.6094 24 21.6094C25.6016 21.6094 26.8906 22.8984 26.8906 24.5C26.8906 26.1406 25.6016 27.4297 24 27.4297ZM29.7031 19.8516C29.7031 19.2656 29.2344 18.7969 28.6484 18.7969C28.0625 18.7969 27.5938 19.2656 27.5938 19.8516C27.5938 20.4375 28.0625 20.9062 28.6484 20.9062C29.2344 20.9062 29.7031 20.4375 29.7031 19.8516ZM32.6719 20.9062C32.5938 19.5 32.2812 18.25 31.2656 17.2344C30.25 16.2188 29 15.9062 27.5938 15.8281C26.1484 15.75 21.8125 15.75 20.3672 15.8281C18.9609 15.9062 17.75 16.2188 16.6953 17.2344C15.6797 18.25 15.3672 19.5 15.2891 20.9062C15.2109 22.3516 15.2109 26.6875 15.2891 28.1328C15.3672 29.5391 15.6797 30.75 16.6953 31.8047C17.75 32.8203 18.9609 33.1328 20.3672 33.2109C21.8125 33.2891 26.1484 33.2891 27.5938 33.2109C29 33.1328 30.25 32.8203 31.2656 31.8047C32.2812 30.75 32.5938 29.5391 32.6719 28.1328C32.75 26.6875 32.75 22.3516 32.6719 20.9062ZM30.7969 29.6562C30.5234 30.4375 29.8984 31.0234 29.1562 31.3359C27.9844 31.8047 25.25 31.6875 24 31.6875C22.7109 31.6875 19.9766 31.8047 18.8438 31.3359C18.0625 31.0234 17.4766 30.4375 17.1641 29.6562C16.6953 28.5234 16.8125 25.7891 16.8125 24.5C16.8125 23.25 16.6953 20.5156 17.1641 19.3438C17.4766 18.6016 18.0625 18.0156 18.8438 17.7031C19.9766 17.2344 22.7109 17.3516 24 17.3516C25.25 17.3516 27.9844 17.2344 29.1562 17.7031C29.8984 17.9766 30.4844 18.6016 30.7969 19.3438C31.2656 20.5156 31.1484 23.25 31.1484 24.5C31.1484 25.7891 31.2656 28.5234 30.7969 29.6562Z"
                      fill="#153A5B"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="socialLinksItem">
                <a
                  href="https://www.youtube.com/c/LARQwater"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="LARQ Youtube Channel"
                  className="socialLinksItemLink inline-block w-[clamp(2.25rem,0.028rem+11.111vw,3rem)] [@media(min-width:740px)]:w-[2.4rem] [@media(min-width:1440px)]:w-[clamp(2.25rem,0rem+2.5vw,3rem)]"
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <rect width="48" height="48" rx="24" fill="white"></rect>
                    <path
                      opacity="0.8"
                      d="M34.1953 19.3828C33.9609 18.4453 33.2188 17.7031 32.3203 17.4688C30.6406 17 24 17 24 17C24 17 17.3203 17 15.6406 17.4688C14.7422 17.7031 14 18.4453 13.7656 19.3828C13.2969 21.0234 13.2969 24.5391 13.2969 24.5391C13.2969 24.5391 13.2969 28.0156 13.7656 29.6953C14 30.6328 14.7422 31.3359 15.6406 31.5703C17.3203 32 24 32 24 32C24 32 30.6406 32 32.3203 31.5703C33.2188 31.3359 33.9609 30.6328 34.1953 29.6953C34.6641 28.0156 34.6641 24.5391 34.6641 24.5391C34.6641 24.5391 34.6641 21.0234 34.1953 19.3828ZM21.8125 27.7031V21.375L27.3594 24.5391L21.8125 27.7031Z"
                      fill="#153A5B"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="socialLinksItem">
                <a
                  href="https://twitter.com/livelarq?lang=en"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="LARQ Twitter Profile"
                  className="socialLinksItemLink inline-block w-[clamp(2.25rem,0.028rem+11.111vw,3rem)] [@media(min-width:740px)]:w-[2.4rem] [@media(min-width:1440px)]:w-[clamp(2.25rem,0rem+2.5vw,3rem)]"
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <rect width="48" height="48" rx="24" fill="white"></rect>
                    <path
                      opacity="0.8"
                      d="M31.9297 20.4375C32.7109 19.8516 33.4141 19.1484 33.9609 18.3281C33.2578 18.6406 32.4375 18.875 31.6172 18.9531C32.4766 18.4453 33.1016 17.6641 33.4141 16.6875C32.6328 17.1562 31.7344 17.5078 30.8359 17.7031C30.0547 16.8828 29 16.4141 27.8281 16.4141C25.5625 16.4141 23.7266 18.25 23.7266 20.5156C23.7266 20.8281 23.7656 21.1406 23.8438 21.4531C20.4453 21.2578 17.3984 19.6172 15.3672 17.1562C15.0156 17.7422 14.8203 18.4453 14.8203 19.2266C14.8203 20.6328 15.5234 21.8828 16.6562 22.625C15.9922 22.5859 15.3281 22.4297 14.7812 22.1172V22.1562C14.7812 24.1484 16.1875 25.7891 18.0625 26.1797C17.75 26.2578 17.3594 26.3359 17.0078 26.3359C16.7344 26.3359 16.5 26.2969 16.2266 26.2578C16.7344 27.8984 18.2578 29.0703 20.0547 29.1094C18.6484 30.2031 16.8906 30.8672 14.9766 30.8672C14.625 30.8672 14.3125 30.8281 14 30.7891C15.7969 31.9609 17.9453 32.625 20.2891 32.625C27.8281 32.625 31.9297 26.4141 31.9297 20.9844C31.9297 20.7891 31.9297 20.6328 31.9297 20.4375Z"
                      fill="#153A5B"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <nav role="navigation" className="pb-[clamp(1.875rem,0.023rem+9.259vw,2.5rem)] [@media(min-width:740px)]:flex [@media(min-width:740px)]:gap-[2.66667rem] [@media(min-width:740px)]:pt-[1.33333rem] [@media(min-width:740px)]:pb-0 css-1ye6mm3 e1kxddx90">
            <ul className="[list-style:none] ml-0 col-1 [@media(min-width:1180px)]:min-w-[10.93333rem] [@media(min-width:1440px)]:w-[clamp(10.25rem,-7.75rem+20vw,16.25rem)]">
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/support">FAQ</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/purification/larq-bottle-purevis/reviews">Reviews</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/contact-us">Contact</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/retailers">Find a retailer</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/corporate-gifting">Corporate gifting</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]"
                  href="https://faire.com/direct/larq"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wholesale
                </a>
              </li>
            </ul>
            <ul className="[list-style:none] ml-0 col-2 [@media(min-width:1180px)]:min-w-[10.93333rem] [@media(min-width:1440px)]:w-[clamp(10.25rem,-7.75rem+20vw,16.25rem)]">
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]"
                  href="https://basq.livelarq.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  basq magazine
                </a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/press">Press</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/our-story">Our story</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]" href="/affiliate-program">Affiliate program</a>
              </li>
              <li>
                <a className="text-[clamp(0.938rem,0.012rem+4.63vw,1.25rem)] inline-block pb-[clamp(1.063rem,-0.234rem+6.481vw,1.5rem)] font-medium [@media(min-width:740px)]:text-[0.93333rem] [@media(min-width:1180px)]:text-[1rem] [@media(min-width:1440px)]:text-[clamp(0.938rem,0rem+1.042vw,1.25rem)]"
                  href="https://larq1.grin.live/larq"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ambassador program
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="location-legal-payment [@media(min-width:740px)]:flex [@media(min-width:740px)]:items-center [@media(min-width:740px)]:mb-16 [@media(min-width:1180px)]:mr-8 [@media(min-width:1440px)]:mb-0">
          <section className="[@media(min-width:740px)]:mr-[1.6rem] css-pe0lyv ek3orxz0">
            <button
              className="country-switcher-button font-[Value] flex items-center px-[1.33333rem] py-[0.66667rem] pl-[1.06667rem] pr-[1.06667rem] h-[3.33333rem] rounded-[50px] bg-[#ffffff] w-full text-[1.06667rem] mb-[clamp(4.375rem,2.523rem+9.259vw,5rem)] text-[#153a5b] font-bold
              [@media(min-width:740px)]:text-[1.2rem] [@media(min-width:740px)]:px-4 [@media(min-width:740px)]:py-[0.46667rem] [@media(min-width:740px)]:mb-0
              [@media(min-width:980px)]:mb-0 [@media(min-width:1200px)]:text-[0.8rem] [@media(min-width:1440px)]:px-[clamp(0.938rem,0rem+1.042vw,1.25rem)] [@media(min-width:1440px)]:py-[clamp(0.438rem,-0.125rem+0.625vw,0.625rem)] [@media(min-width:1440px)]:text-[clamp(0.75rem,0.188rem+0.625vw,0.938rem)] [@media(min-width:1440px)]:mt-auto"
              aria-label="Open language and country switcher modal"
            >
              <span className="flag inline-block w-[1.33333rem] min-w-[1.33333rem] mr-[0.66667rem] [@media(min-width:740px)]:w-4 [@media(min-width:740px)]:mr-[0.46667rem] [@media(min-width:1440px)]:w-[clamp(0.938rem,0rem+1.042vw,1.25rem)]">
                <img
                  src="https://res.cloudinary.com/larq/image/upload/v1702649207/v3-images/flags/us.svg"
                  alt="country flag us"
                />
              </span>
              United States
            </button>
          </section>
          <nav className="mb-[clamp(1.875rem,0.023rem+9.259vw,2.5rem)] [@media(min-width:740px)]:mb-0 css-1ukprz2 e142muxo0">
            <ul className="footer-legal-links [list-style:none] ml-0 flex justify-center gap-[clamp(1.125rem,0.014rem+5.556vw,1.5rem)] text-[1.06667rem] leading-[1.6rem]">
              <li>
                <a className="text-[0.8rem] lg:text-[1.06667rem]" href="/terms-and-conditions">Terms</a>
              </li>
              <li>
                <a className="text-[0.8rem] lg:text-[1.06667rem]" href="/privacy-policy">Privacy</a>
              </li>
              <li>
                <a className="text-[0.8rem] lg:text-[1.06667rem]" href="/cookie-policy">Cookies</a>
              </li>
              <li>
                <a className="text-[0.8rem] lg:text-[1.06667rem]" href="/accessibility">Accessibility</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-animation mx-[clamp(-1.375rem,0.106rem+7.407vw,-1.875rem)]">
        <img
          src="https://res.cloudinary.com/larq/image/upload/e_replace_color:f5f9fc:100:white/v1682247434/v3-images/footer/bicycle-animation.gif"
          alt="bicycle animation"
          loading="lazy"
        />
      </div>
    </footer>
  )
}
