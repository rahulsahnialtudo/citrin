import {
  Field,
  withDatasourceCheck,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Container from 'components/atoms/Container';
import { ComponentProps } from 'lib/component-props';
import TCWTDesktop from './layout/TCWTDesktop';
import TCWTMobile from './layout/TCWTMobile';
import Show from 'components/atoms/Show';

export type TextCardWithTabsProps = ComponentProps & {
  fields: {
    CTA: LinkField;
    Description: Field<string>;
    Title: Field<string>;
    SelectTab: {
      fields: {
        SelectTabs: {
          fields: {
            Tab: LinkField;
          };
        }[];
        Title: Field<string>;
      };
    };
  };
};

const TextCardwithTabs = (props: TextCardWithTabsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const params = props?.params;
  const isDark = params['SetBlackBackground'] === '1';
  const data = props?.fields;
  const showCmp =
    !!data?.Title?.value &&
    !!data?.Description?.value &&
    !!data?.SelectTab?.fields?.SelectTabs.length;

  return (
    <Show when={sitecoreContext.pageState === 'edit' || showCmp}>
      <div className={isDark ? 'bg-dark' : 'bg-whiteLight'}>
        <Container>
          <TCWTDesktop {...props} />
          <TCWTMobile {...props} />
        </Container>
      </div>
    </Show>
  );
};

export default withDatasourceCheck()<TextCardWithTabsProps>(TextCardwithTabs);
