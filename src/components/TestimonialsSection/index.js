import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import Image from 'next/image';
import Testimonial from './Testimonial';

const Testimonials = styled(Section)`
  position: relative;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  z-index: 0;

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

  .testimonials-container {
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
      z-index: 12;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 96px;
      height: 96px;

      border-radius: 9999px;
      transition: 0.4s;
      cursor: pointer;

      img {
        filter: invert(55%) sepia(66%) saturate(498%) hue-rotate(133deg)
          brightness(106%) contrast(92%);
      }

      @media (max-width: 768px) {
        width: 48px;
        height: 48px;

        img {
          width: 44px;
        }

        > span {
          transform: scale(0.7);
        }
      }
    }

    &.prev {
      left: 12px;

      @media (max-width: 768px) {
        left: -4px;
      }
    }

    &.next {
      right: 12px;

      @media (max-width: 768px) {
        right: -4px;
      }
    }
  }
`;

export default function TestimonialsSection() {
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
    setNavigation(currentNavigation => ({
      ...currentNavigation,
      arrowLeft: arrowLeft ?? currentNavigation.arrowLeft,
      arrowRight: arrowRight ?? currentNavigation.arrowRight,
    }));
  }, []);

  return (
    <Testimonials id="testimonials-section" className="testimonials-section">
      <h1>O que dizem por aí...</h1>
      <h2>
        Quer saber o que dizem da gente? Se liga nos depoimentos de quem já
        conhece o nosso trabalho:
      </h2>

      <div
        id="testimonials-container"
        className="testimonials-container"
        ref={depositionsContainerRef}
      >
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/lilian.jpg"
          photoLabel="Lilian"
          authorName="Lilian"
          authorInfo="Diretora da escola parceira E. M. Heitor Villa Lobos"
        >
          &quot;A Fortini tem sido parceira no desenvolvimento emocional e
          cognitivo dos estudantes de forma que a diferença é percebida no
          comportamento. Eles estão mais centrados e conscientes de sua condição
          de adolescentes em formação que precisam se responsabilizar pelo seu
          futuro. &quot;
        </Testimonial>
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/rose.jpg"
          photoLabel="Rose"
          authorName="Rose"
          authorInfo="Mãe da Cristiellen (participante do Projeto de Tênis)"
        >
          &quot;A Fortini é muito importante na vida da Cristiellen pois,
          contribui muito para o seu desempenho escolar e a sua saúde e com isso
          ela passou a ter responsabilidade; Hoje é uma criança mais feliz!! A
          Fortini dá todo suporte em sua vida com o apoio psicológico e
          pedagógico e outras assistências para suas dificuldades. A Fortini
          acompanha sua qualidade de vida para no futuro ela ser uma atleta e
          uma pessoa encaminhada na vida. Agradeço Fortini pelo apoio a
          Cristiellen em sua caminhada na vida. &quot;
        </Testimonial>
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/janis-costa.jpg"
          photoLabel="Janis Perpétua Pedro Costa"
          authorName="Janis P. P. Costa"
          authorInfo="Agente Comunitária no munícipio de Contagem e professora na E. E.
            Carlos Drummond de Andrade"
        >
          &quot;A Fortini proporciona acesso à esportes considerados nobres e
          que não estariam ao alcance dos estudantes de baixa renda se não
          existisse o projeto. As atividades desenvolvem a auto estima das
          crianças influenciando no crescimento de sua aprendizagem. &quot;
        </Testimonial>
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/gilberto-cardoso.jpg"
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
        </Testimonial>
      </div>
      {navigation.arrowLeft && (
        <span id="arrow-prev" className="arrow prev" onClick={handlePrev}>
          <img
            src="/images/projects/chevron-left.svg"
            alt="Voltar"
            width={64}
            height={64}
            loading="lazy"
          />
        </span>
      )}
      {navigation.arrowRight && (
        <span id="arrow-next" className="arrow next" onClick={handleNext}>
          <img
            src="/images/projects/chevron-right.svg"
            alt="Voltar"
            width={64}
            height={64}
            loading="lazy"
          />
        </span>
      )}
    </Testimonials>
  );
}