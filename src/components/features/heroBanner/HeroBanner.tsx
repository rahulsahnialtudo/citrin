import {
  ImageField,
  LinkField,
  Field,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton';
import Container from 'components/atoms/Container';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingPrimary from 'components/atoms/headings/HeadingPrimary';
import ImageContainer from 'components/atoms/ImageContainer';
import Show from 'components/atoms/Show';
import { isEmptyObject } from 'src/utils';

export type BannerProps = {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    BackgroundImage: ImageField;
    CTA: LinkField;
  };
};

const HeroBanner = (props: BannerProps): JSX.Element => {
  const data = props?.fields;
  const { sitecoreContext } = useSitecoreContext();

  return (
    <Show
      when={
        sitecoreContext.pageState === 'edit' ||
        (!isEmptyObject(data?.BackgroundImage?.value) && !!data?.Title?.value)
      }
    >
      <div className="relative" data-testid="hero-banner">
        <ImageContainer
          imageData={data?.BackgroundImage}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <Container>
            <div className="flex flex-col gap-10">
              <HeadingPrimary title={data?.Title} className="max-w-[1123px]" />
              <DescriptionPrimary
                description={data?.Description}
                className="text-white max-w-[1087px]"
              />
              <PrimaryButton link={data?.CTA} />
            </div>
          </Container>
        </div>
      </div>
    </Show>
  );
};
export default HeroBanner;
