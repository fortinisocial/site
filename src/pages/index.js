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
              students="80"
              city="Contagem"
              schools="E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. E. Conceição Hilário, E. M. Heitor Villa Lobos
, E. M. René Chateubriand Domingues"
              since="2016"
              locations="Academia Tennis Hall"
            />
            <ProjectCard
              kind="handball"
              title="Handebol"
              students="200"
              city="Betim, Contagem e Ibirité"
              schools="E. E. Padre Camargos, E. M. do Bairro Petrovale, E. M. Adelina Mesquita Januzzi, E. M. Valério Ferreira Palhares"
              since="2018"
              locations="E. E. Padre Camargos, E. M. Adelina Mesquita Januzzi, Ginásio Califórnia, Poliesportivo Petrovale"
            />
            <ProjectCard
              kind="judo"
              title="Judô"
              students="120"
              city="Contagem"
              schools="E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães"
              since="2021"
              locations="E. E. Padre Camargos, E. M. Carlos Drummond de Andrade (CAIC), E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães"
            />
            <ProjectCard
              kind="taekwondo"
              title="Taekwondo"
              students="150"
              city="Betim e Contagem"
              schools="E. M. do Bairro Petrovale, E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães, E. M. Valério Ferreira Palhares"
              since="2022"
              locations="Poliesportivo Petrovale, E. M. Heitor Villa Lobos, E. M. Professora Lígia Magalhães"
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
