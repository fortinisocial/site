import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';

const About = styled(Section)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: auto;

  h1 {
    color: #24d6db;
    font-size: 2rem;
    text-transform: uppercase;
  }

  h2 {
    color: #24d6db;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    text-align: left;
    font-weight: 500;
    line-height: 1.75rem;

    strong {
      font-weight: 700;
    }
  }

  .about-hexagons {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;

    img {
      margin-top: 4rem;
      align-self: center;
    }

    @media (max-width: 1024px) {
      margin-top: 0;

      img {
        width: 100%;
        max-width: 727px;
      }
    }
  }
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    img {
      width: 286px;
      height: 335px;
    }
  }
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Institutional = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 240px;
  z-index: 0;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    margin-bottom: 0;
    align-items: center;
  }

  p {
    color: white;
    text-align: center;
  }

  .about-vision,
  .about-values {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.75rem;
    width: 360px;
    height: 410px;
  }

  .about-vision {
    position: relative;
    background-image: url('/images/about/hexagon-01.svg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
  }

  .about-values {
    position: absolute;
    background-image: url('/images/about/hexagon-02.svg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    left: -30px;
    bottom: -260px;

    h2 {
      position: absolute;
      transform: rotate(-90deg);
      left: 0;
      color: white;
    }

    ul {
      list-style-type: square;
      padding-left: 5rem;
      color: white;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 4rem;

    .about-vision,
    .about-values {
      width: 343px;
      height: 390px;
      margin: 0 -1rem;
    }

    .about-values {
      position: relative;
      left: 0;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export default function AboutSection() {
  const t = useTranslations('About');

  return (
    <About id="about-section" className="about-section">
      <Columns>
        <FirstColumn>
          <picture>
            <source
              type="image/webp"
              srcSet="/images/about/maiara-wenceslau-fortini.webp"
            />
            <source
              type="image/jpeg"
              srcSet="/images/about/maiara-wenceslau-fortini.png"
            />
            <img
              src="/images/about/maiara-wenceslau-fortini.png"
              loading="lazy"
              width={381}
              height={447}
            />
          </picture>
        </FirstColumn>
        <SecondColumn>
          <div className="about-intro">
            <h1>{t('title')}</h1>
            {t.rich('content', {
              p: chunks => <p>{chunks}</p>,
              b: chunks => <b>{chunks}</b>,
            })}
          </div>
          <Institutional>
            <div className="about-vision">
              <h2>{t('Vision.title')}</h2>
              {t.rich('Vision.content', {
                p: chunks => <p>{chunks}</p>,
                b: chunks => <b>{chunks}</b>,
              })}
            </div>
            <div className="about-values">
              <h2>{t('Values.title')}</h2>
              <ul>
                {t.rich('Values.content', {
                  li: chunks => <li>{chunks}</li>,
                })}
              </ul>
            </div>
          </Institutional>
        </SecondColumn>
      </Columns>
      <div className="about-hexagons">
        <h1>{t('Hexagon.title')}</h1>
        {t.rich('Hexagon.content', {
          p: chunks => <p>{chunks}</p>,
          b: chunks => <b>{chunks}</b>,
        })}
        <img
          src="/images/about/hexagons.png"
          alt="Hexágonos Fortini"
          loading="lazy"
        />
      </div>
    </About>
  );
}
