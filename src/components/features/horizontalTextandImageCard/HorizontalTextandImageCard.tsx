import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Container from 'components/atoms/Container';
import { ComponentProps } from 'lib/component-props';
import HorizontalImageCardDesktop from './layout/HorizontalImageCardDesktop';
import HorizontalImageCardMobile from './layout/HorizontalImageCardMobile';
import Show from 'components/atoms/Show';
import { isEmptyObject } from 'src/utils';
import { BaseComponent } from 'src/types';

type HorizontalTextandImageCardProps = ComponentProps & {
  fields: Omit<BaseComponent, 'LinkText' | 'Video'>;
};

const HorizontalTextandImageCard = (props: HorizontalTextandImageCardProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const data = props?.fields;
  const params = props?.params;
  const showComponent =
    !isEmptyObject(data?.Image?.value) && !!data?.Title?.value && !!data?.Description?.value;
  const isLeftAligned = params['ImageOnLeft'] === '1';

  return (
    <Show when={sitecoreContext.pageState === 'edit' || showComponent}>
      <Container>
        <HorizontalImageCardDesktop {...data} isLeftAligned={isLeftAligned} />
        <HorizontalImageCardMobile {...data} />
      </Container>
    </Show>
  );
};

export default withDatasourceCheck()<HorizontalTextandImageCardProps>(HorizontalTextandImageCard);
