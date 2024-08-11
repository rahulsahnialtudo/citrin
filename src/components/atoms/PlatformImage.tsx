import {
  ImageField,
  LinkField,
  Link as JssLink,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ClassField } from 'src/types';
import { cn } from 'src/utils';
import ImageContainer from './ImageContainer';
import Show from './Show';

type PlatformImageProps = {
  link: LinkField;
  logo: ImageField;
  className?: ClassField;
};

const PlatformImage = ({ logo, link, className }: PlatformImageProps) => {
  const { sitecoreContext } = useSitecoreContext();

  return (
    <Show
      when={sitecoreContext.pageState === 'edit'}
      otherwise={
        <JssLink field={link} className={cn(className)}>
          <ImageContainer imageData={logo} className="size-full" />
        </JssLink>
      }
    >
      <div className={cn('flex flex-col', className)}>
        <ImageContainer imageData={logo} />
        <JssLink field={link} className={cn(className)} />
      </div>
    </Show>
  );
};

export default PlatformImage;

{
  /* <JssLink field={link} className={cn(className)}>
        <ImageContainer imageData={logo} />
      </JssLink> */
}
