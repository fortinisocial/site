import Layout, { Main, Wrapper } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import DepositionsSection from '../components/DepositionsSection';
import ODSSection from '../components/ODSSection';
import HistorySection from '../components/HistorySection';
import JoinSection from '../components/JoinSection';
import PartnersSection from '../components/PartnersSection';

export default function Home() {
  return (
    <Layout title={'Fortini Investimento Social - Belo Horizonte'}>
      <Wrapper>
        <Header />
        <Main>
          <AboutSection />
          <ODSSection />
          <HistorySection />
          <ProjectsSection />
          <DepositionsSection />
          <PartnersSection />
          <JoinSection />
        </Main>
        <Footer />
      </Wrapper>
    </Layout>
  );
}
