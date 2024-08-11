import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import PrimaryButton from './PrimaryButton';
import { ClassField } from 'src/types';
import { cn } from 'src/utils';

type SecondaryButtonProps = {
  link: LinkField;
  className?: ClassField;
};

const SecondaryButton = ({ link, className }: SecondaryButtonProps) => {
  return (
    <PrimaryButton
      link={link}
      className={cn(
        'border-solid border-2 border-greenPrimary bg-transparent text-black',
        className
      )}
    />
  );
};

export default SecondaryButton;
