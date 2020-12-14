import styled from 'styled-components';

import RainbowGalleryIcon from '../components/RainbowGalleryIcon';

const AboutWrapper = styled.div`
  text-align: center;
  align-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.6ch;
  width: 100%;
  opacity: 0.6;

  transition: opcaity 300ms;
`;

function About() {
  return (
    <AboutWrapper>
      <Title>Galeria</Title>

      <RainbowGalleryIcon/>

      <h2>Autor: Paweł Kapela</h2>
    </AboutWrapper>
  );
}

export default About;