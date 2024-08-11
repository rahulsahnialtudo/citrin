import React from 'react';
import { TextCardWithTabsProps } from '../TextCardwithTabs';
import { transformKeysToCamelCase } from 'src/utils/transformer';
import Row from 'components/atoms/layout/Row';
import HeadingSecondary from 'components/atoms/headings/HeadingSecondary';
import DescriptionPrimary from 'components/atoms/DescriptionPrimary';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton';
import SecondaryButton from 'components/atoms/buttons/SecondaryButton';

const TCWTDesktop = (props: TextCardWithTabsProps) => {
  const data = transformKeysToCamelCase(props?.fields);
  const params = props?.params;
  const isDark = params['SetBlackBackground'] === '1';

  return (
    <Row className="gap-[84px]">
      <div className="flex flex-col gap-10 ">
        <HeadingSecondary
          title={data?.title}
          className={`md:max-w-[400px] lg:max-w-[900px] ${isDark && 'text-white'}`}
        />
        <DescriptionPrimary
          description={data?.description}
          className={`md:max-w-[300px] lg:max-w-[846px] 4xl:max-w-screen-lg ${
            isDark && 'text-white'
          }`}
        />
        <PrimaryButton link={data?.cta} />
      </div>
      <div className="md:w-[400px] h-96 flex flex-col gap-6">
        <HeadingSecondary
          title={{ value: 'Related Practices' }}
          className={`tab-section-heading ${isDark && 'text-white'}`}
        />
        <div className="w-full flex flex-wrap gap-3">
          {data?.selecttab?.fields?.SelectTabs?.slice(0, 6)?.map((tab) => (
            <SecondaryButton
              key={tab?.fields?.Tab?.value?.href}
              link={tab?.fields?.Tab}
              className={
                isDark
                  ? 'border-white text-white border-[1px] focus:!text-dark focus:!bg-white'
                  : 'border-dark text-dark border-[1px] focus:!text-white focus:!bg-dark'
              }
            />
          ))}
        </div>
      </div>
    </Row>
  );
};

export default TCWTDesktop;
