import {
  Field,
  withDatasourceCheck,
  LinkField,
  ImageField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Container from 'components/atoms/Container';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import Column from 'components/atoms/layout/Column';
import Show from 'components/atoms/Show';
import { ComponentProps } from 'lib/component-props';
import { transformKeysToCamelCase } from 'src/utils/transformer';
import PPDesktop from './layout/PPDesktop';
import PPMobile from './layout/PPMobile';

export type Logo = {
  fields: {
    Link: LinkField;
    Logo: ImageField;
  };
};

export type PremiumPlatformProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    Logos: Logo[];
  };
};

const PremiumPlatform = (props: PremiumPlatformProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const data = transformKeysToCamelCase(props?.fields);
  return (
    <Show
      when={sitecoreContext.pageState === 'edit' || (!!data?.title?.value && !!data?.logos?.length)}
    >
      <Container>
        <Column className="md:flex md:justify-center md:items-center">
          <HeadingSecondary title={data?.title} className="md:text-center" />
          <DescriptionPrimary
            description={data?.description}
            className="max-w-4xl md:text-center "
          />
          <Show when={data?.logos?.length > 0}>
            <PPDesktop logos={data?.logos} />
          </Show>
          <Show when={data?.logos?.length > 0}>
            <PPMobile logos={data?.logos} />
          </Show>
        </Column>
      </Container>
    </Show>
  );
};

export default withDatasourceCheck()<PremiumPlatformProps>(PremiumPlatform);
