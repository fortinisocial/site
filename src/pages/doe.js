import Layout, { Main, Wrapper } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonateSection from '../components/DonateSection';

export default function Home({ locale }) {
  return (
    <Layout title={'Fortini Investimento Social - Belo Horizonte'}>
      <Wrapper>
        <Header donation />
        <Main>
          <DonateSection locale={locale} />
        </Main>
        <Footer />
      </Wrapper>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // I you don' use internationalized routing, define this statically.
  const locale = context.locale;

  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../../messages/${locale}.json`)).default,
      locale,
    },
  };
}
