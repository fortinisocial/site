import React, { useRef } from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import Image from 'next/image';

const Depositions = styled(Section)`
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #174f86;
    font-size: 2rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #6a6363;
    margin: 0 0 48px 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.85rem;
    }
  }

  .depositions-container {
    position: relative;
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 20px;
    padding: 0.2rem;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    width: 100%;

    @media (min-width: 1440px) {
      max-width: 800px;
    }

    &::-webkit-scrollbar {
      width: 0 !important;
    }

    article {
      img {
        mask: url('/images/depositions/avatar-mask.svg');
      }

      scroll-snap-align: center;
      text-align: center;
      font-weight: 400;
      flex-basis: 100%;
      flex-shrink: 0;
      line-height: 2;

      p {
        color: #174f86;

        &:first-of-type {
          margin-top: 0;
        }

        .quote {
          color: #3f3f3f;
        }
      }

      .author {
        margin: 0;
        font-style: normal;
        font-size: 1.2rem;
        color: #232323;
      }

      .author-info {
        margin: 0;
        font-size: 0.8rem;
        font-weight: 400;
        font-style: normal;
        color: #6a6363;
        line-height: 1.4;
      }
    }
  }

  .arrows {
    position: absolute;
    background: none;
    width: 100%;
    height: 40px;
    bottom: 0;
    top: 0;
    margin: auto;

    @media (min-width: 1024px) {
      max-width: 900px;
    }

    .prev,
    .next {
      display: initial;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 9999;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      background: #fff;
      border-radius: 9999px;
      box-shadow: 8px 8px 16px hsl(0deg 0% 62% / 0.25);
      outline: 1px solid #e5e5e5;
      transition: 0.4s;
      cursor: pointer;

      &:hover {
        background: #fcfcfc;
        box-shadow: 8px 8px 16px hsl(0deg 0% 62% / 0.5);
      }

      @media (max-width: 768px) {
        width: 32px;
        height: 32px;

        > span {
          transform: scale(0.7);
        }
      }
    }

    .prev {
      left: 12px;

      @media (max-width: 768px) {
        left: 8px;
      }
    }

    .next {
      right: 12px;

      @media (max-width: 768px) {
        right: 8px;
      }
    }
  }
`;

export default function DepositionsSection() {
  const depositionsContainerRef = useRef(null);

  const handlePrev = () => {
    depositionsContainerRef.current.scrollBy(-340, 0);
  };

  const handleNext = () => {
    depositionsContainerRef.current.scrollBy(340, 0);
  };

  return (
    <Depositions id="depositions-section" className="depositions-section">
      <h1>O que dizem por aí...</h1>
      <h2>
        Quer saber o que dizem da gente? Se liga nos depoimentos de quem já
        conhece o nosso trabalho:
      </h2>

      <div className="depositions-container" ref={depositionsContainerRef}>
        <article>
          <img
            src="/images/depositions/gilberto-cardoso.jpg"
            alt="Gilberto Cardoso"
            width={175}
            height={175}
            loading="lazy"
          />
          <p>
            <span className="quote">&quot;</span>Não deixo de acreditar que
            existem pessoas que estão sedentas de carinho e com um simples gesto
            podemos fazer a diferença na vida de alguém, a Fortini tem uma visão
            social e acima de tudo Humana, e me sinto privilegiado todos os
            dias, pela confiança que fora depositada em minha pessoa, ao longo
            desta caminhada de muitas batalhas sim, mas também de muitas
            conquistas. Creio que com empenho demostrado pelas pessoas que estão
            a frente deste projeto grandes coisas ainda estão por vim, espero
            poder está sempre disponível para ajudar , pois sei que pequenos
            gestos podem fazer muita diferença na vida de alguém..
            <span className="quote">&quot;</span>
          </p>
          <p className="author">Gilberto Cardoso da Silva</p>
          <p className="author-info">
            Sócio diretor da Academia Tennis Hall e professor de tênis
          </p>
        </article>
        <article>
          <img
            src="/images/depositions/janis-costa.jpg"
            alt="Janis Perpétua Pedro Costa"
            width={175}
            height={175}
            loading="lazy"
          />
          <p>
            <span className="quote">&quot;</span>A Fortini proporciona acesso à
            esportes considerados nobres e que não estariam ao alcance dos
            estudantes de baixa renda se não existisse o projeto. As atividades
            desenvolvem a auto estima das crianças influenciando no crescimento
            de sua aprendizagem.<span className="quote">&quot;</span>
          </p>
          <p className="author">Janis P. P. Costa</p>
          <p className="author-info">
            Agente Comunitária no munícipio de Contagem e professora na E. E.
            Carlos Drummond de Andrade
          </p>
        </article>
      </div>
      <div className="arrows">
        <span className="prev" onClick={handlePrev}>
          <Image
            src="/images/projects/chevron-left.svg"
            alt="Voltar"
            width={24}
            height={24}
            loading="lazy"
          />
        </span>
        <span className="next" onClick={handleNext}>
          <Image
            src="/images/projects/chevron-right.svg"
            alt="Voltar"
            width={24}
            height={24}
            loading="lazy"
          />
        </span>
      </div>
    </Depositions>
  );
}
