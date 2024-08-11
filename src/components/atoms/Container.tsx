import React, { ReactNode } from 'react';
import { ClassField } from 'src/types';
import { cn } from 'src/utils';

type ContainerProps = {
  children: ReactNode;
  className?: ClassField;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('px-6 py-20 sm:px-16 max-w-screen-4xl mx-auto ', className)}>{children}</div>
  );
};

export default Container;
