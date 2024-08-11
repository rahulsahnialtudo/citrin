import { Fragment, ReactNode } from 'react';

type ShowProps = {
  when: boolean;
  children: ReactNode;
  otherwise?: ReactNode;
};

const Show = ({ when, children, otherwise = null }: ShowProps) => {
  return <Fragment>{when ? children : otherwise}</Fragment>;
};

export default Show;
