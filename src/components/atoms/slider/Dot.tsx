import { DotProps } from 'react-multi-carousel';
import Show from '../Show';

const Dot = ({
  onClick,
  active,
  carouselState,
  showDots = true,
}: DotProps & { showDots?: boolean }) => {
  const hideDot = (carouselState?.totalItems ?? 4) - (carouselState?.slidesToShow ?? 4) === 0;

  return (
    <Show when={showDots}>
      <Show when={!hideDot}>
        <div
          className={
            active
              ? 'z-20 w-4 h-4 rounded-full bg-navDarkBlue cursor-pointer mx-1'
              : 'z-20 w-4 h-4 rounded-full bg-navGrey cursor-pointer mx-1'
          }
          onClick={onClick}
        />
      </Show>
    </Show>
  );
};

export default Dot;
