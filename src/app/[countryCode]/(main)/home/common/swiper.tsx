import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { SwiperContainer } from 'swiper/element/bundle';

export function Swiper(props: any) {

  const swiperRef = useRef<SwiperContainer | any>(null);
  
  const {
    children,
    className,
    ...rest
  } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,  
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} class={className}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(props: any) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children}
    </swiper-slide>
  );
}
