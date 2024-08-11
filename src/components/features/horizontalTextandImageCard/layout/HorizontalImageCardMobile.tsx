import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import ImageContainer from 'components/atoms/ImageContainer';
import Column from 'components/atoms/layout/Column';

type HorizontalImageCardMobileProps = {
  Title: Field<string>;
  Description: Field<string>;
  Image: ImageField;
  CTA: LinkField;
};

const HorizontalImageCardMobile = ({
  CTA,
  Description,
  Image,
  Title,
}: HorizontalImageCardMobileProps) => {
  return (
    <Column>
      <HeadingSecondary title={Title} />
      <ImageContainer imageData={Image} className="object-cover w-full md:h-[30rem] md:w-5/12" />
      <DescriptionPrimary description={Description} />
      <PrimaryButton link={CTA} />
    </Column>
  );
};

export default HorizontalImageCardMobile;
