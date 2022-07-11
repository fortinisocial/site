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

    a {
      font-size: 1.2rem;
      background: #fff;
      color: #232323;
      padding: 8px 16px;
      border-radius: 9999px;
      transition: 0.6s;
      outline: 2px solid #24d6db;

      &:hover {
        background: #24d6db;
        color: #232323;
        outline: 2px solid #2dfaff;
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

const getLinkByValue = (value, isSubscription) =>
  ({
    25: isSubscription ? 'https://buy.stripe.com/bIY5obfEwcdg3RubIM' : '',
    50: isSubscription
      ? 'https://buy.stripe.com/cN203R4ZS3GK3Ru7sx'
      : 'https://buy.stripe.com/cN26sffEwa582Nq008',
    100: isSubscription
      ? 'https://buy.stripe.com/cN2bMz9g84KO9bObIO'
      : 'https://buy.stripe.com/00gbMzcsk5OSew87sB',
    200: isSubscription
      ? 'https://buy.stripe.com/6oE7wj4ZS2CGfAc007'
      : 'https://buy.stripe.com/bIYdUHbogelo5ZC4gq',
  }[value]);

export default function DonateSection() {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <Donate id="donate-section" className="donate-section">
      <div className="donate-intro">
        <h1>Faça a sua doação</h1>
        <p>
          Você pode ajudar a transformar vidas através de doações pontuais ou
          recorrentes.
        </p>
      </div>
      <div className="donate-buttons">
        <a
          href={getLinkByValue(25, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Doe R$ 25,00${isSubscription ? ' por mês' : ''}`}
        >
          R$ 25,00
        </a>
        <a
          href={getLinkByValue(50, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Doe R$ 50,00${isSubscription ? ' por mês' : ''}`}
        >
          R$ 50,00
        </a>
        <a
          href={getLinkByValue(100, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Doe R$ 100,00${isSubscription ? ' por mês' : ''}`}
        >
          R$ 100,00
        </a>
        <a
          href={getLinkByValue(200, isSubscription)}
          rel="noreferrer"
          target="_blank"
          title={`Doe R$ 200,00${isSubscription ? ' por mês' : ''}`}
        >
          R$ 200,00
        </a>
      </div>
      <div className="donate-type">
        <label
          title={
            isSubscription
              ? 'Desmarque para fazer uma doação pontual'
              : 'Marque para fazer doações mensais (Cancele quando quiser)'
          }
        >
          <input
            type="checkbox"
            checked={isSubscription}
            onChange={() => setIsSubscription(prevState => !prevState)}
          />
          Doação mensal
        </label>
        <p>
          Caso opte por doações mensais, você pode cancelá-las a qualquer
          momento.
        </p>
      </div>
      <div className="donate-others">
        <p>Você também pode doar outros valores através do nosso PIX:</p>
        <h3>contato@fortini.org.br</h3>
        <img
          src="/images/donate/pix.jpg"
          alt="QR Code PIX Fortini"
          loading="lazy"
          width={282}
          height={282}
        />
      </div>
    </Donate>
  );
}
