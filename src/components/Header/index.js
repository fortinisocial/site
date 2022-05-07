import React, { useState } from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 24px;
  background-image: linear-gradient(rgb(36, 128, 220), rgb(36, 218, 220)),
    url('/images/header/background-${props =>
      props.donation ? '02' : '01'}.jpg');
  background-position: ${props => (props.donation ? `center` : `initial`)};
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  min-height: 620px;
  z-index: 1;

  @media (min-width: 1024px) {
    gap: 3rem;
    padding: 0 30px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 3rem;
  }
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 358px;
  height: 245px;

  &:before {
    position: absolute;
    content: '';
    width: 358px;
    height: 318px;
    background-image: url('/images/header/hexagon.svg');
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: -60px;
    transform: rotate(-102deg);
    z-index: -1;
  }

  img {
    &.fortini-logo {
      width: 180px;
      height: 55px;
    }

    &.gf-logo {
      width: 120px;
      height: 30px;
    }
  }

  @media (max-width: 1024px) {
    width: 266px;
    height: 200px;

    img {
      &.fortini-logo {
        width: 160px;
        height: 49px;
      }

      &.gf-logo {
        width: 104px;
        height: 26px;
      }
    }

    &:before {
      width: 305px;
      height: 260px;
      background-image: url('/images/header/hexagon-mobile.svg');
    }
  }
`;

const Divider = styled.div`
  width: 200px;
  border-bottom: 1px solid #e3e3e3;
  margin: 20px 0;

  @media (max-width: 1024px) {
      width: 180px;
    }
  }
`;

const Menu = styled.nav`
  display: inline-flex;
  align-items: center;
  height: 32px;
  margin: 60px 60px 0 0;
  gap: 20px;

  a {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 0.2s;

    &:hover {
      color: #2dfaff;

      &.donate {
        color: #ffffff;
        border: 2px solid #ffffff;
      }
    }

    &.donate {
      padding: 5px 10px;
      color: #2dfaff;
      border-radius: 9999px;
      border: 2px solid #2dfaff;
      min-width: 120px;
    }

    img {
      width: 9px;
      margin-left: 5px;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;

  svg {
    transform: scale(0.75);
  }
`;

const MobileActions = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  gap: 20px;

  a {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 0.2s;

    &:hover {
      color: #2dfaff;

      &.donate {
        color: #ffffff;
        border: 2px solid #ffffff;
      }
    }

    &.donate {
      padding: 5px 10px;
      color: #2dfaff;
      border-radius: 9999px;
      border: 2px solid #2dfaff;
      min-width: 120px;

      @media (max-width: 1024px) {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }

  img {
    cursor: pointer;
  }

  @media (min-width: 1366px) {
    display: none;
  }
`;

const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;

  a {
    display: inline-flex;
    align-items: center;

    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 0.2s;

    &:hover {
      color: #2dfaff;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 3rem;
    gap: 2rem;
    justify-content: center;

    a {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  h1 {
    font-family: 'Nunito', sans-serif;
    font-size: 3rem;
    font-weight: 500;
    filter: drop-shadow(1px 2px 4px hsl(220deg 10% 20%));

    @media (max-width: 1024px) {
      margin-top: 8rem;
      font-size: 2.5rem;
    }

    @media (max-width: 800px) {
      margin-top: 2rem;
      font-size: 2rem;
    }

    @media (max-width: 414px) {
      margin-top: 2rem;
      font-size: 1.6rem;
    }

    @media (min-width: 1600px) {
      margin-top: 3rem;
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.6rem;
    max-width: 70%;
    line-height: 2;
    font-family: 'Lora', serif;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.4rem;
      max-width: 95%;
    }

    @media (max-width: 414px) {
      font-size: 1rem;
      max-width: 100%;
    }

    @media (min-width: 1600px) {
      max-width: 1200px;
      font-size: 2rem;
    }
  }

  strong {
    font-weight: 500;
  }
`;

const PathLine = styled.path`
  fill: none;
  stroke: white;
  stroke-width: 3;
  transition: stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export default function Header({ donation = false }) {
  const [opened, setOpened] = useState(false);

  return (
    <StyledHeader donation={donation}>
      <Top>
        <Logo>
          <img
            className="fortini-logo"
            src="/images/fortini-logo.svg"
            alt="Fortini Investimento Social"
          />
          <Divider />
          <img
            className="gf-logo"
            src="/images/header/gerando-falcoes-logo.svg"
            alt="Gerando Falcões"
          />
        </Logo>
        <Menu>
          <a href="/#about-section" title="Sobre">
            Sobre{' '}
          </a>
          <a href="/#ods-section" title="Metodologia">
            Metodologia{' '}
          </a>
          <a href="/#depositions-section" title="Depoimentos">
            Depoimentos
          </a>
          <a href="/#partners-section" title="Parceiros">
            Parceiros
          </a>
          {/* <a href="/contato" title="Contato">
            Contato
          </a> */}
          <a href="/doe" title="Doe agora" className="donate">
            Doe agora
          </a>
        </Menu>
      </Top>

      <MobileActions>
        <MenuButton onClick={() => setOpened(prevState => !prevState)}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <PathLine
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              strokeDasharray={opened ? '90 207' : '60 207'}
              strokeWidth="3"
              strokeDashoffset={opened ? '-134' : 'initial'}
            />
            <PathLine
              d="M 20,50 H 80"
              strokeDasharray={opened ? '1 60' : '60 60'}
              strokeDashoffset={opened ? '-30' : 'initial'}
            />
            <PathLine
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              strokeDasharray={opened ? '90 207' : '60 207'}
              strokeDashoffset={opened ? '-134' : 'initial'}
            />
          </svg>
        </MenuButton>
        <a href="/doe" title="Institucional" className="donate">
          Doe agora
        </a>
      </MobileActions>

      {opened ? (
        <MobileMenu>
          <a href="/#about-section" title="Sobre">
            Sobre{' '}
          </a>
          <a href="/#ods-section" title="Metodologia">
            Metodologia{' '}
          </a>
          <a href="/#depositions-section" title="Depoimentos">
            Depoimentos
          </a>
          <a href="/#partners-section" title="Parceiros">
            Parceiros
          </a>
          {/* <a href="/contato" title="Contato">
            Contato
          </a> */}
        </MobileMenu>
      ) : (
        <Message>
          {donation ? (
            <h1>Ajude a transformar vidas</h1>
          ) : (
            <>
              <h1>&quot;Sonho que se sonha junto é realidade&quot;</h1>
              <p>
                Somos a <strong>Fortini</strong>, uma{' '}
                <strong>
                  organização da sociedade civil sem fins lucrativos
                </strong>{' '}
                que promove o acesso à <strong>educação integral</strong>, ao{' '}
                <strong>esporte</strong> e a <strong>cultura</strong> para{' '}
                <strong>estudantes de escolas públicas</strong> da{' '}
                <strong>Região Metropolitana de Belo Horizonte</strong>.
              </p>
            </>
          )}
        </Message>
      )}
    </StyledHeader>
  );
}
