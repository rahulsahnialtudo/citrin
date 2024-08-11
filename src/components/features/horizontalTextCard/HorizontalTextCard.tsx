import {
  Field,
  withDatasourceCheck,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Container from 'components/atoms/Container';
import { ComponentProps } from 'lib/component-props';
import HTCMobile from './layout/HTCMobile';
import HTCDesktop from './layout/HTCDesktop';
import Show from 'components/atoms/Show';

export type HorizontalTextCardProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    CTA: LinkField;
  };
};

const HorizontalTextCard = (props: HorizontalTextCardProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const data = props?.fields;
  const params = props?.params;
  const isDark = params['SetBlackBackground'] === '1';

  return (
    <Show
      when={
        sitecoreContext.pageState === 'edit' || (!!data?.Title?.value && !!data?.Description?.value)
      }
    >
      <div className={isDark ? 'bg-dark' : 'bg-white'}>
        <Container>
          <HTCMobile {...data} isDark={isDark} />
          <HTCDesktop {...data} isDark={isDark} />
        </Container>
      </div>
    </Show>
  );
};

export default withDatasourceCheck()<HorizontalTextCardProps>(HorizontalTextCard);
