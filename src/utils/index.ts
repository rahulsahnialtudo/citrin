import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { clsx, type ClassValue } from 'clsx';
import { MediaType } from 'components/atoms/video/videoCard/VideoCard';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isEmptyObject = (obj: object = {}): boolean => {
  return Object.keys(obj).length === 0;
};

//Choose image based on the selection (image/video) for video card carousal
type ChooseVideoCardImageProps = {
  mediaType: MediaType;
  thumbnailImage: ImageField;
  image: ImageField;
};
export const chooseVideoCardImage = ({
  mediaType,
  thumbnailImage,
  image,
}: ChooseVideoCardImageProps): ImageField => {
  let imageField: ImageField;
  if (mediaType === 'video') {
    imageField = isEmptyObject(thumbnailImage?.value) ? image : thumbnailImage;
  } else {
    imageField = isEmptyObject(image?.value) ? thumbnailImage : image;
  }
  return imageField;
};
