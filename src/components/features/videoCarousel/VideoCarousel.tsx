import {
  Field,
  ImageField,
  LinkField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Container from 'components/atoms/Container';
import { ComponentProps } from 'lib/component-props';
import VCDesktop from './layout/VCDesktop';
import VCMobile from './layout/VCMobile';
import Show from 'components/atoms/Show';
import { useEffect } from 'react';
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { isEmptyObject } from 'src/utils';

export type BaseVideoCarouselComponent = {
  ImageLink: LinkField;
  Description: Field<string>;
  Image: ImageField;
  LinkText: Field<string>;
  Title: Field<string>;
  Video: LinkField;
  MadiaType: Field<string>;
  VideoThumbnail: ImageField;
};

export type BaseVideoCarouselField = {
  fields: BaseVideoCarouselComponent;
};

export type PropsVideoCarouselFields = {
  FeaturedVideo: BaseVideoCarouselField;
  RecommendedVideo: BaseVideoCarouselField[];
  CTA: LinkField;
};

type VideoCarouselProps = ComponentProps & {
  fields: PropsVideoCarouselFields;
};

const VideoCarousel = (props: VideoCarouselProps): JSX.Element => {
  useEffect(() => {
    // Refresh Experience Editor / Horizon markup and JS after Next.js Fast Refresh
    handleEditorFastRefresh(true);
  }, []);
  const { sitecoreContext } = useSitecoreContext();
  const data = props?.fields;
  const featuredVideo = data?.FeaturedVideo?.fields;

  let image = featuredVideo?.Image?.value;
  if (!isEmptyObject(featuredVideo?.VideoThumbnail?.value)) {
    image = featuredVideo?.VideoThumbnail?.value;
  }

  const showCmp =
    !isEmptyObject(image) && !!featuredVideo?.Title?.value && !!data?.CTA?.value?.href;

  return (
    <Show when={sitecoreContext.pageState === 'edit' || showCmp}>
      <div className="bg-whiteLight">
        <Container>
          <VCDesktop cardData={data} />
          <VCMobile featuredVideo={featuredVideo} cta={data?.CTA} />
        </Container>
      </div>
    </Show>
  );
};

export default withDatasourceCheck()<VideoCarouselProps>(VideoCarousel);
