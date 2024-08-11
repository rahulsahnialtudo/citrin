import React from 'react';
import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import PlayButton from 'components/atoms/buttons/PlayButton';
import useModal from 'src/hooks/useModal';
import Show from 'components/atoms/Show';
import VideoModal from '../videoModal/VideoModal';
import ImageContainer from 'components/atoms/ImageContainer';

export type MediaType = 'video' | 'image';

type VideoCardProps = {
  image: ImageField;
  videoUrl?: string;
  variant?: 'primary' | 'secondary';
  imageLink: LinkField;
  mediaType?: MediaType;
};

const VideoCard = ({ image, variant = 'primary', videoUrl = '', mediaType }: VideoCardProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className={variant === 'primary' ? 'primary-video-card' : 'secondary-video-card'}>
        <ImageContainer
          imageData={image}
          width={1059}
          height={493}
          className={
            variant === 'primary' ? 'primary-video-card-image' : 'secondary-video-card-image'
          }
        />
        <Show when={mediaType === 'video' && !!videoUrl}>
          <PlayButton
            className={variant === 'secondary' ? 'w-10 h-10' : 'w-16 h-16'}
            variant={variant}
            onClick={openModal}
          />
        </Show>
      </div>

      <VideoModal isOpen={isOpen} videoUrl={videoUrl} closeModal={closeModal} />
    </>
  );
};

export default VideoCard;
