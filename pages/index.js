import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title={"Fortini Investimento Social - Belo Horizonte"}>
      <div className={styles.container}>
        <header>
          <div className={styles.flex}>
            <div className={styles.logo}>
              <img
                src="/images/header-logo.svg"
                alt="Fortini Investimento Social"
                width={180}
                height={55}
              />
              <div className={styles.divisor}></div>
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

          <div style={{ display: "flex", fontSize: 32, fontWeight: 500 }}>
            Sonho que se sonha junto é realidade
          </div>
        </header>

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
