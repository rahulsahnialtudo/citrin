import React from 'react';
import { Field, Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import ImageContainer from 'components/atoms/ImageContainer';
import { LeaderCardFieldType } from 'components/features/leadersCardCarousel/LeadersCardCarousel';
import { transformKeysToCamelCase } from 'src/utils/transformer';

type LeaderCardProps = {
  cardData: LeaderCardFieldType;
  url: string;
  linkText: Field<string>;
};

const LeaderCard = ({ cardData, url, linkText }: LeaderCardProps) => {
  const data = transformKeysToCamelCase(cardData);
  return (
    <div className="h-[550px]">
      <div className="leader-card-image-wrapper">
        <ImageContainer
          imageData={data?.images[0]?.fields?.Image}
          className="h-full object-cover"
        />
      </div>
      <div className="leader-card-details">
        <div className="flex flex-col gap-2">
          <HeadingSecondary title={data?.title} className="leader-card-name" />
          <HeadingSecondary title={data?.designation} className="leader-card-designation" />
          <div className="bg-greenPrimary w-[135px] h-[1px]" />
          <JssLink field={{ value: { href: url } }} className="!no-underline">
            <HeadingSecondary className="leader-card-link-text" title={linkText} />
          </JssLink>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
