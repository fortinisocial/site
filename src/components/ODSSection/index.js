import React from 'react';
import styled from 'styled-components';
import ODSItem from '../ODSItem';
import { Section } from '../Layout';
import { useTranslations } from 'next-intl';

const ODS = styled(Section)`
  background: #002743;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  min-height: 620px;
  height: auto;

  h1 {
    font-size: 32px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    max-width: 800px;
  }

  .onu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2480dc;
    text-transform: uppercase;
    max-width: 370px;

    p {
      font-size: 24px;
      text-align: left;
      font-weight: 400;
      margin-left: 14px;

      strong {
        font-weight: 700;
      }
    }
  }

  .ods-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    @media (max-width: 1024px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export default function ODSSection() {
  const t = useTranslations('SDG');

  return (
    <ODS id="ods-section" className="ods-section">
      <h1>{t('title')}</h1>
      <h2>{t('content')}</h2>
      <div className="onu">
        <img
          src="/images/ods/ONU.svg"
          alt="ONU"
          width={122}
          height={101}
          loading="lazy"
        />
        <p>
          {t.rich('acronim', {
            b: chunks => <b>{chunks}</b>,
          })}
        </p>
      </div>
      <div className="ods-list">
        <ODSItem number={1} />
        <ODSItem number={3} />
        <ODSItem number={4} />
        <ODSItem number={5} />
        <ODSItem number={10} />
        <ODSItem number={16} />
      </div>
    </ODS>
  );
}
