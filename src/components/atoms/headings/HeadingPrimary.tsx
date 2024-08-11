import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { cn } from 'src/utils';
import Show from '../Show';
import { ClassField, HtmlClickEvent } from 'src/types';

type HeadingPrimaryProps = {
  title: Field<string>;
  className?: ClassField;
  onClick?: HtmlClickEvent;
};

const HeadingPrimary = ({ title, className, onClick }: HeadingPrimaryProps) => {
  return (
    <Show when={!!title?.value}>
      <h1 className={cn('trigger heading-primary', className)} onClick={onClick}>
        <Text field={title} />
      </h1>
    </Show>
  );
};

export default HeadingPrimary;
