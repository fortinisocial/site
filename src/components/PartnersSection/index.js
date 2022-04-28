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
      color: #4a4747;
    }
  }

  .list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    .list {
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
    <Partners className="partners-section">
      <div className="description">
        <h1>Quem já realiza com a gente</h1>
      </div>
      <div className="list-container">
        <div className="list">
          <a
            href="https://www.academiatennishall.com.br/"
            target="_blank"
            rel="noreferrer"
            title="Academia Tennis Hall"
          >
            <img
              src="/images/partners/academiatennishall.jpg"
              title="Academia Tennis Hall"
              alt="Academia Tennis Hall"
            />
          </a>
          <a
            href="https://www.cemig.com.br/"
            target="_blank"
            rel="noreferrer"
            title="Cemig"
          >
            <img src="/images/partners/cemig.jpg" title="Cemig" alt="Cemig" />
          </a>
          <a
            href="https://www.ohubsocial.com.br"
            target="_blank"
            rel="noreferrer"
            title="Incubadora De Projetos Sociais | Hub Social"
          >
            <img
              src="/images/partners/ohubsocial.jpg"
              title="Incubadora De Projetos Sociais | Hub Social"
              alt="Incubadora De Projetos Sociais | Hub Social"
            />
          </a>
          <a
            href="https://www.institutoimap.org.br/"
            target="_blank"
            rel="noreferrer"
            title="Instituto Marum Patrus"
          >
            <img
              src="/images/partners/imap.jpg"
              title="Instituto Marum Patrus"
              alt="Instituto Marum Patrus"
            />
          </a>
          <a
            href="http://www.nucleoodontologicoeldorado.com.br"
            target="_blank"
            rel="noreferrer"
            title="Núcleo Odontológico Eldorado - NOE"
          >
            <img
              src="/images/partners/noe.jpg"
              title="Núcleo Odontológico Eldorado - NOE"
              alt="Núcleo Odontológico Eldorado - NOE"
            />
          </a>
          <a
            href="https://www.redesoma.com.br/"
            target="_blank"
            rel="noreferrer"
            title="Rede Soma Drogarias"
          >
            <img
              src="/images/partners/redesomadrogarias.jpg"
              title="Rede Soma Drogarias"
              alt="Rede Soma Drogarias"
            />
          </a>
        </div>
      </div>
    </Partners>
  );
}
