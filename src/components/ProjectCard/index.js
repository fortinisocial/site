import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 340px;
  height: 680px;
  border-radius: 30px;
  color: #232323;
  font-size: 14px;
  box-shadow: 8px 16px 16px hsl(0deg 0% 62% / 0.25);
  margin-top: -310px;
  flex-shrink: 0;

  .description {
    padding: 0 24px 24px;

    h1 {
      text-transform: uppercase;
      font-size: 18px;
    }
  }

  .info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    span {
      flex-shrink: 0;
      font-weight: 700;
      margin-right: 4px;
    }

    &:first-of-type {
      margin-top: 24px;
    }

    img {
      margin-right: 6px;
    }
  }

  ul {
    list-style-type: square;
    margin: 0;
    margin-top: -12px;

    li {
      line-height: 1.6;

      span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        max-width: 236px;
        vertical-align: bottom;
      }
    }
  }

  @media (max-width: 1366px) {
    margin-top: 0;
    scroll-snap-align: start;
  }

  @media (max-width: 768px) {
    scroll-snap-align: center;
  }
`;

const CardHeader = styled.header`
  background: #d5d5d5;
  border-radius: 30px 30px 0 0;
  height: 249px;
  flex-shrink: 0;

  &.tenis {
    background: url('/images/projects/tenis.jpg');
  }

  &.handball {
    background: url('/images/projects/handball.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
  }

  &.judo {
    background: url('/images/projects/judo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -78px;
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
  students,
  city,
  schools,
  since,
  locations,
}) {
  return (
    <Card>
      <CardHeader className={kind} />
      <article className="description">
        <h1>{title}</h1>
        <p className="info">
          <img
            src="/images/projects/student.svg"
            alt="Mãos segurando coração"
            width={20}
            height={23}
            loading="lazy"
          />
          <span>Número de participantes: </span>
          {students}
        </p>
        <p className="info">
          <img
            src="/images/projects/city.svg"
            alt="Mãos segurando coração"
            width={20}
            height={20}
            loading="lazy"
          />
          <span>Município: </span>
          {city}
        </p>
        <p className="info">
          <img
            src="/images/projects/calendar.svg"
            alt="Mãos segurando coração"
            width={20}
            height={20}
            loading="lazy"
          />
          <span>Em execução desde: </span>
          {since}
        </p>
        <p className="info">
          <img
            src="/images/projects/openbook.svg"
            alt="Mãos segurando coração"
            width={20}
            height={19}
            loading="lazy"
          />
          <span>Escolas Parceiras: </span>
        </p>
        <ul>
          {schools.split(',').map(school => (
            <li key={school} title={school}>
              <span>{school}</span>
            </li>
          ))}
        </ul>
        <p className="info">
          <img
            src="/images/projects/location.svg"
            alt="Mãos segurando coração"
            width={20}
            height={20}
            loading="lazy"
          />
          <span>Local de execução: </span>
        </p>
        <ul>
          {locations.split(',').map(location => (
            <li key={location} title={location}>
              <span>{location}</span>
            </li>
          ))}
        </ul>
      </article>
    </Card>
  );
}
