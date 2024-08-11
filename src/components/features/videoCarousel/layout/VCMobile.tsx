import PrimaryButton from 'components/atoms/buttons/PrimaryButton';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import Column from 'components/atoms/layout/Column';
import VideoCard, { MediaType } from 'components/atoms/video/videoCard/VideoCard';
import { transformKeysToCamelCase } from 'src/utils/transformer';
import { BaseVideoCarouselComponent } from '../VideoCarousel';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { chooseVideoCardImage } from 'src/utils';

type VCMobileProps = {
  featuredVideo: BaseVideoCarouselComponent;
  cta: LinkField;
};

const VCMobile = ({ featuredVideo, cta }: VCMobileProps) => {
  const data = transformKeysToCamelCase(featuredVideo);
  const mediaType = data?.madiatype?.value as MediaType;

  const imageField = chooseVideoCardImage({
    mediaType,
    image: data?.image,
    thumbnailImage: data?.videothumbnail,
  });

  return (
    <Column>
      <HeadingSecondary title={data?.title} />
      <VideoCard
        image={imageField}
        imageLink={data?.imagelink}
        videoUrl={data?.video?.value?.href}
        mediaType={mediaType}
      />
      <DescriptionPrimary description={data?.description} />
      <PrimaryButton link={cta} />
    </Column>
  );
};

export default VCMobile;
