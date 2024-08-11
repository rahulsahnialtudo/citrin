import { Logo } from '../PremiumPlatform';
import Slider from 'components/atoms/slider/Slider';
import PlatformImage from 'components/atoms/PlatformImage';

type PPMobileProps = {
  logos: Logo[];
};

const PPMobile = ({ logos }: PPMobileProps) => {
  return (
    <Slider className="md:hidden" showDots={false}>
      {logos?.map((item, index) => {
        const logo = item?.fields?.Logo;
        return (
          <div key={`${logo?.value?.src}${index}`} className="premium-platform-image-slider">
            <PlatformImage link={item?.fields?.Link} logo={logo} className="object-cover w-1/2" />
          </div>
        );
      })}
    </Slider>
  );
};

export default PPMobile;
