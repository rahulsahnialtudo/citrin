import {
  Field,
  ImageField,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import ImageContainer from 'components/atoms/ImageContainer';
import Row from 'components/atoms/layout/Row';

type HorizontalImageCardDesktopProps = {
  Title: Field<string>;
  Description: Field<string>;
  Image: ImageField;
  CTA: LinkField;
  isLeftAligned: boolean;
};

const HorizontalImageCardDesktop = ({
  CTA,
  Description,
  Image,
  Title,
  isLeftAligned,
}: HorizontalImageCardDesktopProps) => {
  const { sitecoreContext } = useSitecoreContext();

  return (
    <Row className={isLeftAligned ? 'flex-row-reverse gap-[102px]' : 'gap-[102px]'}>
      <div className="flex flex-col gap-6">
        <HeadingSecondary title={Title} />
        <DescriptionPrimary description={Description} className="max-w-[846px]" />
        <PrimaryButton link={CTA} />
      </div>
      <ImageContainer
        imageData={Image}
        className={`object-cover md:h-[30rem] ${
          sitecoreContext.pageState !== 'edit' ? 'md:w-5/12' : 'md:w-full'
        }`}
      />
    </Row>
  );
};

export default HorizontalImageCardDesktop;
