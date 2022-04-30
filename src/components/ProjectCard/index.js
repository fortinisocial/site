import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  height: 600px;
  border-radius: 30px;
  color: #232323;
  font-size: 14px;
  box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.1);
  margin-top: -300px;
  flex-shrink: 0;

  .description {
    padding: 0 32px;

    h1 {
      text-transform: uppercase;
      font-size: 18px;
    }
  }

  .info {
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
      margin-right: 4px;
    }

    &:first-child {
      margin-top: 24px;
    }
    &:last-child {
      margin-bottom: 32px;
    }

    img {
      margin-right: 6px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    scroll-snap-align: center;
  }
`;

const CardHeader = styled.header`
  background: #d5d5d5;
  border-radius: 30px 30px 0 0;
  height: 340px;

  &.tenis {
    background: url('/images/projects/tenis.jpg');
  }

  &.handball {
    background: url('/images/projects/handball.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.judo {
    background: url('/images/projects/judo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.taekwondo {
    background: url('/images/projects/taekwondo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CardFooter = styled.footer`
  display: flex;
  height: 64px;
  border-top: 1px solid #f5f5f5;
  border-radius: 0 0 30px 30px;

  a {
    font-size: 16px;
    color: #24dadc;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;

    &:hover {
      background: #fcfcfc;
    }
  }
`;

export default function ProjectCard({
  kind,
  title,
  description,
  students,
  city,
  schools,
  since,
}) {
  return (
    <Card>
      <CardHeader className={kind} />
      <article className="description">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="info">
          <img
            src="/images/projects/students.svg"
            alt="Mãos segurando coração"
            width={32}
            height={22}
            loading="lazy"
          />
          <span>Número de participantes: </span>
          {students}
        </p>
        <p className="info">
          <img
            src="/images/projects/hands-heart.svg"
            alt="Mãos segurando coração"
            width={18}
            height={14}
            loading="lazy"
          />
          <span>Município: </span>
          {city}
        </p>
        <p className="info">
          <img
            src="/images/projects/hands-heart.svg"
            alt="Mãos segurando coração"
            width={18}
            height={14}
            loading="lazy"
          />
          <span>Escolas Parceiras: </span>
          {schools}
        </p>
        <p className="info">
          <img
            src="/images/projects/hands-heart.svg"
            alt="Mãos segurando coração"
            width={18}
            height={14}
            loading="lazy"
          />
          <span>Em execução desde: </span>
          {since}
        </p>
      </article>
    </Card>
  );
}
