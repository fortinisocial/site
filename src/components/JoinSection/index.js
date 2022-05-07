import React from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import Link from 'next/link';

const Join = styled(Section)`
  display: flex;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  height: 390px;
  padding: 0;

  .join {
    display: flex;
    flex: 1;
    background: #174f86;
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
        color: #6eb6ff;
      }

      p {
        color: #ffffff;
        margin: 10px 0;
        font-size: 1.4rem;
      }

      a {
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        transition: all 0.2s;
        padding: 10px 15px;
        color: #6eb6ff;
        border-radius: 50px;
        border: 2px solid #6eb6ff;
        margin-top: 32px;

        &:hover {
          color: #ffffff;
          border: 2px solid #ffffff;
        }
      }
    }

    @media (min-width: 1920px) {
      img {
        width: 845px;
        height: 488px;
      }

      .description {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1366px) {
    background: rgba(7, 18, 20, 0.5);

    &:after {
      content: '';
      background: url('/images/join/background.jpg') rgba(0, 0, 0, 0.1);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }

    .join {
      background: none;
      flex-direction: column;
      width: 100%;

      > img {
        display: none;
      }

      .description {
        min-width: initial;
        padding: 2rem;

        h1 {
          color: white;
        }

        p {
          filter: drop-shadow(1px 2px 8px hsl(260deg 20% 10% / 0.8));
        }

        a {
          color: white;
          border-color: white;
        }
      }
    }
  }
`;

export default function JoinSection() {
  return (
    <Join className="join-section">
      <div className="join">
        <img
          src="/images/join/background.jpg"
          alt="Três crianças com a camisa da Fortini"
          width={732}
          height={423}
          loading="lazy"
        />
        <div className="description">
          <h1>Junte-se a nós</h1>
          <p>
            Faça parte da nossa rede de doadores e nos ajude a transformar
            vidas.
          </p>

          <Link href="/doe" title="Faça parte da Fortini">
            Quero Doar
          </Link>
        </div>
      </div>
    </Join>
  );
}
