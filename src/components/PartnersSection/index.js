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
      justify-content: center;
      flex-wrap: wrap;
      gap: 48px;

      a {
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        img {
          max-height: 100px;
          border: 0;
        }
      }
    }

    .sponsor-list {
      margin-bottom: 1.5rem;

      a {
        width: 150px;
        height: 150px;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          max-height: 60px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .list-container {
      .sponsor-list {
        flex-direction: column;
        gap: 0;
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
    link: 'https://www.cemig.com.br',
  },
  {
    name: 'CNH Industrial',
    logoPng: 'cnh-industrial.png',
    logoWebp: 'cnh-industrial.webp',
    link: 'https://www.cnhindustrial.com',
  },
  {
    name: 'GEOSOL',
    logoPng: 'geosol.png',
    logoWebp: 'geosol.webp',
    link: 'https://www.geosol.com.br',
  },
  {
    name: 'Hexagon Mining',
    logoPng: 'hexagon-mining.png',
    logoWebp: 'hexagon-mining.webp',
    link: 'https://hexagon.com',
  },
  {
    name: 'Inova BH',
    logoPng: 'inova-bh.png',
    logoWebp: 'inova-bh.webp',
    link: 'https://www.inovabh.com.br',
  },
  {
    name: 'Magotteaux',
    logoPng: 'magotteaux.png',
    logoWebp: 'magotteaux.webp',
    link: 'https://www.magotteaux.com',
  },
  {
    name: 'Minasligas',
    logoPng: 'minasligas.png',
    logoWebp: 'minasligas.webp',
    link: 'https://www.minasligas.com.br',
  },
  {
    name: 'NTS',
    logoPng: 'nts.png',
    logoWebp: 'nts.webp',
    link: 'https://www.ntsbrasil.com',
  },
  {
    name: 'Supermix',
    logoPng: 'supermix.png',
    logoWebp: 'supermix.webp',
    link: 'https://www.supermix.com.br',
  },
  {
    name: 'Tracbel',
    logoPng: 'tracbel.png',
    logoWebp: 'tracbel.webp',
    link: 'https://www.tracbel.com.br',
  },
];

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
          {sponsors
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(sponsor => (
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
          <a
            href="https://www.ohubsocial.com.br"
            target="_blank"
            rel="noreferrer"
            title="Incubadora De Projetos Sociais | Hub Social"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/partners/ohubsocial.webp"
              />
              <source
                type="image/jpeg"
                srcSet="/images/partners/ohubsocial.jpg"
              />
              <img
                src="/images/partners/ohubsocial.jpg"
                title="Incubadora De Projetos Sociais | Hub Social"
                alt="Incubadora De Projetos Sociais | Hub Social"
                loading="lazy"
              />
            </picture>
          </a>
          <a
            href="https://www.institutoimap.org.br/"
            target="_blank"
            rel="noreferrer"
            title="Instituto Marum Patrus"
          >
            <picture>
              <source type="image/webp" srcSet="/images/partners/imap.webp" />
              <source type="image/jpeg" srcSet="/images/partners/imap.jpg" />
              <img
                src="/images/partners/imap.jpg"
                title="Instituto Marum Patrus"
                alt="Instituto Marum Patrus"
                loading="lazy"
              />
            </picture>
          </a>
          <a
            href="http://www.nucleoodontologicoeldorado.com.br"
            target="_blank"
            rel="noreferrer"
            title="Núcleo Odontológico Eldorado - NOE"
          >
            <picture>
              <source type="image/webp" srcSet="/images/partners/noe.webp" />
              <source type="image/jpeg" srcSet="/images/partners/noe.jpg" />
              <img
                src="/images/partners/noe.jpg"
                title="Núcleo Odontológico Eldorado - NOE"
                alt="Núcleo Odontológico Eldorado - NOE"
                loading="lazy"
              />
            </picture>
          </a>
          <a
            href="https://www.redesoma.com.br/"
            target="_blank"
            rel="noreferrer"
            title="Rede Soma Drogarias"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/partners/redesomadrogarias.webp"
              />
              <source
                type="image/jpeg"
                srcSet="/images/partners/redesomadrogarias.jpg"
              />
              <img
                src="/images/partners/redesomadrogarias.jpg"
                title="Rede Soma Drogarias"
                alt="Rede Soma Drogarias"
                loading="lazy"
              />
            </picture>
          </a>
          <a
            href="https://www.academiatennishall.com.br/"
            target="_blank"
            rel="noreferrer"
            title="Academia Tennis Hall"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/partners/academiatennishall.webp"
              />
              <source
                type="image/jpeg"
                srcSet="/images/partners/academiatennishall.jpg"
              />
              <img
                src="/images/partners/academiatennishall.jpg"
                title="Academia Tennis Hall"
                alt="Academia Tennis Hall"
                loading="lazy"
              />
            </picture>
          </a>
        </div>
      </div>
    </Partners>
  );
}
