import { LeadersCardCarouselProps } from '../LeadersCardCarousel';
import Column from 'components/atoms/layout/Column';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import Slider from 'components/atoms/slider/Slider';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton';
import LeaderCard from 'components/atoms/cards/leaderCard/LeaderCard';

const LeadersCardMobile = (props: LeadersCardCarouselProps) => {
  const data = props?.fields;
  const buttonText = data?.ViewAllLinkText?.value;
  const buttonLink = data?.ViewAllLink;

  return (
    <Column>
      <HeadingSecondary title={data?.Title} />
      <Slider className="block my-4 md:hidden" dotClassName="top-[105%]">
        {data?.SelectLeaders?.slice(0, 4)?.map((item) => (
          <LeaderCard
            key={item?.url}
            cardData={item?.fields}
            url={item?.url}
            linkText={data?.LinkText}
          />
        ))}
      </Slider>
      <PrimaryButton link={{ value: { href: buttonLink, text: buttonText } }} className="mt-5" />
    </Column>
  );
};

export default LeadersCardMobile;
