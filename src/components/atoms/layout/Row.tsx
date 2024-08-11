import { ReactNode } from 'react';
import { ClassField } from 'src/types';
import { cn } from 'src/utils';

type RowProps = {
  children: ReactNode;
  className?: ClassField;
};

const Row = ({ children, className }: RowProps) => {
  return <div className={cn('hidden gap-10 md:flex', className)}>{children}</div>;
};

export default Row;
