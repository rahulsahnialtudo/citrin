import { ClassField, HtmlClickEvent } from 'src/types';
import HeadingPrimary from './HeadingPrimary';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { cn } from 'src/utils';

type HeadingSecondaryProps = {
  title: Field<string>;
  className?: ClassField;
  onClick?: HtmlClickEvent;
};

const HeadingSecondary = ({ title, className, onClick }: HeadingSecondaryProps) => {
  return (
    <HeadingPrimary
      onClick={onClick}
      title={title}
      className={cn('trigger heading-secondary', className)}
    />
  );
};

export default HeadingSecondary;
