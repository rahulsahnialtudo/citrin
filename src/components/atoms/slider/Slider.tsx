/* eslint-disable @typescript-eslint/no-empty-function */

import Carousel, { ResponsiveType } from 'react-multi-carousel';
import React, { ReactNode } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Dot from './Dot';
import Arrows from './Arrows';
import { ClassField } from 'src/types';
import { cn } from 'src/utils';

const cResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

type SliderProps = {
  children: ReactNode;
  className?: ClassField;
  dotClassName?: ClassField;
  responsive?: ResponsiveType;
  showDots?: boolean;
};

const Slider = ({ children, className, dotClassName, responsive, showDots }: SliderProps) => {
  return (
    <div className={cn('relative', className)}>
      <Carousel
        showDots
        ssr
        draggable={false}
        swipeable={false}
        infinite={false}
        keyBoardControl
        responsive={responsive ?? cResponsive}
        autoPlay={false}
        arrows={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        renderButtonGroupOutside={true}
        customButtonGroup={<Arrows />}
        renderDotsOutside={true}
        customDot={<Dot showDots={showDots} />}
        dotListClass={cn('dotList top-[123%]', dotClassName)}
        partialVisible={false}
        partialVisbile={false}
        itemClass="px-2"
      >
        {children}
      </Carousel>
    </div>
  );
};

export default Slider;
