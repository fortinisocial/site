import Layout, { Main, Wrapper } from '../components/Layout';
import { BioCard } from '../components/BioCard';
import styles from '../components/BioCard/bio.module.scss';

export default function Bio() {
  return (
    <Layout title={'Fortini Investimento Social - Belo Horizonte'}>
      <Wrapper>
        <Main>
          <main className={styles.main}>
            <div>
              <img
                src="images/bio/logo.png"
                alt="Logo Fortini Investimento Social"
                width={125}
              />
            </div>
            <h1 className={styles.title}>Fortini</h1>
            <ul role="list" className={styles.linkCardFlex}>
              <BioCard
                href="https://fortini.org.br/doe"
                title="Faça sua doação! 💙"
              />
              <BioCard
                href="https://docs.google.com/forms/d/e/1FAIpQLSchLRjWBamq-PrPdii2_c7QUyHW43W1bPpIh5DayAxpa24d6w/viewform"
                title="Venha ser Fortini"
                variant="primary"
              />
              <BioCard
                href="https://fortini.org.br"
                title="Site"
                variant="secondary"
              />
            </ul>
          </main>
          <footer className={styles.footer}>
            <a
              href="https://www.instagram.com/fortinisocial"
              target="_blank"
              rel="noreferrer"
              title="Instagram da Fortini"
            >
              <img
                src="/images/bio/insta_footer.svg"
                alt="Instagram"
                width="30"
                height="30"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.facebook.com/fortinisocial"
              target="_blank"
              rel="noreferrer"
              title="Facebook da Fortini"
            >
              <img
                src="/images/bio/fb_footer.svg"
                alt="Facebook"
                width="17"
                height="30"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/fortini-investimento-social"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn da Fortini"
            >
              <img
                src="/images/bio/linkedin_footer.svg"
                alt="LinkedIn"
                width="30"
                height="30"
                loading="lazy"
              />
            </a>
          </footer>
        </Main>
      </Wrapper>
    </Layout>
  );
}
