import React from 'react';
import styled from 'styled-components';
import ODSItem from '../ODSItem';
import { Section } from '../Layout';

const History = styled(Section)`
  position: relative;
  padding: 80px;
  background-image: url('/images/projects/projects.jpg');
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: 0% 50%;
  max-width: 1920px;
  width: 100%;
  height: 700;
  display: flex;
  flex-direction: column;

  img {
    position: absolute;
    top: -160px;
    left: -160px;
    max-height: 1000px;
    pointer-events: none;
  }

  .description {
    width: 400px;
    margin-bottom: 400px;

    h1 {
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.2;
      color: #24dadc;
    }

    p {
      font-size: 18px;
      color: #ffffff;
      margin-bottom: 24px;
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

    > img {
      display: none;
    }

    .description {
      width: 100%;
      margin-bottom: 0;

      p {
        line-height: 2rem;
      }
    }
  }
`;

export default function HistorySection() {
  return (
    <History className="history-section">
      <img src="/images/hexagon.svg" alt="Hexágono" />
      <div className="description">
        <h1>Nossas oficinas</h1>
        <p>
          Falar aqui sobre compromisso, resumidamente sobre o propósito das
          oficinas, sobre o valor que isso traz, etc, e como isso faz parte da
          história da Fortini.
        </p>

        <a href="/institucional" title="Nossa história">
          Nossa história
        </a>
      </div>
    </History>
  );
}
