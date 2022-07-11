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
    font-size: 1.2rem;
    text-align: left;
    font-weight: 500;
    line-height: 1.75rem;

    strong {
      font-weight: 700;
    }
  }

  .about-hexagons {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;

    img {
      margin-top: 4rem;
      align-self: center;
    }

    @media (max-width: 1024px) {
      margin-top: 0;

      img {
        width: 100%;
        max-width: 727px;
      }
    }
  }
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    img {
      width: 286px;
      height: 335px;
    }
  }
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Institutional = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 240px;
  z-index: 0;

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
      padding-left: 5rem;
      color: white;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 4rem;

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

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export default function AboutSection() {
  return (
    <About id="about-section" className="about-section">
      <Columns>
        <FirstColumn>
          <img
            src="/images/about/maiara-wenceslau-fortini.png"
            alt="Maiara Wenceslau"
            loading="lazy"
            width={381}
            height={447}
          />
        </FirstColumn>
        <SecondColumn>
          <div className="about-intro">
            <h1>Sobre a Fortini</h1>
            <p>
              Proporcionamos uma educação transformadora para crianças e
              adolescentes estudantes da rede pública de ensino na Região
              Metropolitana de Belo Horizonte.
            </p>
            <p>
              Reconhecemos o papel primordial que a escola tem na constituição
              dos cidadãos de amanhã. Por isso, as escolas públicas são as
              nossas primeiras parceiras, na promoção do acesso ao{' '}
              <strong>esporte e à cultura</strong> de forma sistematizada para
              seus estudantes. Simultaneamente, promovemos atividades de{' '}
              <strong>desenvolvimento socioemocional</strong> aos alunos{' '}
              <strong>
                e acompanhamento socioassistencial aos seus familiares
              </strong>
              . Acreditamos na atuação de forma multidisciplinar, para que cada
              criança ou adolescente atendido pela Fortini possa desempenhar o
              seu pleno potencial.
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
                <li>Amor e cuidado</li>
                <li>Transparência</li>
                <li>Ganha-ganha-ganha</li>
                <li>Comprometimento e excelência</li>
              </ul>
            </div>
          </Institutional>
        </SecondColumn>
      </Columns>
      <div className="about-hexagons">
        <h1>Por que o Hexágono?</h1>
        <p>
          Para nós, o hexágono é o símbolo representativo da centralidade da{' '}
          <strong>atuação em rede</strong>, no nosso método de trabalho. Desde o
          início, planejamos as nossas ações{' '}
          <strong>estabelecendo parcerias</strong>; todos os projetos são
          planejados e executados com a atuação de{' '}
          <strong>múltiplos atores</strong>. A Fortini existe como uma{' '}
          <strong>catalizadora</strong> do potencial de ação de todos os atores
          que nos cercam, em um trabalho conjunto, complementar e
          multiplicador..
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
