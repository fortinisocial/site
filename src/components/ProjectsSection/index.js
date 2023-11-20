import { useTranslations } from 'next-intl';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import ProjectCard from './ProjectCard';

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
      border: 1px solid #e5e5e5;
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
  const t = useTranslations('Projects.names');
  const projectsContainerRef = useRef(null);
  const [navigation, setNavigation] = useState({
    arrowLeft: false,
    arrowRight: true,
  });

  const projects = [
    {
      kind: 'jiu-jitsu',
      title: t('jiu-jitsu'),
      students: '120',
      city: 'Contagem e Ibirité',
      schools:
        'E. M. Heitor Villa Lobos, E. E. Ruy Pimenta, E. M. Deputado Jorge Ferraz, E. M. Maria Martins de Moraes, E. E. José Rodrigues Betim',
      since: '2023',
      locations:
        'E. M. Heitor Villa Lobos, E. E. Ruy Pimenta, E. M. Deputado Jorge Ferraz, E. M. Maria Martins de Moraes, E. E. José Rodrigues Betim',
    },
    {
      kind: 'beach-tennis',
      title: t('beach-tennis'),
      students: '50',
      city: 'Contagem',
      schools: 'E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães',
      since: '2022',
      locations: 'Doze Rackethouse',
    },
    {
      kind: 'tennis',
      title: t('tennis'),
      students: '50',
      city: 'Contagem',
      schools:
        'E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. E. Conceição Hilário, E. M. Heitor Villa Lobos, E. M. René Chateubriand Domingues',
      since: '2016',
      locations: 'Academia Tennis Hall',
    },
    {
      kind: 'handball',
      title: t('handball'),
      students: '225',
      city: 'Betim e Contagem',
      schools:
        'E. E. Padre Camargos, E. M. do Bairro Petrovale, E. M. Adelina Mesquita Januzzi, E. M. Valério Ferreira Palhares',
      since: '2018',
      locations:
        'E. E. Padre Camargos, E. M. Adelina Mesquita Januzzi, Ginásio Califórnia, Poliesportivo Petrovale',
    },
    {
      kind: 'judo',
      title: t('judo'),
      students: '120',
      city: 'Contagem',
      schools:
        'E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães',
      since: '2021',
      locations:
        'E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães',
    },
    {
      kind: 'taekwondo',
      title: t('taekwondo'),
      students: '120',
      city: 'Betim e Contagem',
      schools:
        'E. M. do Bairro Petrovale, E. M. Heitor Villa Lobos, E. M. Valério Ferreira Palhares',
      since: '2022',
      locations:
        'Poliesportivo Petrovale, E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães',
    },
  ];

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
        {projects
          .sort((a, b) => Number(a.since) - Number(b.since))
          .map(project => (
            <ProjectCard
              key={project.kind}
              onScroll={handleNavigation}
              {...project}
            />
          ))}
      </div>
      {navigation.arrowLeft && (
        <span className="prev" onClick={handlePrev}>
          <img
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
          <img
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
