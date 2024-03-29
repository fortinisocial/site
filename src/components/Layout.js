import Head from 'next/head';
import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 700px;
  padding: 2.85rem 3.85rem 2.85rem;
  font-family: 'Nunito', serif;
  max-width: 1920px;
  scroll-margin-top: 90px;

  @media (max-width: 768px) {
    scroll-margin-top: unset;
    padding: 1.4rem;
    height: auto;
  }
`;

export const Main = styled.main`
  margin: 0 30px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
