import { ReactNode } from 'react';
import { ClassField } from 'src/types';
import { cn } from 'src/utils';

type ColumnProps = {
  children: ReactNode;
  className?: ClassField;
};

const Column = ({ children, className }: ColumnProps) => {
  return <div className={cn('flex flex-col gap-6  md:hidden', className)}>{children}</div>;
};

export default Column;
