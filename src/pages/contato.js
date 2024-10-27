import Layout, { Main, Wrapper } from '../components/Layout';
import ContactHeader from '../components/ContactHeader';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function Contact({ locale }) {
  return (
    <Layout title={'Contato - Fortini Investimento Social - Belo Horizonte'}>
      <Wrapper>
        <ContactHeader />
        <Main>
          <ContactSection locale={locale} />
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
