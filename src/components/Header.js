import React, { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img
            src="/images/fortini-logo.svg"
            alt="Fortini Investimento Social"
            width={180}
            height={55}
          />
          <div className={styles.divider}></div>
          <img
            src="/images/header/gerando-falcoes-logo.svg"
            alt="Gerando Falcões"
            width={124}
            height={31}
          />
        </div>
        <nav className={styles.menu}>
          <a href="/institucional" title="Institucional">
            Institucional{' '}
            <img
              src="/images/header/down-arrow.svg"
              alt="arrow down"
              width={9}
              height={18}
            />
          </a>
          <a href="/atuacao" title="Atuação">
            Atuação{' '}
            <img
              src="/images/header/down-arrow.svg"
              alt="arrow down"
              width={9}
              height={18}
            />
          </a>
          <a href="/transparencia" title="Transparência">
            Transparência
          </a>
          <a href="/midias" title="Mídias">
            Mídias
          </a>
          <a href="/contato" title="Contato">
            Contato
          </a>
          <a href="/doe" title="Institucional" className={styles.donate}>
            Doe agora
          </a>
        </nav>
      </div>

      <div className={styles['mobile-actions']}>
        <button
          onClick={() => setOpened(prevState => !prevState)}
          className={
            opened ? styles['menu-button-opened'] : styles['menu-button']
          }
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              className={styles.line1}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className={styles.line2} d="M 20,50 H 80" />
            <path
              className={styles.line3}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <a href="/doe" title="Institucional" className={styles.donate}>
          Doe agora
        </a>
      </div>

      {opened ? (
        <nav className={styles['mobile-menu']}>
          <a href="/institucional" title="Institucional">
            Institucional{' '}
            <img
              src="/images/header/down-arrow.svg"
              alt="arrow down"
              width={9}
              height={18}
            />
          </a>
          <a href="/atuacao" title="Atuação">
            Atuação{' '}
            <img
              src="/images/header/down-arrow.svg"
              alt="arrow down"
              width={9}
              height={18}
            />
          </a>
          <a href="/transparencia" title="Transparência">
            Transparência
          </a>
          <a href="/midias" title="Mídias">
            Mídias
          </a>
          <a href="/contato" title="Contato">
            Contato
          </a>
        </nav>
      ) : (
        <div className={styles.message}>
          <h1>&quot;Sonho que se sonha junto é realidade&quot;</h1>
          <p>
            Somos a <strong>Fortini</strong>, uma organização social que promove
            o acesso ao <strong>esporte e a cultura</strong> para{' '}
            <strong>estudantes de escolas públicas</strong> da{' '}
            <strong>região metropolitana de Belo Horizonte</strong>.
          </p>
        </div>
      )}
    </header>
  );
}
