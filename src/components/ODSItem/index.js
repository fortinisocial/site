import React from 'react';
import styled from 'styled-components';

const ODS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ods-description {
    display: flex;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: -80px;
    font-size: 14px;
    padding: 16px;
    transition: all 0.4s;
    width: max-content;

    &::after {
      content: ' ';
      position: absolute;
      top: -12px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
    }
  }

  .ods {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    border-radius: 10px;
    transition: all 0.2s;
    width: 170px;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 150px;
    }

    img {
      transition: all 0.4s;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  &:hover {
    .ods-description {
      visibility: visible;
      opacity: 1;
    }
  }

  &.n1 {
    .ods-description,
    .ods {
      background: #e5243b;
      &::after {
        border-bottom: 12px solid #e5243b;
      }
    }

    .ods-description {
      left: calc(calc(170px - 236px) / 2);
    }
  }

  &.n3 {
    .ods-description,
    .ods {
      background: #4c9f38;
      &::after {
        border-bottom: 12px solid #4c9f38;
      }
    }

    .ods-description {
      left: calc(calc(170px - 211px) / 2);
    }
  }

  &.n4 {
    .ods-description,
    .ods {
      background: #c5192d;
      &::after {
        border-bottom: 12px solid #c5192d;
      }
    }

    .ods-description {
      left: calc(calc(170px - 237px) / 2);
    }
  }

  &.n5 {
    .ods-description,
    .ods {
      background: #ff3a21;
      &::after {
        border-bottom: 12px solid #ff3a21;
      }
    }

    .ods-description {
      left: calc(calc(170px - 220px) / 2);
    }
  }

  &.n10 {
    .ods-description,
    .ods {
      background: #dd1367;
      &::after {
        border-bottom: 12px solid #dd1367;
      }
    }

    .ods-description {
      left: calc(calc(170px - 270px) / 2);
    }
  }

  &.n16 {
    .ods-description,
    .ods {
      background: #00689d;
      &::after {
        border-bottom: 12px solid #00689d;
      }
    }

    .ods-description {
      left: calc(calc(170px - 310px) / 2);
    }
  }
}
`;

const getTitleByNumber = number =>
  ({
    1: 'ODS 1 - Erradicação da Pobreza',
    3: 'ODS 3 - Saúde e Bem-Estar',
    4: 'ODS 4 - Educação de Qualidade',
    5: 'ODS 5 - Igualdade de Gênero',
    10: 'ODS 10 - Redução das Desigualdades',
    16: 'ODS 16 - Paz, Justiça e Instituições Eficazes',
  }[number]);

export default function ODSItem({ number }) {
  return (
    <ODS className={`n${number}`}>
      <div className="ods" data-text={getTitleByNumber(number)}>
        <img
          src={`/images/ods/ODS-${number}.svg`}
          alt={getTitleByNumber(number)}
          height={130}
          loading="lazy"
        />
      </div>
    </ODS>
  );
}
