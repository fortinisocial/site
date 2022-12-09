import React from 'react';
import styled from 'styled-components';
import ODSItem from '../ODSItem';
import { Section } from '../Layout';
import { useTranslations } from 'next-intl';

const History = styled(Section)`
  position: relative;
  padding: 80px;
  background-image: url('/images/projects/projects.jpg');
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 1920px;
  width: 100%;
  height: 700;
  display: flex;
  flex-direction: column;

  img {
    position: absolute;
    top: -160px;
    left: -130px;
    max-height: 1000px;
    pointer-events: none;
  }

  .description {
    max-width: 560px;
    margin-bottom: 400px;

    h1 {
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.2;
      color: #24dadc;
    }

    p {
      line-height: 2rem;
      font-weight: 500;
      font-size: 1.2rem;
      color: #ffffff;
    }

    a {
      display: inline-flex;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      transition: all 0.2s;
      padding: 10px 15px;
      color: #24d6db;
      border-radius: 50px;
      border: 2px solid #24d6db;

      &:hover {
        color: #ffffff;
        border: 2px solid #ffffff;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem;
    max-width: initial;

    > img {
      display: none;
    }

    .description {
      width: 100%;
      margin-bottom: 0;

      p {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 4px;
        border-radius: 10px;
      }
    }
  }
`;

export default function HistorySection() {
  const t = useTranslations('Projects');

  return (
    <History className="history-section">
      <img src="/images/hexagon.svg" alt="Hexágono" />
      <div className="description">
        <h1>{t('title')}</h1>
        {t.rich('introduction', {
          p: chunks => <p>{chunks}</p>,
          b: chunks => <b>{chunks}</b>,
        })}
      </div>
    </History>
  );
}
