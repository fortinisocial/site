import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import Image from 'next/image';
import ProjectCard from '../ProjectCard';

const Projects = styled(Section)`
  position: relative;
  background: #fcfcfc;
  height: auto;

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  .prev,
  .next {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;

    background: linear-gradient(
      rgb(7, 18, 20),
      rgb(21, 48, 57),
      rgb(32, 80, 85),
      rgb(36, 218, 220),
      rgb(36, 128, 220)
    );
  }

  @media (max-width: 1440px) {
    .list {
      scroll-snap-type: x proximity;
      overflow-x: scroll;
      overflow-y: hidden;
      justify-content: initial;
      padding: 2rem;
      gap: 20px;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        width: 0 !important;
      }
    }

    .prev,
    .next {
      display: initial;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;

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

  @media (max-width: 768px) {
    .list {
      scroll-snap-type: x mandatory;
    }
  }

  @media (max-width: 1440px) and (min-width: 768px) {
    .list {
      margin-top: -342px;
    }

    .prev,
    .next {
      top: -300px;
    }
  }
`;

export default function ProjectsSection() {
  const projectsContainerRef = useRef(null);
  const [navigation, setNavigation] = useState({
    arrowLeft: false,
    arrowRight: true,
  });

  const handlePrev = () => {
    projectsContainerRef.current.scrollBy(-340, 0);
  };

  const handleNext = () => {
    projectsContainerRef.current.scrollBy(340, 0);
  };

  const handleNavigation = useCallback(({ arrowLeft, arrowRight }) => {
    setNavigation(currentNavigation => ({
      ...currentNavigation,
      arrowLeft: arrowLeft ?? currentNavigation.arrowLeft,
      arrowRight: arrowRight ?? currentNavigation.arrowRight,
    }));
  }, []);

  return (
    <Projects id="projects-section" className="projects-section">
      <div id="projects-container" ref={projectsContainerRef} className="list">
        <ProjectCard
          onScroll={handleNavigation}
          kind="tenis"
          title="Tênis"
          students="80"
          city="Contagem"
          schools="E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. E. Conceição Hilário, E. M. Heitor Villa Lobos
, E. M. René Chateubriand Domingues"
          since="2016"
          locations="Academia Tennis Hall"
        />
        <ProjectCard
          onScroll={handleNavigation}
          kind="handball"
          title="Handebol"
          students="200"
          city="Betim, Contagem e Ibirité"
          schools="E. E. Padre Camargos, E. M. do Bairro Petrovale, E. M. Adelina Mesquita Januzzi, E. M. Valério Ferreira Palhares"
          since="2018"
          locations="E. E. Padre Camargos, E. M. Adelina Mesquita Januzzi, Ginásio Califórnia, Poliesportivo Petrovale"
        />
        <ProjectCard
          onScroll={handleNavigation}
          kind="judo"
          title="Judô"
          students="120"
          city="Contagem"
          schools="E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães"
          since="2021"
          locations="E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães"
        />
        <ProjectCard
          onScroll={handleNavigation}
          kind="taekwondo"
          title="Taekwondo"
          students="150"
          city="Betim e Contagem"
          schools="E. M. do Bairro Petrovale, E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães, E. M. Valério Ferreira Palhares"
          since="2022"
          locations="Poliesportivo Petrovale, E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães"
        />
      </div>
      {navigation.arrowLeft && (
        <span className="prev" onClick={handlePrev}>
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
        <span className="next" onClick={handleNext}>
          <Image
            src="/images/projects/chevron-right.svg"
            alt="Voltar"
            width={24}
            height={24}
            loading="lazy"
          />
        </span>
      )}
    </Projects>
  );
}
