import React from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';

const Transparency = styled(Section)`
  display: flex;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  height: 423px;
  padding: 0;

  .transparency {
    display: flex;
    flex: 1;
    margin: 0;

    .description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      min-width: 440px;
      height: 100%;
      padding: 62px;
      font-size: 18px;

      h1 {
        font-size: 32px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1.2;
        color: #ffffff;
      }

      p {
        color: #ffffff;
        margin: 10px 0;
        font-size: 1.4rem;
        font-weight: 500;
      }

      .annual-balances {
        display: flex;
        gap: 1rem;
        width: 100%;

        a {
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          transition: all 0.2s;
          padding: 10px 15px;
          color: #93faff;
          border-radius: 50px;
          border: 2px solid #93faff;
          margin-top: 32px;

          &:hover {
            color: #ffffff;
            border: 2px solid #ffffff;
          }
        }
      }
    }

    @media (min-width: 1920px) {
      .description {
        font-size: 20px;
      }
    }
  }

  background: linear-gradient(
    to right,
    rgba(36, 128, 220, 0.8),
    rgba(34, 200, 205, 0.8),
    rgba(36, 218, 220, 0.8)
  );

  &:after {
    content: '';
    background: url('/images/transparency/background.jpg');
    background-image: -webkit-image-set(
      url('/images/transparency/background.webp') 1x,
      url('/images/transparency/background.jpg') 1x
    );
    background-image: image-set(
      url('/images/transparency/background.webp') 1x,
      url('/images/transparency/background.jpg') 1x
    );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center left;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 768px) {
    &:after {
      background-position: center;
    }

    .transparency {
      background: none;
      flex-direction: column;
      width: 100%;

      .annual-balances {
        flex-direction: column;

        a {
          flex: 1;
          text-align: center;
        }
      }

      .description {
        padding: 2rem;
        min-width: initial;
      }
    }
  }
`;

export default function TransparencySection() {
  return (
    <Transparency className="transparency-section">
      <div className="transparency">
        <div className="description">
          <h1>Transparência</h1>
          <p>Confira nossos balanços anuais.</p>

          <div className="annual-balances">
            <a
              href="/balance/Balanco_Social_Fortini_Investimento_Social_2020.pdf"
              title="Balanço Social 2020 - Fortini Investimento Social"
              target="_blank"
              rel="noreferrer"
            >
              Balanço Social 2020
            </a>
            <a
              href="/balance/Balanco_Social_Fortini_Investimento_Social_2021.pdf"
              title="Balanço Social 2021 - Fortini Investimento Social"
              target="_blank"
              rel="noreferrer"
            >
              Balanço Social 2021
            </a>
          </div>
        </div>
      </div>
    </Transparency>
  );
}
