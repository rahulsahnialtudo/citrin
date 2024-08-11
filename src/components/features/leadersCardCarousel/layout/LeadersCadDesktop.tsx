import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import Row from 'components/atoms/layout/Row';
import Slider from 'components/atoms/slider/Slider';
import { LeadersCardCarouselProps } from '../LeadersCardCarousel';
import LeaderCard from 'components/atoms/cards/leaderCard/LeaderCard';
import TextOnlyEditableButton from 'components/atoms/buttons/TextOnlyEditableButton';

const LeadersCadDesktop = (props: LeadersCardCarouselProps) => {
  const data = props?.fields;
  const buttonText = data?.ViewAllLinkText;
  const buttonLink = data?.ViewAllLink;
  return (
    <>
      <Row className="justify-between">
        <HeadingSecondary title={data?.Title} />
        <TextOnlyEditableButton link={buttonLink} text={buttonText} />
      </Row>
      <Slider className="hidden my-4 md:block" dotClassName="top-[105%]">
        {data?.SelectLeaders?.slice(0, 7)?.map((item) => (
          <LeaderCard
            key={item?.url}
            cardData={item?.fields}
            url={item?.url}
            linkText={data?.LinkText}
          />
        ))}
      </Slider>
    </>
  );
};

export default LeadersCadDesktop;
