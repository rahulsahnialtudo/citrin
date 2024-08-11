import { ImageField, Image as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';
import Show from './Show';
import { ClassField } from 'src/types';
import { cn, isEmptyObject } from 'src/utils';

type ImageContainerProps = {
  imageData: ImageField;
  className?: ClassField;
  width?: number;
  height?: number;
};

const ImageContainer = ({ imageData, className, height, width }: ImageContainerProps) => {
  return (
    <Show when={!isEmptyObject(imageData?.value)}>
      <JssImage field={imageData} className={cn(className)} height={height} width={width} />
    </Show>
  );
};

export default ImageContainer;
