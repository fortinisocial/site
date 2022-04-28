import React from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';

const About = styled(Section)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: auto;

  h1 {
    color: #24d6db;
    font-size: 2rem;
    text-transform: uppercase;
  }

  h2 {
    color: #24d6db;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    line-height: 1.75rem;

    strong {
      font-weight: 700;
    }
  }

  .about-hexagons {
    display: flex;
    flex-direction: column;

    img {
      margin-top: 4rem;
      align-self: center;
    }

    @media (max-width: 768px) {
      img {
        width: 100%;
      }
    }
  }
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    margin-right: 2rem;
  }

  p {
    max-width: 320px;
  }

  @media (max-width: 768px) {
    img {
      margin-right: 0;
    }

    p {
      &:first-of-type {
        display: none;
      }
    }
  }
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 769px) {
    > p {
      &:last-of-type {
        display: none;
      }
    }
  }
`;

const Institutional = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 240px;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    margin-bottom: 0;
    align-items: center;
  }

  p {
    color: white;
    text-align: center;
  }

  .about-vision,
  .about-values {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.75rem;
    width: 360px;
    height: 410px;
  }

  .about-vision {
    position: relative;
    background-image: url('/images/about/hexagon-01.svg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
  }

  .about-values {
    position: absolute;
    background-image: url('/images/about/hexagon-02.svg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    left: -30px;
    bottom: -260px;

    h2 {
      position: absolute;
      transform: rotate(-90deg);
      left: 0;
      color: white;
    }

    ul {
      list-style-type: square;
      padding-left: 4rem;
      color: white;
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 768px) {
    .about-vision,
    .about-values {
      width: 343px;
      height: 390px;
      margin: 0 -1rem;
    }

    .about-values {
      position: relative;
      left: 0;
      bottom: 0;
    }
  }
`;

export default function AboutSection() {
  return (
    <About className="about-section">
      <Columns>
        <FirstColumn>
          <img
            src="/images/about/maiara-wenceslau-fortini.png"
            alt="Maiara Wenceslau"
            loading="lazy"
          />
          <p>
            Criamos a nossa organização para{' '}
            <strong>contribuir com uma educação transformadora</strong> para
            crianças e adolescentes estudantes da rede pública de ensino da
            Região Metropolitana de Belo Horizonte.
          </p>
        </FirstColumn>
        <SecondColumn>
          <div className="about-intro">
            <h1>Sobre a Fortini</h1>
            <p>
              A Fortini é uma organização social que atua em parceria com
              escolas públicas da{' '}
              <strong>Região Metropolitana de Belo Horizonte</strong>, a fim de
              promover o acesso à educação, ao esporte e a cultura para crianças
              e adolescentes.
            </p>
            <p>
              Nosso grande sonho é{' '}
              <strong>promover o acesso ao esporte e a cultura</strong> para
              estudantes de todas as escolas públicas da Região Metropolitana de
              Belo Horizonte.
            </p>
          </div>
          <Institutional>
            <div className="about-vision">
              <h2>Nossa visão</h2>
              <p>
                Ser <strong>referência</strong> na realização de{' '}
                <strong>projetos socioeducativos</strong>, na Região
                Metropolitana de Belo Horizonte, <strong>até 2026</strong>.
                Vamos conosco?
              </p>
            </div>
            <div className="about-values">
              <h2>Valores</h2>
              <ul>
                <li>Iniciativa e Engajamento</li>
                <li>Amor e cuidado</li>
                <li>Juntos somos melhores</li>
                <li>Comprometimento e excelência</li>
                <li>Sustentabilidade</li>
              </ul>
            </div>
          </Institutional>
          <p>
            Criamos a nossa organização para{' '}
            <strong>contribuir com uma educação transformadora</strong> para
            crianças e adolescentes estudantes da rede pública de ensino da
            Região Metropolitana de Belo Horizonte.
          </p>
        </SecondColumn>
      </Columns>
      <div className="about-hexagons">
        <h1>Por que o Hexágono?</h1>
        <p>
          Para nós o hexágono é o símbolo representativo da sinergia que existe
          nos projetos sociais que executamos. Desenvolvemos nossos trabalhos no
          formato de <strong>rede de cooperação</strong>, desde o início nos
          propomos a <strong>estabelecer parcerias</strong>, e todos os projetos
          são planejados e executados com a atuação de{' '}
          <strong>múltiplos atores</strong>.
        </p>
        <img
          src="/images/about/hexagons.png"
          alt="Hexágonos Fortini"
          loading="lazy"
        />
      </div>
    </About>
  );
}
