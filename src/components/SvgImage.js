import styled from 'styled-components';

const Image = styled.img`
  & svg {
    fill: white;
  }
`;

function SvgImage(props) {
  return (
    <Image src={props.src} alt={props.alt}/>
  );
}

export default SvgImage;