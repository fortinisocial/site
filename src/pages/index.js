import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout title={'Fortini Investimento Social - Belo Horizonte'}>
      <div className={styles.container}>
        <Header styles={styles} />

        <main className={styles.main}>
          <section className={styles.about}>
            <div className={styles['about-header']}>
              <img
                src="/images/about/maiara-wenceslau-fortini.png"
                alt="Maiara Wenceslau"
                width={464}
                height={479}
                loading="lazy"
              />
              <div className={styles['about-content']}>
                <h1>Sobre a Fortini</h1>
                <p>
                  A Fortini é uma organização social que atua em parceria com
                  escolas públicas da{' '}
                  <strong>Região Metropolitana de Belo Horizonte</strong>, a fim
                  de promover o acesso à educação, ao esporte e a cultura para
                  crianças e adolescentes.
                </p>
                <p>
                  Nosso grande sonho é{' '}
                  <strong>promover o acesso ao esporte e a cultura</strong> para
                  estudantes de todas as escolas públicas da Região
                  Metropolitana de Belo Horizonte.
                </p>
              </div>
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
              alt="Maiara Wenceslau"
              width={175}
              height={175}
              loading="lazy"
            />
            <article>
              &quot;A Fortini proporciona acesso à esportes considerados nobres
              e que não estariam ao alcance dos estudantes de baixa renda se não
              existisse o projeto. As atividades desenvolvem a auto estima das
              crianças influenciando no crescimento de sua aprendizagem.&quot;
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
                loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 5 - Igualdade de Gênero
                </div>
              </div>

              <div className={`${styles['ods-item-container']} ${styles.n10}`}>
                <div className={styles.ods}>
                  <img
                    src="/images/ods/ods10.svg"
                    alt="ODS 10 - Redução das Desigualdades"
                    width={100}
                    height={99}
                    loading="lazy"
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 10 - Redução das Desigualdades
                </div>
              </div>

              <div className={`${styles['ods-item-container']} ${styles.n16}`}>
                <div className={styles.ods}>
                  <img
                    src="/images/ods/ods16.svg"
                    alt="ODS 16 - Paz, Justiça e Instituições Eficazes"
                    width={100}
                    height={99}
                    loading="lazy"
                  />
                </div>
                <div className={styles['ods-description']}>
                  ODS 16 - Paz, Justiça e Instituições Eficazes
                </div>
              </div>
            </div>
          </section>

          <section className={styles['history-container']}>
            <img src="/images/hexagon.svg" alt="Hexágono" />
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
                <header className={`${styles.header} ${styles.tenis}`}>
                  <div className={styles.info}>
                    <div className={styles.year}>
                      <img
                        src="/images/projects/calendar.svg"
                        alt="Calendário"
                        width={27}
                        height={30}
                        loading="lazy"
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
                        loading="lazy"
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
                        loading="lazy"
                      />
                      <span>5</span>
                      <p>Escolas</p>
                    </div>
                  </div>
                </header>
                <article className={styles.description}>
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
                      loading="lazy"
                    />
                    <span>Projeto em Andamento</span>
                  </p>
                </article>
                <div className={styles.footer}>
                  <a href="/projeto/">Ver projeto</a>
                </div>
              </div>
              <div className={styles.card}>
                <header className={`${styles.header} ${styles.handball}`}>
                  <div className={styles.info}>
                    <div className={styles.year}>
                      <img
                        src="/images/projects/calendar.svg"
                        alt="Calendário"
                        width={27}
                        height={30}
                        loading="lazy"
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
                        loading="lazy"
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
                        loading="lazy"
                      />
                      <span>5</span>
                      <p>Escolas</p>
                    </div>
                  </div>
                </header>
                <article className={styles.description}>
                  <h1>Handebol</h1>
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
                      loading="lazy"
                    />
                    <span>Aguardando recurso</span>
                  </p>
                </article>
                <div className={styles.footer}>
                  <a href="/projeto/">Ver projeto</a>
                </div>
              </div>
              <div className={styles.card}>
                <header className={`${styles.header} ${styles.karate}`}>
                  <div className={styles.info}>
                    <div className={styles.year}>
                      <img
                        src="/images/projects/calendar.svg"
                        alt="Calendário"
                        width={27}
                        height={30}
                        loading="lazy"
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
                        loading="lazy"
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
                        loading="lazy"
                      />
                      <span>5</span>
                      <p>Escolas</p>
                    </div>
                  </div>
                </header>
                <article className={styles.description}>
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
                      loading="lazy"
                    />
                    <span>Aguardando recurso</span>
                  </p>
                </article>
                <div className={styles.footer}>
                  <a href="/projeto/">Ver projeto</a>
                </div>
              </div>
            </div>
          </section>

          <section className={styles['join-container']}>
            <div className={styles.join}>
              <img
                src="/images/join/background.jpg"
                alt="Três crianças com a camisa da Fortini"
                width={732}
                height={423}
                loading="lazy"
              />
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
                  <img
                    src="/images/partners/cemig.jpg"
                    title="Cemig"
                    alt="Cemig"
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
                  href="http://www.qartt.com.br"
                  target="_blank"
                  rel="noreferrer"
                  title="Qart Tecnologia"
                >
                  <img
                    src="/images/partners/qart.jpg"
                    title="Qart Tecnologia"
                    alt="Qart Tecnologia"
                  />
                </a>
                <a
                  href="https://www.ambev.com.br/voa/"
                  target="_blank"
                  rel="noreferrer"
                  title="Ambev - Programa VOA"
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

        <Footer styles={styles} />
      </div>
    </Layout>
  );
}
