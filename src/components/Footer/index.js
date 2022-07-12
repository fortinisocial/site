import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  max-width: 1920px;
  font-family: 'Nunito', sans-serif;
  padding: 62px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #232323;
  color: #ffffff;
  min-height: 430px;
  height: auto;
  gap: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  flex-basis: 25%;

  p {
    font-size: 12px;
    padding: 0 5px;
    color: #a3a3a3;
  }

  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Navigation = styled.div`
  flex-basis: 75%;
  display: flex;
  gap: 50px;
  width: 100%;

  @media (max-width: 800px) {
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Social = styled.div`
  min-width: 200px;

  h1 {
    text-transform: uppercase;
    font-size: 16px;
  }

  p {
    font-size: 14px;

    a {
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 800px) {
    min-width: auto;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
  }

  nav {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    a {
      transition: all 0.2s;
      padding: 5px 0;

      &:hover {
        color: #a3a3a3;
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <LogoContainer>
        <Logos>
          <Image
            src="/images/fortini-logo.svg"
            alt="Fortini Investimento Social"
            width={162}
            height={50}
          />
          <Image
            src="/images/footer/gf-logo-white.png"
            alt="Gerando Falcões"
            width={102}
            height={25}
          />
        </Logos>
        <p>Fortini Investimento Social ® 2016-2022</p>
      </LogoContainer>
      <Navigation>
        <Social>
          <h1>Redes sociais</h1>
          <p>
            <a
              href="https://www.instagram.com/fortinisocial"
              target="_blank"
              rel="noreferrer"
              title="Instagram da Fortini"
            >
              @fortinisocial
            </a>
          </p>
          <Icons>
            <a
              href="https://www.instagram.com/fortinisocial"
              target="_blank"
              rel="noreferrer"
              title="Instagram da Fortini"
            >
              <Image
                src="/images/footer/insta_footer.svg"
                alt="Instagram"
                width={30}
                height={30}
                loading="lazy"
              />
            </a>
            <a
              href="https://www.facebook.com/fortinisocial"
              target="_blank"
              rel="noreferrer"
              title="Facebook da Fortini"
            >
              <Image
                src="/images/footer/fb_footer.svg"
                alt="Facebook"
                width={17}
                height={30}
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/fortini-investimento-social"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn da Fortini"
            >
              <Image
                src="/images/footer/linkedin_footer.svg"
                alt="LinkedIn"
                width={30}
                height={30}
                loading="lazy"
              />
            </a>
          </Icons>
        </Social>
        <Menu>
          <MenuItem>
            <h1>Institucional</h1>
            <nav role="navigation">
              <a href="#about-section">Sobre</a>
              <a href="#ods-section">Metodologia</a>
              <a href="#testimonials-section">Depoimentos</a>
              <a href="#partners-section">Parceiros</a>
              {/* <a href="/contato">Contato</a> */}
            </nav>
          </MenuItem>
          {/* <MenuItem>
            <h1>Projetos sociais</h1>
            <nav role="navigation">
              <a href="/projeto-social/tenis">Tênis</a>
              <a href="/projeto-social/handebol">Handebol</a>
              <a href="/projeto-social/judo">Judô</a>
              <a href="/projeto-social/taekwondo">Taekwondo</a>
            </nav>
          </MenuItem> */}
          <MenuItem>
            <h1>Contato</h1>
            <p>(31) 99265-7329</p>
            <p>contato@fortini.org.br</p>
            <p>Segunda a sexta, das 08h às 17h</p>
            <p>
              Av. Rio Negro, 580 - Riacho das Pedras, Contagem - MG, 32280-000
            </p>
          </MenuItem>
        </Menu>
      </Navigation>
    </StyledFooter>
  );
}
