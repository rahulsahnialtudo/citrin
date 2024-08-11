import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import SecondaryButton from 'components/atoms/buttons/SecondaryButton';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingPrimary from 'components/atoms/headings/HeadingPrimary';
import Column from 'components/atoms/layout/Column';
import { cn } from 'src/utils';

type HTCMobileProps = {
  Title: Field<string>;
  Description: Field<string>;
  CTA: LinkField;
  isDark: boolean;
};

const HTCMobile = ({ CTA, Description, Title, isDark }: HTCMobileProps) => {
  return (
    <Column>
      <HeadingPrimary
        title={Title}
        className={cn('horizontal-text-card-heading', isDark && 'text-white')}
      />
      <DescriptionPrimary description={Description} className={isDark ? 'text-white' : ''} />
      <SecondaryButton link={CTA} className={isDark ? 'text-white' : ''} />
    </Column>
  );
};

export default HTCMobile;
