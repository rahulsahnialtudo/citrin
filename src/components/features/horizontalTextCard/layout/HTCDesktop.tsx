import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import SecondaryButton from 'components/atoms/buttons/SecondaryButton';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingPrimary from 'components/atoms/headings/HeadingPrimary';
import Row from 'components/atoms/layout/Row';
import { cn } from 'src/utils';

type DesktopProps = {
  Title: Field<string>;
  Description: Field<string>;
  CTA: LinkField;
  isDark: boolean;
};

const Desktop = ({ CTA, Description, Title, isDark }: DesktopProps) => {
  return (
    <Row className="gap-[84px]">
      <div className="flex flex-col gap-10">
        <HeadingPrimary
          title={Title}
          className={cn('horizontal-text-card-heading', isDark && 'text-white')}
        />
        <SecondaryButton link={CTA} className={'bg-white'} />
      </div>
      <DescriptionPrimary
        description={Description}
        className={isDark ? 'text-white max-w-5xl' : ''}
      />
    </Row>
  );
};

export default Desktop;
