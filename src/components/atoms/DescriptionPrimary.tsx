import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { cn } from 'src/utils';
import Show from './Show';
import { ClassField } from 'src/types';

type DescriptionPrimaryProps = {
  description: Field<string>;
  className?: ClassField;
};

const DescriptionPrimary = ({ description, className }: DescriptionPrimaryProps) => {
  return (
    <Show when={!!description?.value}>
      <div className={cn('text-xl font-normal text-desc break-words', className)}>
        <RichText field={description} />
      </div>
    </Show>
  );
};

export default DescriptionPrimary;
