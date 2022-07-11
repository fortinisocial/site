import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;

  svg {
    transform: scale(0.75);
  }

  &.xs {
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;

    svg {
      transform: initial;
    }
  }
`;

const PathLine = styled.path`
  fill: none;
  stroke: #22c8cd;
  stroke-width: 3;
  transition: stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export default function MenuButton({ opened, onClick, size }) {
  return (
    <Button onClick={onClick} className={size}>
      <svg
        width={size ? '42' : '100'}
        height={size ? '42' : '100'}
        viewBox="0 0 100 100"
      >
        <PathLine
          className="pathline-menu"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          strokeDasharray={opened ? '90 207' : '60 207'}
          strokeWidth="3"
          strokeDashoffset={opened ? '-134' : 'initial'}
        />
        <PathLine
          className="pathline-menu"
          d="M 20,50 H 80"
          strokeDasharray={opened ? '1 60' : '60 60'}
          strokeDashoffset={opened ? '-30' : 'initial'}
        />
        <PathLine
          className="pathline-menu"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          strokeDasharray={opened ? '90 207' : '60 207'}
          strokeDashoffset={opened ? '-134' : 'initial'}
        />
      </svg>
    </Button>
  );
}
