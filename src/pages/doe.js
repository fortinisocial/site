import Layout, { Main, Wrapper } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonateSection from '../components/DonateSection';

export default function Home() {
  return (
    <Layout title={'Fortini Investimento Social - Belo Horizonte'}>
      <Wrapper>
        <Header donation />
        <Main>
          <DonateSection />
        </Main>
        <Footer />
      </Wrapper>
    </Layout>
  );
}
