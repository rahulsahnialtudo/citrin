import Image from 'next/image';
import { ClassField, HtmlClickEvent } from 'src/types';
import { cn } from 'src/utils';

type PlayButtonProps = {
  className?: ClassField;
  onClick: HtmlClickEvent;
  variant?: 'primary' | 'secondary';
};

const PlayButton = ({ className, variant = 'primary', onClick }: PlayButtonProps) => {
  return (
    <div className="play-button-container">
      <div className={cn('trigger play-button', className)} onClick={onClick}>
        <Image
          src="/icons/play.svg"
          alt="play icon"
          width={variant === 'primary' ? 15 : 13}
          height={variant === 'primary' ? 18 : 16}
        />
      </div>
    </div>
  );
};

export default PlayButton;
