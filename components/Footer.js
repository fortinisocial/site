import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img
          src="/images/fortini-logo.svg"
          alt="Fortini Investimento Social"
          width={162}
          height={50}
        />
        <p>Fortini 2021. Todos os direitos reservados.</p>
      </div>
      <div className={styles.navigation}>
        <div className={styles.social}>
          <h1>Redes sociais</h1>
          <p>@fortinisocial</p>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/fortinisocial"
              target="_blank"
              rel="noopener"
              title="Instagram da Fortini"
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
              rel="noopener"
              title="Facebook da Fortini"
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
              rel="noopener"
              title="LinkedIn da Fortini"
            >
              <img
                src="/images/footer/linkedin_footer.svg"
                alt="LinkedIn"
                width={30}
                height={30}
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className={styles['menu-container']}>
          <div className={styles.menu}>
            <h1>Institucional</h1>
            <nav role="navigation">
              <a href="/institucional">Sobre a Fortini</a>
              <a href="/time">Nosso time</a>
              <a href="/contribua">Contribua</a>
              <a href="/faq">Perguntas frequentes</a>
              <a href="/faq">Blog</a>
            </nav>
          </div>
          <div className={styles.menu}>
            <h1>Projetos</h1>
            <nav role="navigation">
              <a href="/projetos/tenis">Tênis</a>
              <a href="/projetos/handebol">Handebol</a>
              <a href="/projetos/karate">Karatê</a>
              <a href="/projetos/futsal">Futsal</a>
            </nav>
          </div>
          <div className={styles.menu}>
            <h1>Contato</h1>
            <p>(31) 99850-4420</p>
            <p>Segunda a sexta, das 09h às 17h</p>
            <p>contato@fortini.org.br</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
