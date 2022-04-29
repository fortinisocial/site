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
    background: linear-gradient(
      rgb(7, 18, 20),
      rgb(21, 48, 57),
      rgb(32, 80, 85),
      rgb(36, 218, 220),
      rgb(36, 128, 220)
    );

    .list {
      flex-direction: column;
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
