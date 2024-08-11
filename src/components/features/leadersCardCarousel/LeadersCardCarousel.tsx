import {
  Field,
  withDatasourceCheck,
  ImageField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Container from 'components/atoms/Container';
import { ComponentProps } from 'lib/component-props';
import LeadersCadDesktop from './layout/LeadersCadDesktop';
import LeadersCardMobile from './layout/LeadersCardMobile';
import Show from 'components/atoms/Show';

export type LeaderCardFieldType = {
  Designation: Field<string>;
  Images: {
    fields: {
      Image: ImageField;
    };
  }[];
  Title: Field<string>;
};

export type LeadersCardCarouselProps = ComponentProps & {
  fields: {
    ViewAllLinkText: Field<string>;
    ViewAllLink: string;
    Title: Field<string>;
    SelectLeaders: {
      url: string;
      fields: LeaderCardFieldType;
    }[];
    LinkText: Field<string>;
  };
};

const LeadersCardCarousel = (props: LeadersCardCarouselProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const data = props?.fields;
  const showCmp =
    !!data?.Title?.value &&
    !!data?.SelectLeaders?.length &&
    !!data?.LinkText?.value &&
    !!data?.ViewAllLink &&
    !!data?.ViewAllLinkText;
  return (
    <Show when={sitecoreContext.pageState === 'edit' || showCmp}>
      <div className="bg-whiteLight">
        <Container>
          <LeadersCadDesktop {...props} />
          <LeadersCardMobile {...props} />
        </Container>
      </div>
    </Show>
  );
};

export default withDatasourceCheck()<LeadersCardCarouselProps>(LeadersCardCarousel);
