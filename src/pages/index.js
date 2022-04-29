import Layout, { Main, Wrapper } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
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
          <ProjectsSection>
            <ProjectCard
              kind="tenis"
              title="Tênis"
              description="Projeto socioeducativo que utiliza das aulas de tênis de quadra como
        ferramenta para a inclusão social e a promoção da cidadania."
            />
            <ProjectCard
              kind="handball"
              title="Handebol"
              description="Projeto socioeducativo que utiliza das aulas de tênis de quadra como
        ferramenta para a inclusão social e a promoção da cidadania."
            />
            <ProjectCard
              kind="judo"
              title="Judô"
              description="Projeto socioeducativo que utiliza das aulas de tênis de quadra como
        ferramenta para a inclusão social e a promoção da cidadania."
            />
            <ProjectCard
              kind="taekwondo"
              title="Taekwondo"
              description="Projeto socioeducativo que utiliza das aulas de tênis de quadra como
        ferramenta para a inclusão social e a promoção da cidadania."
            />
          </ProjectsSection>
          <DepositionsSection />
          <PartnersSection />
          <JoinSection />
        </Main>
        <Footer />
      </Wrapper>
    </Layout>
  );
}
