import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { Section } from '../Layout';

const Partners = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  background: #ffffff;
  min-height: 438px;
  height: auto;

  .description {
    width: 230px;

    h1 {
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.2;
      color: #22c8cd;
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    .sponsor-list,
    .partner-list {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 56px;
      row-gap: 0;

      a {
        width: 150px;
        height: 150px;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        picture {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        img {
          max-width: 100%;
          width: auto;
          max-height: 70px;
        }
      }
    }

    .sponsor-list {
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    .list-container {
      .partners-list,
      .sponsor-list {
        a {
          margin: -8px 0;
        }
      }
    }

    .description {
      width: 100%;
    }
  }
`;

const sponsors = [
  {
    name: 'Cemig',
    logoPng: 'cemig.png',
    logoWebp: 'cemig.webp',
    link: 'https://www.cemig.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'CNH Industrial',
    logoPng: 'cnh-industrial.png',
    logoWebp: 'cnh-industrial.webp',
    link: 'https://www.cnhindustrial.com?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'GEOSOL',
    logoPng: 'geosol.png',
    logoWebp: 'geosol.webp',
    link: 'https://www.geosol.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Hexagon Mining',
    logoPng: 'hexagon-mining.png',
    logoWebp: 'hexagon-mining.webp',
    link: 'https://hexagon.com?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Inova BH',
    logoPng: 'inova-bh.png',
    logoWebp: 'inova-bh.webp',
    link: 'https://www.inovabh.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Itaú',
    logoPng: 'banco-itau.png',
    logoWebp: 'banco-itau.webp',
    link: 'https://www.itau.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Magotteaux',
    logoPng: 'magotteaux.png',
    logoWebp: 'magotteaux.webp',
    link: 'https://www.magotteaux.com?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Minasligas',
    logoPng: 'minasligas.png',
    logoWebp: 'minasligas.webp',
    link: 'https://www.minasligas.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'NTS',
    logoPng: 'nts.png',
    logoWebp: 'nts.webp',
    link: 'https://www.ntsbrasil.com?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Rede Soma Drogarias',
    logoPng: 'rede-soma-drogarias.png',
    logoWebp: 'rede-soma-drogarias.webp',
    link: 'https://www.redesoma.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Supermix',
    logoPng: 'supermix.png',
    logoWebp: 'supermix.webp',
    link: 'https://www.supermix.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Tracbel',
    logoPng: 'tracbel.png',
    logoWebp: 'tracbel.webp',
    link: 'https://www.tracbel.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Usiminas',
    logoPng: 'usiminas.png',
    logoWebp: 'usiminas.webp',
    link: 'https://www.usiminas.com?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
].sort((a, b) => a.name.localeCompare(b.name));

const partners = [
  {
    name: 'Academia Tennis Hall',
    logoPng: 'academia-tennis-hall.png',
    logoWebp: 'academia-tennis-hall.webp',
    link: 'https://www.academiatennishall.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'DOZE Rackethouse',
    logoPng: 'doze-rackethouse.png',
    logoWebp: 'doze-rackethouse.webp',
    link: 'https://linktr.ee/doze.rackethouse?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
  {
    name: 'Núcleo Odontológico Eldorado',
    logoPng: 'nucleo-odontologico-eldorado.png',
    logoWebp: 'nucleo-odontologico-eldorado.webp',
    link: 'http://www.nucleoodontologicoeldorado.com.br?utm_source=fortini&utm_medium=referral&utm_campaign=institucional',
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function PartnersSection() {
  const t = useTranslations('Partners');

  return (
    <Partners id="partners-section" className="partners-section">
      <div className="description">
        <h1>{t('title')}</h1>
      </div>
      <div className="list-container">
        <h1>{t('sponsors')}</h1>
        <div className="sponsor-list">
          {sponsors.map(sponsor => (
            <a
              key={sponsor.name}
              href={sponsor.link}
              target="_blank"
              rel="noreferrer"
              title={sponsor.name}
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/images/partners/${sponsor.logoWebp}`}
                />
                <source
                  type="image/png"
                  srcSet={`/images/partners/${sponsor.logoPng}`}
                />
                <img
                  src={`/images/partners/${sponsor.logoPng}`}
                  title={sponsor.name}
                  alt={sponsor.name}
                  loading="lazy"
                />
              </picture>
            </a>
          ))}
        </div>
        <h1>{t('partners')}</h1>
        <div className="partner-list">
          {partners.map(partner => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
              title={partner.name}
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/images/partners/${partner.logoWebp}`}
                />
                <source
                  type="image/png"
                  srcSet={`/images/partners/${partner.logoPng}`}
                />
                <img
                  src={`/images/partners/${partner.logoPng}`}
                  title={partner.name}
                  alt={partner.name}
                  loading="lazy"
                />
              </picture>
            </a>
          ))}
        </div>
      </div>
    </Partners>
  );
}
