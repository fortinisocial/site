import React from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import Link from 'next/link';

const Join = styled(Section)`
  display: flex;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  height: 423px;
  padding: 0;

  .join {
    display: flex;
    flex: 1;
    margin: 0;

    .description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
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
      }

      a {
        font-family: 'Nunito', sans-serif;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        transition: all 0.2s;
        padding: 10px 15px;
        color: #2bf1f7;
        border-radius: 50px;
        border: 2px solid #2bf1f7;
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

  background: rgba(23, 79, 134, 0.5);

  &:after {
    content: '';
    background: url('/images/join/background.jpg');
    background-image: -webkit-image-set(
      url('/images/join/background.webp') 1x,
      url('/images/join/background.jpg') 1x
    );
    background-image: image-set(
      url('/images/join/background.webp') 1x,
      url('/images/join/background.jpg') 1x
    );
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
`;

export default function JoinSection() {
  return (
    <Join className="join-section">
      <div className="join">
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
