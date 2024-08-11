import { HTMLProps, MouseEventHandler } from 'react';
import { Field, LinkField, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

type ClassField = HTMLProps<HTMLElement>['className'];

type BaseComponent = {
  CTA: LinkField;
  Description: Field<string>;
  Image: ImageField;
  LinkText: Field<string>;
  Title: Field<string>;
  Video: LinkField;
};

type BaseField = {
  fields: BaseComponent;
};

type HtmlClickEvent = MouseEventHandler<HTMLDivElement>;
