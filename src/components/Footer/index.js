import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../Modal';

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

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    text-transform: uppercase;
    font-size: 16px;
  }

  p,
  button {
    font-size: 14px;

    a {
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Newsletter = styled.button`
  all: unset;
  background: transparent;
  border: 1px solid #24dbdd;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #111111;
  }
`;

export const Social = styled.div`
  min-width: 200px;

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

export const StyledLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #232323;
  margin-top: -1rem;
  padding-bottom: 1rem;
`;

export default function Footer() {
  const t = useTranslations('Footer');
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledFooter>
        <LogoContainer>
          <Logos>
            <img
              src="/images/fortini-logo.svg"
              alt="Fortini Investimento Social"
              width={162}
              height={50}
              loading="lazy"
            />
            <img
              src="/images/footer/gf-logo-white.png"
              alt="Gerando Falcões"
              width={102}
              height={25}
              loading="lazy"
            />
          </Logos>
          <p>
            Fortini Investimento Social ® 2016-
            {new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
              new Date(),
            )}
          </p>
        </LogoContainer>
        <Navigation>
          <Contact>
            <Social>
              <h1>{t('social.title')}</h1>
              <p>
                <a
                  href="https://www.instagram.com/fortinisocial"
                  target="_blank"
                  rel="noreferrer"
                  title={t('social.instagram')}
                >
                  @fortinisocial
                </a>
              </p>
              <Icons>
                <a
                  href="https://www.instagram.com/fortinisocial"
                  target="_blank"
                  rel="noreferrer"
                  title={t('social.instagram')}
                >
                  <img
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
                  title={t('social.facebook')}
                >
                  <img
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
                  title={t('social.linkedin')}
                >
                  <img
                    src="/images/footer/linkedin_footer.svg"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </a>
              </Icons>
            </Social>
            <div>
              <h1>{t('newsletter.title')}</h1>
              <Newsletter onClick={() => setOpenModal(true)}>
                {t('newsletter.subTitle')}
              </Newsletter>
            </div>
          </Contact>
          <Menu>
            <MenuItem>
              <h1>{t('institutional')}</h1>
              <nav role="navigation">
                <a href="#about-section">{t('menu.about')}</a>
                <a href="#ods-section">{t('menu.methodology')}</a>
                <a href="#testimonials-section">{t('menu.testimonials')}</a>
                <a href="#partners-section">{t('menu.partners')}</a>
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
              <h1>{t('contact')}</h1>
              <p>{t('phone')}</p>
              <p>contato@fortini.org.br</p>
              <p>{t('workingHours')}</p>
              <p>{t('address')}</p>
            </MenuItem>
          </Menu>
        </Navigation>
      </StyledFooter>
      <StyledLang>
        <a href="https://fortini.org.br" target="_blank" rel="noreferrer">
          🇧🇷
        </a>
      </StyledLang>
      <Modal open={openModal} onOpenChange={setOpenModal}>
        <iframe
          style={{ overflow: 'hidden' }}
          src="https://cdn.forms-content.sg-form.com/bc56aa34-92d0-11ef-9602-a24e5c97aee3"
        />
      </Modal>
    </>
  );
}
