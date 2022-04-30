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

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.div`
  flex-basis: 25%;

  p {
    font-size: 12px;
    padding: 0 5px;
    color: #a3a3a3;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const Navigation = styled.div`
  flex-basis: 75%;
  display: flex;
  gap: 50px;
  width: 100%;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
      <Logo>
        <Image
          src="/images/fortini-logo.svg"
          alt="Fortini Investimento Social"
          width={162}
          height={50}
        />
        <p>Fortini 2021. Todos os direitos reservados.</p>
      </Logo>
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
              <a href="/institucional">Sobre a Fortini</a>
              <a href="/time">Nosso time</a>
              <a href="/contribua">Contribua</a>
              <a href="/faq">Perguntas frequentes</a>
              <a href="/faq">Blog</a>
            </nav>
          </MenuItem>
          <MenuItem>
            <h1>Projetos</h1>
            <nav role="navigation">
              <a href="/projetos/tenis">Tênis</a>
              <a href="/projetos/handebol">Handebol</a>
              <a href="/projetos/judo">Judô</a>
              <a href="/projetos/taekwondo">Taekwondo</a>
            </nav>
          </MenuItem>
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