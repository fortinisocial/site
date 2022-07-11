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
      gap: 30px;

      a {
        img {
          height: 150px;
          border: 0;
        }
      }

      @media (min-width: 1024px) and (max-width: 1366px) {
        gap: 20px;
        a {
          img {
            height: 110px;
          }
        }
      }
    }

    .sponsor-list {
      margin-bottom: 1.5rem;

      a {
        img {
          object-fit: none;
          height: 70px;
          width: 280px;
          transform: scale(0.7);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .description {
      width: 100%;
    }
  }
`;

export default function PartnersSection() {
  return (
    <Partners id="partners-section" className="partners-section">
      <div className="description">
        <h1>Quem já realiza com a gente</h1>
      </div>
      <div className="list-container">
        <h1>Patrocinador:</h1>
        <div className="sponsor-list">
          <a
            href="https://www.cemig.com.br/"
            target="_blank"
            rel="noreferrer"
            title="Cemig"
          >
            <picture>
              <source type="image/webp" srcSet="/images/partners/cemig.webp" />
              <source type="image/jpeg" srcSet="/images/partners/cemig.jpg" />
              <img
                src="/images/partners/cemig.jpg"
                title="Cemig"
                alt="Cemig"
                loading="lazy"
              />
            </picture>
          </a>
        </div>
        <h1>Parceiros:</h1>
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
