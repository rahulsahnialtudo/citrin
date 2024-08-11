import PrimaryButton from 'components/atoms/buttons/PrimaryButton';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import Row from 'components/atoms/layout/Row';
import VideoCard, { MediaType } from 'components/atoms/video/videoCard/VideoCard';
import VideoModal from 'components/atoms/video/videoModal/VideoModal';
import useModal from 'src/hooks/useModal';
import { transformKeysToCamelCase } from 'src/utils/transformer';
import { BaseVideoCarouselField, PropsVideoCarouselFields } from '../VideoCarousel';
import Show from 'components/atoms/Show';
import { chooseVideoCardImage, isEmptyObject } from 'src/utils';

type VCDesktopProps = {
  cardData: PropsVideoCarouselFields;
};

const VCDesktop = ({ cardData }: VCDesktopProps) => {
  const data = transformKeysToCamelCase(cardData);
  const featureVData = transformKeysToCamelCase(data?.featuredvideo?.fields);
  const mediaType = featureVData?.madiatype?.value as MediaType;

  const imageField = chooseVideoCardImage({
    mediaType,
    image: featureVData?.image,
    thumbnailImage: featureVData?.videothumbnail,
  });

  return (
    <div>
      <Row>
        <div className="max-w-screen-sm md:max-w-screen-xl h-[420px]">
          <VideoCard
            image={imageField}
            videoUrl={featureVData?.video?.value?.href}
            imageLink={featureVData?.imagelink}
            mediaType={mediaType}
          />
        </div>
        <div className="flex flex-col gap-6 w-[40%]">
          <HeadingSecondary title={featureVData?.title} />
          <DescriptionPrimary description={featureVData?.description} className="max-w-[496px]" />
          <PrimaryButton link={data?.cta} />
        </div>
      </Row>

      <Row className="mt-3 grid grid-cols-3 gap-4 max-md:hidden">
        {data?.recommendedvideo?.slice(0, 3)?.map((video, index) => {
          const videoData = video?.fields;
          // TODO: handle the default image
          const imageField = isEmptyObject(videoData?.VideoThumbnail?.value)
            ? videoData?.Image
            : videoData?.VideoThumbnail;

          const showCmp = !isEmptyObject(imageField?.value);
          return (
            <Show key={index} when={showCmp}>
              <RecommendedCard data={video} />;
            </Show>
          );
        })}
      </Row>
    </div>
  );
};

export default VCDesktop;

type RecommendedCardProps = {
  data: BaseVideoCarouselField;
};
const RecommendedCard = ({ data }: RecommendedCardProps) => {
  const { closeModal, isOpen, openModal } = useModal();
  const cardData = data?.fields;
  const field = data?.fields;
  const mediaType = field?.MadiaType?.value as MediaType;

  const imageField = chooseVideoCardImage({
    mediaType,
    image: field?.Image,
    thumbnailImage: field?.VideoThumbnail,
  });

  return (
    <div className="w-[500px]  h-44">
      <Row className="gap-0">
        <VideoCard
          image={imageField}
          variant="secondary"
          videoUrl={data?.fields?.Video?.value?.href}
          imageLink={data?.fields?.ImageLink}
          mediaType={mediaType}
        />
        <div className="p-3 flex flex-col gap-2 w-1/2 justify-center">
          <div className="overflow-hidden">
            <HeadingSecondary
              title={data?.fields?.Description}
              className="heading-recommended-video-card  text-left line-clamp-3"
            />
          </div>
          <Show when={mediaType === 'video' && !!cardData?.Video?.value?.href}>
            <HeadingSecondary
              title={data?.fields?.LinkText}
              className="link-recommended-video-card cursor-pointer"
              onClick={openModal}
            />
          </Show>
          <VideoModal
            isOpen={isOpen}
            videoUrl={data?.fields?.Video?.value?.href ?? ''}
            closeModal={closeModal}
          />
        </div>
      </Row>
    </div>
  );
};
