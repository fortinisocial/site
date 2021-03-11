import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title={'Fortini Investimento Social - Belo Horizonte'}>
      <div className={styles.container}>
        <header>
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
              <a href="/Projetos" title="Projetos">
                Projetos{' '}
                <img
                  src="/images/header/down-arrow.svg"
                  alt="arrow down"
                  width={9}
                  height={18}
                />
              </a>
              <a href="/blog" title="Blog">
                Blog
              </a>
              <a href="/doacao" title="Institucional" className={styles.donate}>
                Faça a sua doação
              </a>
            </nav>
          </div>

          <div className={styles.message}>
            <h1>"Sonho que se sonha junto é realidade"</h1>
            <p>
              Somos a <strong>Fortini</strong>, uma organização social que
              promove o acesso ao <strong>esporte e a cultura</strong> para{' '}
              <strong>estudantes de escolas públicas</strong> da{' '}
              <strong>região metropolitana de Belo Horizonte</strong>.
            </p>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles['numbers-container']}>
            <div className={styles.title}>
              <h1>
                A Fortini <br />
                em números
              </h1>
              <h2>De 2016 até hoje</h2>
            </div>
          </section>
          <section className={styles['depositions-container']}>
            <h1>O que dizem por aí...</h1>
            <h2>
              Quer saber o que dizem da gente? Se liga nos depoimentos dos
              nossos amigos e parceiros:
            </h2>
            <img
              src="/images/depositions/maiara.jpg"
              width={175}
              height={175}
              alt="Maiara Wenceslau"
            />
            <article>
              "A Fortini proporciona acesso à esportes considerados nobres e que
              não estariam ao alcance dos estudantes de baixa renda se não
              existisse o projeto. As atividades desenvolvem a auto estima das
              crianças influenciando no crescimento de sua aprendizagem."
              <p className={styles.author}>Janis Costa</p>
              <p className={styles['author-info']}>
                Agente Comunitária no munícipio de Contagem e professora na E.
                E. Carlos Drummond de Andrade
              </p>
            </article>
          </section>
          <section className={styles['ods-container']}>
            <h1>Objetivos de Desenvolvimento Sustentável - ODS</h1>
            <h2>
              A Fortini está alinhada aos ODS da Agenda 2030 das Nações Unidas,
              em conformidade com as dimensões econômica, social e ambiental do
              desenvolvimento sustentável.
            </h2>
            <div className={styles.onu}>
              <img
                src="/images/ods/ONU.svg"
                alt="ONU"
                width={122}
                height={101}
              />
              <p>
                <strong>O</strong>bjetivos de <strong>d</strong>esenvolvimento{' '}
                <strong>s</strong>ustentável
              </p>
            </div>
            <div className={styles['ods-list']}>
              <div className={`${styles['ods-item-container']} ${styles.n1}`}>
                <div
                  className={styles.ods}
                  data-text="ODS 1 - Erradicação da Pobreza"
                >
                  <img
                    src="/images/ods/ods1.svg"
                    alt="ODS 1 - Erradicação da Pobreza"
                    width={100}
                    height={44}
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 1 - Erradicação da Pobreza
                </div>
              </div>

              <div className={`${styles['ods-item-container']} ${styles.n3}`}>
                <div className={styles.ods}>
                  <img
                    src="/images/ods/ods3.svg"
                    alt="ODS 3 - Saúde e Bem-Estar"
                    width={120}
                    height={84}
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 3 - Saúde e Bem-Estar
                </div>
              </div>

              <div className={`${styles['ods-item-container']} ${styles.n4}`}>
                <div className={styles.ods}>
                  <img
                    src="/images/ods/ods4.svg"
                    alt="ODS 4 - Educação de Qualidade"
                    width={100}
                    height={82}
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 4 - Educação de Qualidade
                </div>
              </div>

              <div className={`${styles['ods-item-container']} ${styles.n5}`}>
                <div className={styles.ods}>
                  <img
                    src="/images/ods/ods5.svg"
                    alt="ODS 5 - Igualdade de Gênero"
                    width={75}
                    height={101}
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 5 - Igualdade de Gênero
                </div>
              </div>

              <div className={`${styles['ods-item-container']} ${styles.n16}`}>
                <div className={styles.ods}>
                  <img
                    src="/images/ods/ods16.svg"
                    alt="ODS 16 - Paz, Justiça e Instituições Eficazes"
                    width={100}
                    height={99}
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 16 - Paz, Justiça e Instituições Eficazes
                </div>
              </div>
            </div>
          </section>

          <section className={styles['history-container']}>
            <div className={styles.description}>
              <h1>Nossos projetos</h1>
              <p>
                Falar aqui sobre compromisso, resumidamente sobre o propósito
                dos projetos, sobre o valor que isso traz, etc, e como isso faz
                parte da história da Fortini.
              </p>

              <a href="/institucional" title="Nossa história">
                Nossa história
              </a>
            </div>
          </section>

          <section className={styles['projects-container']}>
            <div className={styles.list}>
              <div className={styles.card}>
                <div className={`${styles.header} ${styles.tenis}`}>
                  <div className={styles.info}>
                    <div className={styles.year}>
                      <img
                        src="/images/projects/calendar.svg"
                        alt="Calendário"
                        width={27}
                        height={30}
                      />
                      <span>2016</span>
                      <p>Período</p>
                    </div>
                    <div className={styles.students}>
                      <img
                        src="/images/projects/children.svg"
                        alt="Crianças"
                        width={31}
                        height={27}
                      />
                      <span>40</span>
                      <p>Alunos</p>
                    </div>
                    <div className={styles.schools}>
                      <img
                        src="/images/projects/pencil.svg"
                        alt="Lápis"
                        width={30}
                        height={30}
                      />
                      <span>5</span>
                      <p>Escolas</p>
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <h1>Tênis</h1>
                  <p>
                    Projeto socioeducativo que utiliza das aulas de tênis de
                    quadra como ferramenta para a inclusão social e a promoção
                    da cidadania.
                  </p>
                  <p className={styles.status}>
                    <img
                      src="/images/projects/hands-heart.svg"
                      alt="Mãos segurando coração"
                      width={18}
                      height={14}
                    />
                    <span>Projeto em Andamento</span>
                  </p>
                </div>
                <div className={styles.footer}>
                  <a href="/projeto/">Ver projeto</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.info}>
                    <div className={styles.year}>
                      <img
                        src="/images/projects/calendar.svg"
                        alt="Calendário"
                        width={27}
                        height={30}
                      />
                      <span>2016</span>
                      <p>Período</p>
                    </div>
                    <div className={styles.students}>
                      <img
                        src="/images/projects/children.svg"
                        alt="Crianças"
                        width={31}
                        height={27}
                      />
                      <span>40</span>
                      <p>Alunos</p>
                    </div>
                    <div className={styles.schools}>
                      <img
                        src="/images/projects/pencil.svg"
                        alt="Lápis"
                        width={30}
                        height={30}
                      />
                      <span>5</span>
                      <p>Escolas</p>
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <h1>Handeball</h1>
                  <p>
                    Projeto socioeducativo que utiliza das aulas de tênis de
                    quadra como ferramenta para a inclusão social e a promoção
                    da cidadania.
                  </p>
                  <p className={styles.status}>
                    <img
                      src="/images/projects/clock.svg"
                      alt="Relógio"
                      width={18}
                      height={18}
                    />
                    <span>Aguardando recurso</span>
                  </p>
                </div>
                <div className={styles.footer}>
                  <a href="/projeto/">Ver projeto</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.info}>
                    <div className={styles.year}>
                      <img
                        src="/images/projects/calendar.svg"
                        alt="Calendário"
                        width={27}
                        height={30}
                      />
                      <span>2016</span>
                      <p>Período</p>
                    </div>
                    <div className={styles.students}>
                      <img
                        src="/images/projects/children.svg"
                        alt="Crianças"
                        width={31}
                        height={27}
                      />
                      <span>40</span>
                      <p>Alunos</p>
                    </div>
                    <div className={styles.schools}>
                      <img
                        src="/images/projects/pencil.svg"
                        alt="Lápis"
                        width={30}
                        height={30}
                      />
                      <span>5</span>
                      <p>Escolas</p>
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <h1>Karatê</h1>
                  <p>
                    Projeto socioeducativo que utiliza das aulas de tênis de
                    quadra como ferramenta para a inclusão social e a promoção
                    da cidadania.
                  </p>
                  <p className={styles.status}>
                    <img
                      src="/images/projects/clock.svg"
                      alt="Relógio"
                      width={18}
                      height={18}
                    />
                    <span>Aguardando recurso</span>
                  </p>
                </div>
                <div className={styles.footer}>
                  <a href="/projeto/">Ver projeto</a>
                </div>
              </div>
            </div>
          </section>

          <section className={styles['join-container']}>
            <div className={styles.join}>
              <div className={styles.description}>
                <h1>Junte-se a nós</h1>
                <p>Seja um voluntário na Fortini.</p>
                <p>
                  Faça parte da nossa rede de colaboradores e ajude-nos a
                  transformar vidas.
                </p>

                <a href="/participar" title="Faça parte da Fortini">
                  Participar
                </a>
              </div>
            </div>
          </section>
          <section className={styles['partners-container']}>
            <div className={styles.description}>
              <h1>Quem já sonha com a gente?</h1>
            </div>
            <div className={styles['list-container']}>
              <div className={styles.list}>
                <a
                  href="https://www.academiatennishall.com.br/"
                  title="Academia Tennis Hall"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/partners/academiatennishall.jpg"
                    title="Academia Tennis Hall"
                    alt="Academia Tennis Hall"
                  />
                </a>
                <a
                  href="https://www.cemig.com.br/"
                  title="Cemig"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/partners/cemig.jpg"
                    title="Cemig"
                    alt="Cemig"
                  />
                </a>
                <a
                  href="https://www.institutoimap.org.br/"
                  title="Instituto Marum Patrus"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/partners/imap.jpg"
                    title="Instituto Marum Patrus"
                    alt="Instituto Marum Patrus"
                  />
                </a>

                <a
                  href="http://www.nucleoodontologicoeldorado.com.br"
                  title="Núcleo Odontológico Eldorado - NOE"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/partners/noe.jpg"
                    title="Núcleo Odontológico Eldorado - NOE"
                    alt="Núcleo Odontológico Eldorado - NOE"
                  />
                </a>
                <a
                  href="https://www.ohubsocial.com.br"
                  title="Incubadora De Projetos Sociais | Hub Social"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/partners/ohubsocial.jpg"
                    title="Incubadora De Projetos Sociais | Hub Social"
                    alt="Incubadora De Projetos Sociais | Hub Social"
                  />
                </a>
                <a
                  href="http://www.qartt.com.br"
                  title="Qart Tecnologia"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/partners/qart.jpg"
                    title="Qart Tecnologia"
                    alt="Qart Tecnologia"
                  />
                </a>
                <a
                  href="https://www.ambev.com.br/voa/"
                  title="Ambev - Programa VOA"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/partners/voaambev.jpg"
                    title="Ambev - Programa VOA"
                    alt="Ambev - Programa VOA"
                  />
                </a>
              </div>
            </div>
          </section>
        </main>

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
      </div>
    </Layout>
  );
}
