import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import Image from 'next/image';
import Deposition from './Deposition';

const Depositions = styled(Section)`
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

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
  }

  .arrow {
    position: absolute;
    background: none;
    width: 100%;
    height: 40px;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 0;

    @media (min-width: 1024px) {
      max-width: 900px;
    }

    &.prev,
    &.next {
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

    &.prev {
      left: 12px;

      @media (max-width: 768px) {
        left: 8px;
      }
    }

    &.next {
      right: 12px;

      @media (max-width: 768px) {
        right: 8px;
      }
    }
  }
`;

export default function DepositionsSection() {
  const depositionsContainerRef = useRef(null);
  const [navigation, setNavigation] = useState({
    arrowLeft: false,
    arrowRight: true,
  });

  const handlePrev = () => {
    depositionsContainerRef.current.scrollBy(
      -depositionsContainerRef.current.firstChild.offsetWidth,
      0,
    );
  };

  const handleNext = () => {
    depositionsContainerRef.current.scrollBy(
      depositionsContainerRef.current.firstChild.offsetWidth,
      0,
    );
  };

  const handleNavigation = useCallback(({ arrowLeft, arrowRight }) => {
    console.log({ arrowLeft, arrowRight });
    setNavigation(currentNavigation => ({
      ...currentNavigation,
      arrowLeft: arrowLeft ?? currentNavigation.arrowLeft,
      arrowRight: arrowRight ?? currentNavigation.arrowRight,
    }));
  }, []);

  return (
    <Depositions id="depositions-section" className="depositions-section">
      <h1>O que dizem por aí...</h1>
      <h2>
        Quer saber o que dizem da gente? Se liga nos depoimentos de quem já
        conhece o nosso trabalho:
      </h2>

      <div
        id="depositions-container"
        className="depositions-container"
        ref={depositionsContainerRef}
      >
        <Deposition
          onScroll={handleNavigation}
          photoURL="/images/depositions/lilian.jpg"
          photoLabel="Lilian"
          authorName="Lilian"
          authorInfo="Diretora da escola parceira E. M. Heitor Villa Lobos"
        >
          &quot;A Fortini tem sido parceira no desenvolvimento emocional e
          cognitva dos estudantes de forma que a diferença é percebida no
          comportamento. Eles estão mais centrados e conscientes de sua condição
          de adolescentes em formação que precisam se responsabilizar pelo seu
          futuro. &quot;
        </Deposition>
        <Deposition
          onScroll={handleNavigation}
          photoURL="/images/depositions/rose.jpg"
          photoLabel="Rose"
          authorName="Rose"
          authorInfo="Mãe da Cristiellen (participante do Projeto de Tênis)"
        >
          &quot;A Fortini é muito importante na vida da Cristiellen pois,
          contribuir muito para desempenho escolar e sua saúde e com isso passou
          a ter responsabilidade; Hoje é uma criança mas feliz!! A Fortini dar
          todo suporte em sua vida com o apoio psicológico e pedagógico e outras
          assistência para suas dificuldades. A Fortini acompanha sua qualidade
          de vida para no futuro ela ser uma Atleta e uma pessoa encaminhada na
          vida. Agradeço Fortini pelo apoio a Cristiellen em sua caminhada na
          vida. &quot;
        </Deposition>
        <Deposition
          onScroll={handleNavigation}
          photoURL="/images/depositions/janis-costa.jpg"
          photoLabel="Janis Perpétua Pedro Costa"
          authorName="Janis P. P. Costa"
          authorInfo="Agente Comunitária no munícipio de Contagem e professora na E. E.
            Carlos Drummond de Andrade"
        >
          &quot;A Fortini proporciona acesso à esportes considerados nobres e
          que não estariam ao alcance dos estudantes de baixa renda se não
          existisse o projeto. As atividades desenvolvem a auto estima das
          crianças influenciando no crescimento de sua aprendizagem. &quot;
        </Deposition>
        <Deposition
          onScroll={handleNavigation}
          photoURL="/images/depositions/gilberto-cardoso.jpg"
          photoLabel="Gilberto Cardoso"
          authorName="Gilberto Cardoso da Silva"
          authorInfo="Sócio diretor da Academia Tennis Hall e professor de tênis"
        >
          &quot;Não deixo de acreditar que existem pessoas que estão sedentas de
          carinho e com um simples gesto podemos fazer a diferença na vida de
          alguém, a Fortini tem uma visão social e acima de tudo Humana, e me
          sinto privilegiado todos os dias, pela confiança que fora depositada
          em minha pessoa, ao longo desta caminhada de muitas batalhas sim, mas
          também de muitas conquistas. Creio que com empenho demostrado pelas
          pessoas que estão a frente deste projeto grandes coisas ainda estão
          por vim, espero poder está sempre disponível para ajudar , pois sei
          que pequenos gestos podem fazer muita diferença na vida de alguém..
          &quot;
        </Deposition>
      </div>
      {navigation.arrowLeft && (
        <span id="arrow-prev" className="arrow prev" onClick={handlePrev}>
          <Image
            src="/images/projects/chevron-left.svg"
            alt="Voltar"
            width={24}
            height={24}
            loading="lazy"
          />
        </span>
      )}
      {navigation.arrowRight && (
        <span id="arrow-next" className="arrow next" onClick={handleNext}>
          <Image
            src="/images/projects/chevron-right.svg"
            alt="Voltar"
            width={24}
            height={24}
            loading="lazy"
          />
        </span>
      )}
    </Depositions>
  );
}
