import { LinkField, Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { cn } from 'src/utils';
import Show from '../Show';
import { ClassField } from 'src/types';

type PrimaryButtonProps = {
  link: LinkField;
  className?: ClassField;
};

const PrimaryButton = ({ link, className }: PrimaryButtonProps) => {
  return (
    <Show when={!!link?.value?.href}>
      <JssLink field={link} className={cn('primary-button text-black', className)} />
    </Show>
  );
};

export default PrimaryButton;
