import React from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';

const Depositions = styled(Section)`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #174f86;
    font-size: 2rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: #6a6363;
    margin: 0 0 48px 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.85rem;
    }
  }

  img {
    mask: url('/images/depositions/avatar-mask.svg');
  }

  article {
    text-align: center;
    font-style: italic;
    font-weight: 600;
    max-width: 600px;
    line-height: 1.8;

    .author {
      margin: 10px;
      font-style: normal;
      font-size: 18px;

      &::before {
        content: '- ';
      }
    }

    .author-info {
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      color: #2480dc;
    }
  }
`;

export default function DepositionsSection() {
  return (
    <Depositions className="depositions-section">
      <h1>O que dizem por aí...</h1>
      <h2>
        Quer saber o que dizem da gente? Se liga nos depoimentos dos nossos
        amigos e parceiros:
      </h2>
      <img
        src="/images/depositions/maiara.jpg"
        alt="Maiara Wenceslau"
        width={175}
        height={175}
        loading="lazy"
      />
      <article>
        &quot;A Fortini proporciona acesso à esportes considerados nobres e que
        não estariam ao alcance dos estudantes de baixa renda se não existisse o
        projeto. As atividades desenvolvem a auto estima das crianças
        influenciando no crescimento de sua aprendizagem.&quot;
        <p className="author">Janis Costa</p>
        <p className="author-info">
          Agente Comunitária no munícipio de Contagem e professora na E. E.
          Carlos Drummond de Andrade
        </p>
      </article>
    </Depositions>
  );
}
