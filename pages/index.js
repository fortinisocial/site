import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title={"Fortini Investimento Social - Belo Horizonte"}>
      <div className={styles.container}>
        <header>
          <div className={styles.top}>
            <div className={styles.logo}>
              <img
                src="/images/header-logo.svg"
                alt="Fortini Investimento Social"
                width={180}
                height={55}
              />
              <div className={styles.divider}></div>
              <img
                src="/images/header-gf-logo.jpg"
                alt="Gerando Falcões"
                width={124}
                height={31}
              />
              <img
                src="/images/hexagon.svg"
                alt="Hexagono"
                className={styles.hexagon}
              />
            </div>
            <div className={styles.menu}>
              <span>
                Institucional{" "}
                <img src="/images/down-arrow.svg" alt="arrow down" />
              </span>
              <span>
                Projetos <img src="/images/down-arrow.svg" alt="arrow down" />
              </span>
              <span>Blog</span>
              <span className={styles.donate}>Faça a sua doação</span>
            </div>
          </div>

          <div className={styles.message}>
            <h1>"Sonho que se sonha junto é realidade"</h1>
            <p>
              Somos a <strong>Fortini</strong>, uma organização social que
              promove o acesso ao <strong>esporte e a cultura</strong> para{" "}
              <strong>estudantes de escolas públicas</strong> da{" "}
              <strong>região metropolitana de Belo Horizonte</strong>.
            </p>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles["numbers-container"]}>
            <div className={styles.title}>
              <h1>
                A Fortini <br />
                em números
              </h1>
              <h2>De 2016 até hoje</h2>
            </div>
          </section>
          <section className={styles["depositions-container"]}>
            <h1>O que dizem por aí...</h1>
            <h2>
              Quer saber o que dizem da gente? Se liga nos depoimentos dos
              nossos amigos e parceiros:
            </h2>
            <img
              src={
                "https://media-exp1.licdn.com/dms/image/C4E03AQGqy5ZM8nUCWg/profile-displayphoto-shrink_800_800/0/1612657509393?e=1618444800&v=beta&t=82cHHj9pv0Gl1NUBAlq1wlR2Fms-GM0tOWs3bKVNCkA"
              }
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
              <p className={styles["author-info"]}>
                Agente Comunitária no munícipio de Contagem e professora na E.
                E. Carlos Drummond de Andrade
              </p>
            </article>
          </section>
          <section className={styles["ods-container"]}>
            <h1>Objetivos de Desenvolvimento Sustentável - ODS</h1>
            <h2>
              A Fortini está alinhada aos ODS da Agenda 2030 das Nações Unidas,
              em conformidade com as dimensões econômica, social e ambiental do
              desenvolvimento sustentável.
            </h2>
            <div className={styles.onu}>
              <img src="/images/ONU.svg" alt="ONU" />
              <p>
                <strong>O</strong>bjetivos de <strong>d</strong>esenvolvimento{" "}
                <strong>s</strong>ustentável
              </p>
            </div>
            <div className={styles["ods-list"]}>
              <div className={`${styles.ods} ${styles.n1}`}>
                <img
                  src="/images/ods1.svg"
                  alt="ODS 1 - Erradicação da Pobreza"
                />
              </div>
              <div className={`${styles.ods} ${styles.n3}`}>
                <img src="/images/ods3.svg" alt="ODS 3 - Saúde e Bem-Estar" />
              </div>
              <div className={`${styles.ods} ${styles.n4}`}>
                <img
                  src="/images/ods4.svg"
                  alt="ODS 4 - Educação de Qualidade"
                />
              </div>
              <div className={`${styles.ods} ${styles.n5}`}>
                <img src="/images/ods5.svg" alt="ODS 5 - Igualdade de Gênero" />
              </div>
              <div className={`${styles.ods} ${styles.n16}`}>
                <img
                  src="/images/ods16.svg"
                  alt="ODS 16 - Paz, Justiça e Instituições Eficazes"
                />
              </div>
            </div>
            {/* <div className={styles["ods-description"]}>
              ODS 1 - Erradicação da Pobreza
            </div> */}
          </section>
        </main>

        {/* <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer> */}
      </div>
    </Layout>
  );
}
