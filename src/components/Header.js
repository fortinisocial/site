import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
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
          <img
            src="/images/header/hexagon.svg"
            alt="Hexagono"
            className={styles.hexagon}
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

      <div className={styles.message}>
        <h1>&quot;Sonho que se sonha junto é realidade&quot;</h1>
        <p>
          Somos a <strong>Fortini</strong>, uma organização social que promove o
          acesso ao <strong>esporte e a cultura</strong> para{' '}
          <strong>estudantes de escolas públicas</strong> da{' '}
          <strong>região metropolitana de Belo Horizonte</strong>.
        </p>
      </div>
    </header>
  );
}
