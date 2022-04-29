import Head from 'next/head';
import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 700px;
  padding: 3.85rem 3.85rem 1.5rem 3.85rem;
  font-family: 'Nunito', sans-serif;
  max-width: 1920px;

  @media (max-width: 768px) {
    padding: 2rem;
    height: auto;
  }
`;

export const Main = styled.div`
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
