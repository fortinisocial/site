import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';

const Donate = styled(Section)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: auto;

  h1 {
    color: #24d6db;
    font-size: 2rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    text-align: left;
    font-weight: 400;
    line-height: 1.75rem;

    strong {
      font-weight: 700;
    }
  }

  .donate-buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    &:last-of-type {
      margin-top: 0;
    }

    a {
      font-size: 1.2rem;
      background: #fff;
      color: #232323;
      padding: 8px 16px;
      border-radius: 9999px;
      transition: 0.6s;
      border: 2px solid #24d6db;

      &:hover {
        background: #24d6db;
        color: #232323;
        border: 2px solid #2dfaff;
      }
    }
  }

  .donate-type {
    font-size: 1.1rem;
    text-align: center;
    margin-top: 2rem;

    label {
      font-weight: 500;
      line-height: 2rem;
      cursor: pointer;
    }

    input {
      vertical-align: middle;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.25rem;
      margin: 0;
      padding: 0;
      color: #6a6363;
      text-align: center;
    }
  }

  .donate-others {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      color: #24d6db;
      font-size: 1.5rem;
      line-height: 0.5rem;
    }
  }
`;

const getLinkByValueUSD = (value, isSubscription) =>
  ({
    25: isSubscription
      ? 'https://buy.stripe.com/3cs7wj9g87X073GbJ2'
      : 'https://donate.stripe.com/eVa2bZ3VO5OS4Vy145',
    50: isSubscription
      ? 'https://buy.stripe.com/dR63g3fEw2CG9bO9AV'
      : 'https://donate.stripe.com/8wMdUH0JC6SWew8000',
    100: isSubscription
      ? 'https://buy.stripe.com/8wMaIv63W1yC5ZCdRc'
      : 'https://donate.stripe.com/00geYL7807X0gEgcMO',
    200: isSubscription
      ? 'https://buy.stripe.com/aEU4k72RKa583Ru8wT'
      : 'https://donate.stripe.com/fZe7wjeAs6SWew8dQT',
  }[value]);

const getLinkByValueBRL = (value, isSubscription) =>
  ({
    25: isSubscription
      ? 'https://buy.stripe.com/bIY5obfEwcdg3RubIM'
      : 'https://donate.stripe.com/aEU7wjeAsgtwfAc9AS',
    75: isSubscription
      ? 'https://buy.stripe.com/6oE5obbog2CG3RuaEV'
      : 'https://donate.stripe.com/4gwbMz0JCelo1Jm7sI',
    50: isSubscription
      ? 'https://buy.stripe.com/cN203R4ZS3GK3Ru7sx'
      : 'https://donate.stripe.com/cN26sffEwa582Nq008',
    100: isSubscription
      ? 'https://buy.stripe.com/cN2bMz9g84KO9bObIO'
      : 'https://donate.stripe.com/00gbMzcsk5OSew87sB',
    200: isSubscription
      ? 'https://buy.stripe.com/6oE7wj4ZS2CGfAc007'
      : 'https://donate.stripe.com/bIYdUHbogelo5ZC4gq',
  }[value]);

export default function DonateSection({ locale }) {
  const t = useTranslations('Donate');
  const [isSubscription, setIsSubscription] = useState(true);

  const getDonationLink =
    locale === 'pt-br' ? getLinkByValueBRL : getLinkByValueUSD;

  const currency = locale === 'pt-br' ? 'R$ ' : '$';

  return (
    <Donate id="donate-section" className="donate-section">
      <div className="donate-intro">
        <h1>{t('title')}</h1>
        <p>{t('subTitle')}</p>
      </div>
      <div className="donate-buttons">
        <a
          href={getDonationLink(25, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Donate $25.00${isSubscription ? ' monthly' : ''}`}
        >
          {currency}25.00
        </a>
        <a
          href={getDonationLink(50, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Donate ${currency}50.00${isSubscription ? ' monthly' : ''}`}
        >
          {currency}50.00
        </a>
        <a
          href={getDonationLink(100, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Donate ${currency}100.00${isSubscription ? ' monthly' : ''}`}
        >
          {currency}100.00
        </a>
        <a
          href={getDonationLink(200, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Donate ${currency}200.00${isSubscription ? ' monthly' : ''}`}
        >
          {currency}200.00
        </a>
      </div>
      {/* <div className="donate-type">
        <label
          title={
            isSubscription ? t('recurrencyOnTitle') : t('recurrencyOffTitle')
          }
        >
          <input
            type="checkbox"
            checked={isSubscription}
            onChange={() => setIsSubscription(prevState => !prevState)}
          />
          {t('monthly')}
        </label>
        <p>{t('monthlyInfo')}</p>
      </div> */}
      {/* <br />
      <div className="donate-others">
        <p>{t('oneTimeDonationInfo')}</p>
        <div className="donate-buttons">
          <a
            href={
              locale === 'pt-br'
                ? 'https://donate.stripe.com/eVa5obakcfps1JmfZd'
                : 'https://donate.stripe.com/bIY8An0JC0uy0FiaF2'
            }
            rel="noreferrer"
            target="_blank"
            title={t('oneTimeDonation')}
          >
            {t('oneTimeDonation')}
          </a>
        </div>
      </div> */}
    </Donate>
  );
}
