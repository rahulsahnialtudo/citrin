import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import { ClassField } from 'src/types';
import { cn } from 'src/utils';
import Show from '../Show';

const Arrows = ({ next, previous, carouselState }: ButtonGroupProps) => {
  const disabled =
    carouselState?.currentSlide ===
    (carouselState?.totalItems ?? 4) - (carouselState?.slidesToShow ?? 4);
  const hideArrow = (carouselState?.totalItems ?? 4) - (carouselState?.slidesToShow ?? 4) === 0;

  return (
    <Show when={!hideArrow}>
      <div className="absolute w-full">
        <div className="flex gap-1 mt-3 justify-between md:justify-normal md:gap-3">
          <Arrow
            onClick={previous}
            image="/icons/arrow-left.svg"
            alt="previous icon"
            disabled={carouselState?.currentSlide === 0}
            className="mr-3"
          />
          <Arrow
            onClick={next}
            image="/icons/arrow-right.svg"
            alt="next icon"
            disabled={disabled}
          />
        </div>
      </div>
    </Show>
  );
};

export default Arrows;

type ArrowProps = {
  image: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: ClassField;
};

const Arrow = ({ image, alt, onClick, disabled, className }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `w-11 h-9 flex justify-center items-center ${disabled ? 'bg-navGrey' : 'bg-navDarkBlue'}`,
        className
      )}
    >
      <Image src={image} alt={alt} width={18.75} height={10.5} className="p-1" />
    </button>
  );
};
