import React from 'react';
import { Field, Link as JssLink, Text } from '@sitecore-jss/sitecore-jss-nextjs';

type TextOnlyEditableButtonProps = {
  link: string;
  text: Field<string>;
};

const TextOnlyEditableButton = ({ link, text }: TextOnlyEditableButtonProps) => {
  return (
    <JssLink field={{ href: link }}>
      <h1 className="primary-button text-black">
        <Text field={text} />
      </h1>
    </JssLink>
  );
};

export default TextOnlyEditableButton;
