import { useTranslations } from 'next-intl';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section } from '../Layout';
import Testimonial from './Testimonial';

const Testimonials = styled(Section)`
  position: relative;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  z-index: 0;

  h1 {
    color: #174f86;
    font-size: 2rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #6a6363;
    margin: 0 0 48px 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.85rem;
    }
  }

  .testimonials-container {
    position: relative;
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 20px;
    padding: 0.2rem;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    width: 100%;

    @media (min-width: 1440px) {
      max-width: 800px;
    }

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  .arrow {
    position: absolute;
    background: none;
    width: 100%;
    height: 40px;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 0;

    @media (min-width: 1024px) {
      max-width: 900px;
    }

    &.prev,
    &.next {
      display: initial;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 12;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 96px;
      height: 96px;

      border-radius: 9999px;
      transition: 0.4s;
      cursor: pointer;

      img {
        filter: invert(55%) sepia(66%) saturate(498%) hue-rotate(133deg)
          brightness(106%) contrast(92%);
      }

      @media (max-width: 768px) {
        width: 48px;
        height: 48px;

        img {
          width: 44px;
        }

        > span {
          transform: scale(0.7);
        }
      }
    }

    &.prev {
      left: 12px;

      @media (max-width: 768px) {
        left: -4px;
      }
    }

    &.next {
      right: 12px;

      @media (max-width: 768px) {
        right: -4px;
      }
    }
  }
`;

export default function TestimonialsSection() {
  const t = useTranslations('Testimonials');
  const depositionsContainerRef = useRef(null);
  const [navigation, setNavigation] = useState({
    arrowLeft: false,
    arrowRight: true,
  });

  const handlePrev = () => {
    depositionsContainerRef.current.scrollBy(
      -depositionsContainerRef.current.firstChild.offsetWidth,
      0,
    );
  };

  const handleNext = () => {
    depositionsContainerRef.current.scrollBy(
      depositionsContainerRef.current.firstChild.offsetWidth,
      0,
    );
  };

  const handleNavigation = useCallback(({ arrowLeft, arrowRight }) => {
    setNavigation(currentNavigation => ({
      ...currentNavigation,
      arrowLeft: arrowLeft ?? currentNavigation.arrowLeft,
      arrowRight: arrowRight ?? currentNavigation.arrowRight,
    }));
  }, []);

  return (
    <Testimonials id="testimonials-section" className="testimonials-section">
      <h1>{t('title')}</h1>
      <h2>{t('subTitle')}</h2>

      <div
        id="testimonials-container"
        className="testimonials-container"
        ref={depositionsContainerRef}
      >
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/lilian.jpg"
          photoLabel="Lilian"
          authorName="Lilian"
          authorInfo={t('lilian.authorInfo')}
        >
          &quot;{t('lilian.testimonial')} &quot;
        </Testimonial>
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/rose.jpg"
          photoLabel="Rose"
          authorName="Rose"
          authorInfo={t('rose.authorInfo')}
        >
          &quot;{t('rose.testimonial')} &quot;
        </Testimonial>
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/janis-costa.jpg"
          photoLabel="Janis Perpétua Pedro Costa"
          authorName="Janis P. P. Costa"
          authorInfo={t('janis.authorInfo')}
        >
          &quot;{t('janis.testimonial')} &quot;
        </Testimonial>
        <Testimonial
          onScroll={handleNavigation}
          photoURL="/images/testimonials/gilberto-cardoso.jpg"
          photoLabel="Gilberto Cardoso"
          authorName="Gilberto Cardoso da Silva"
          authorInfo={t('gilberto.authorInfo')}
        >
          &quot;{t('gilberto.testimonial')} &quot;
        </Testimonial>
      </div>
      {navigation.arrowLeft && (
        <span id="arrow-prev" className="arrow prev" onClick={handlePrev}>
          <img
            src="/images/projects/chevron-left.svg"
            alt="Voltar"
            width={64}
            height={64}
            loading="lazy"
          />
        </span>
      )}
      {navigation.arrowRight && (
        <span id="arrow-next" className="arrow next" onClick={handleNext}>
          <img
            src="/images/projects/chevron-right.svg"
            alt="Voltar"
            width={64}
            height={64}
            loading="lazy"
          />
        </span>
      )}
    </Testimonials>
  );
}
