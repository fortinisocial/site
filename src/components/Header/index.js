import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from './MenuButton';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 24px;
  background-image: linear-gradient(rgb(36, 128, 220), rgb(36, 218, 220)),
    url('/images/header/background-01.jpg');
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  min-height: 620px;
  z-index: 1;

  &.donation {
    background-image: linear-gradient(rgb(36, 128, 220), rgb(36, 218, 220)),
      url('/images/header/background-02.jpg');
    background-position: center;
  }

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

  &.fixed {
    margin: 0 60px 0 0;

    a {
      color: #232323;
      font-weight: 600;

      &:hover {
        color: #22c8cd;
      }

      :not(.donation) {
        &:last-of-type {
          color: #22c8cd;
          border: 2px solid #22c8cd;

          &:hover {
            color: #232323;
            border: 2px solid #232323;
          }
        }
      }
    }
  }

  :not(.donation) {
    a {
      &:last-of-type {
        padding: 5px 10px;
        color: #2dfaff;
        border-radius: 9999px;
        border: 2px solid #2dfaff;
        min-width: 120px;

        &:hover {
          color: #ffffff;
          border: 2px solid #ffffff;
        }
      }
    }
  }

  a {
    font-family: 'Nunito', sans-serif;
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

    img {
      width: 9px;
      margin-left: 5px;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  gap: 20px;

  a {
    font-family: 'Nunito', sans-serif;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 0.2s;

    &:hover {
      color: #2dfaff;

      &:last-of-type {
        color: #ffffff;
        border: 2px solid #ffffff;
      }
    }

    &:last-of-type {
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
`;

const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;

  &.fixed {
    position: fixed;
    background: #fff;
    width: 100vw;
    height: 100vh;
    margin: 0 -24px;

    a,
    span {
      color: #24d6db;

      &:hover {
        color: #6a6363;
      }
    }
  }

  a,
  span {
    display: inline-flex;
    align-items: center;
    font-family: 'Nunito', sans-serif;

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

    a,
    span {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

const Message = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-family: 'Nunito', serif;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  padding: 0 24px;

  @media (max-width: 1024px) {
    margin-top: 100px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    filter: drop-shadow(4px 8px 8px hsl(0deg 0% 0% / 0.38));

    @media (max-width: 1024px) {
      font-size: 2.5rem;

      &.donation {
        font-size: 3.5rem;
      }
    }

    @media (max-width: 800px) {
      font-size: 2rem;

      &.donation {
        font-size: 3.5rem;
      }
    }

    @media (max-width: 414px) {
      font-size: 1.6rem;

      &.donation {
        font-size: 3.5rem;
      }
    }

    @media (min-width: 1600px) {
      margin-top: 3rem;
      font-size: 5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 2;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.2rem;
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

const FixedMenu = styled.nav`
  display: none;
  visibility: hidden;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  background: #fff;
  border: 1px solid #ebedf3;
  opacity: 0;
  transition: all 0.2s;

  width: 100%;
  height: 90px;
  margin: 0 -30px;
  padding: 1rem 2.85rem;
  top: -90px;

  @media (min-width: 1200px) {
    &.visible {
      display: flex;
      visibility: visible;
      opacity: 0.9;
      top: 0;
    }
  }
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FixedMobileMenu = styled.div`
  visibility: hidden;
  position: fixed;
  right: -56px;
  z-index: 10;

  width: 56px;
  height: 56px;

  border-radius: 50%;
  background: #fff;
  opacity: 0;
  transition: all 0.4s;
  box-shadow: 4px 4px 20px hsl(0deg 0% 32% / 0.5);

  @media (max-width: 768px) {
    &.visible {
      visibility: visible;
      opacity: 0.9;
      bottom: 16px;
      right: 16px;
    }
  }
`;

export default function Header({ donation = false }) {
  const [openedMobile, setOpenedMobile] = useState(false);
  const [showFixedMenu, setShowFixedMenu] = useState(false);
  const headerMenuRef = useRef(null);

  useEffect(() => {
    function handleObserver(observer) {
      const [observerEntry] = observer;
      setShowFixedMenu(!observerEntry.isIntersecting);
    }

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '400px',
      threshold: 1.0,
    });

    if (headerMenuRef.current) {
      observer.observe(headerMenuRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function handleMobileMenuClick() {
    if (showFixedMenu) {
      setOpenedMobile(false);
    }
  }

  return (
    <StyledHeader
      ref={headerMenuRef}
      className={donation ? 'header-section donation' : 'header-section'}
    >
      <FixedMobileMenu className={showFixedMenu ? 'visible' : ''}>
        <MenuButton
          opened={openedMobile}
          onClick={() => setOpenedMobile(prevState => !prevState)}
          size="xs"
        />
      </FixedMobileMenu>
      <FixedMenu className={showFixedMenu ? 'visible' : ''}>
        <Logos>
          <Image
            src="/images/fortini-logo.svg"
            alt="Fortini Investimento Social"
            width={137.7}
            height={42.5}
          />
          <Image
            src="/images/header/gerando-falcoes-logo.svg"
            alt="Gerando Falcões"
            width={86.7}
            height={21.25}
          />
        </Logos>
        <Menu className={donation ? 'menu fixed donation' : 'menu fixed'}>
          <Link href="/#about-section" title="Sobre">
            Sobre
          </Link>
          <Link href="/#ods-section" title="Metodologia">
            Metodologia
          </Link>
          <Link href="/#depositions-section" title="Depoimentos">
            Depoimentos
          </Link>
          <Link href="/#partners-section" title="Parceiros">
            Parceiros
          </Link>
          {/* <a href="/contato" title="Contato">
            Contato
          </a> */}
          {!donation && (
            <Link href="/doe" title="Doe agora">
              Doe agora
            </Link>
          )}
        </Menu>
      </FixedMenu>
      <Top className="top">
        <Logo className="logo">
          <img
            className="fortini-logo"
            src="/images/fortini-logo.svg"
            alt="Fortini Investimento Social"
          />
          <Divider className="divider" />
          <img
            className="gf-logo"
            src="/images/header/gerando-falcoes-logo.svg"
            alt="Gerando Falcões"
          />
        </Logo>
        <Menu className={donation ? 'menu donation' : 'menu'}>
          <Link href="/#about-section" title="Sobre">
            Sobre
          </Link>
          <Link href="/#ods-section" title="Metodologia">
            Metodologia
          </Link>
          <Link href="/#depositions-section" title="Depoimentos">
            Depoimentos
          </Link>
          <Link href="/#partners-section" title="Parceiros">
            Parceiros
          </Link>
          {/* <a href="/contato" title="Contato">
            Contato
          </a> */}
          {!donation && (
            <Link href="/doe" title="Doe agora">
              Doe agora
            </Link>
          )}
        </Menu>
      </Top>

      <MobileActions className="mobile-actions">
        <MenuButton
          opened={openedMobile}
          onClick={() => setOpenedMobile(prevState => !prevState)}
        />
        {!donation && (
          <Link href="/doe" title="Doe agora">
            Doe agora
          </Link>
        )}
      </MobileActions>

      {openedMobile ? (
        <MobileMenu className={showFixedMenu ? 'fixed' : ''}>
          <Link href="/#about-section" title="Sobre">
            <span onClick={handleMobileMenuClick}>Sobre</span>
          </Link>
          <Link href="/#ods-section" title="Metodologia">
            <span onClick={handleMobileMenuClick}>Metodologia</span>
          </Link>
          <Link href="/#depositions-section" title="Depoimentos">
            <span onClick={handleMobileMenuClick}>Depoimentos</span>
          </Link>
          <Link href="/#partners-section" title="Parceiros">
            <span onClick={handleMobileMenuClick}>Parceiros</span>
          </Link>
          {/* <a href="/contato" title="Contato">
            Contato
          </a> */}
        </MobileMenu>
      ) : (
        <Message className="message">
          {donation ? (
            <h1 className="donation">Ajude a transformar vidas</h1>
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
