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
              students="32"
              city="Contagem"
              schools="E. E. José Almeida Flores, E. E. Luiz Carlos
            Silva"
              since="2016"
            />
            <ProjectCard
              kind="handball"
              title="Handebol"
              description="Projeto socioeducativo que utiliza das aulas de tênis de quadra como
        ferramenta para a inclusão social e a promoção da cidadania."
              students="20"
              city="Contagem e Ibirité"
              schools="E. E. Luiz Carlos
            Silva"
              since="2020"
            />
            <ProjectCard
              kind="judo"
              title="Judô"
              description="Projeto socioeducativo que utiliza das aulas de tênis de quadra como
        ferramenta para a inclusão social e a promoção da cidadania."
              students="8"
              city="Contagem"
              schools="E. E. Luiz Carlos
            Silva"
              since="2021"
            />
            <ProjectCard
              kind="taekwondo"
              title="Taekwondo"
              description="Projeto socioeducativo que utiliza das aulas de tênis de quadra como
        ferramenta para a inclusão social e a promoção da cidadania."
              students="12"
              city="Contagem"
              schools="E. E. Luiz Carlos
            Silva"
              since="2022"
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
