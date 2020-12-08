import styled from 'styled-components';

import galleryIcon from '../svg/gallery.svg';

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

const Icon = styled.img`
  width: 25%;

  color: rgba(0,0,0,0);
`;

function About() {
  return (
    <AboutWrapper>
      <Title>Galeria</Title>

      <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
      <div className="rainbow-icon"></div>
      </div>

      <h2>Autor: Paweł Kapela</h2>
    </AboutWrapper>
  );
}

export default About;