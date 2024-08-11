import { Logo } from '../PremiumPlatform';
import PlatformImage from 'components/atoms/PlatformImage';

type PPDesktopProps = {
  logos: Logo[];
};

const PPDesktop = ({ logos }: PPDesktopProps) => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center sm:gap-4 md:gap-6 lg:gap-10">
      <div className="premium-platform-image-container">
        {logos?.slice(0, 7).map((item, index) => {
          const logo = item?.fields?.Logo;
          return (
            <PlatformImage
              key={`${logo?.value?.src}${index}`}
              link={item?.fields?.Link}
              logo={logo}
              className={`object-cover ${logos.length < 6 ? 'w-24' : 'w-[9.333%]'} `}
            />
          );
        })}
      </div>
      <div className="premium-platform-image-container">
        {logos?.slice(7).map((item, index) => {
          const logo = item?.fields?.Logo;
          return (
            <PlatformImage
              key={`${logo?.value?.src}${index}`}
              link={item?.fields?.Link}
              logo={logo}
              className="object-cover w-[9.333%]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PPDesktop;
