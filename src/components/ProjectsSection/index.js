import React from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';

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

  @media (max-width: 768px) {
    padding: 2rem 0;

    background: linear-gradient(
      rgb(7, 18, 20),
      rgb(21, 48, 57),
      rgb(32, 80, 85),
      rgb(36, 218, 220),
      rgb(36, 128, 220)
    );

    .list {
      scroll-snap-type: x mandatory;
      overflow-x: scroll;
      overflow-y: hidden;
      justify-content: initial;
      padding: 0 2rem;
      gap: 24px;
    }
  }
`;

export default function ProjectsSection({ children }) {
  return (
    <Projects className="projects-section">
      <div className="list">{children}</div>
    </Projects>
  );
}
