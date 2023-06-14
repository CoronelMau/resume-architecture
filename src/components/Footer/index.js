import styled from "styled-components";

const Section = styled.section`
text-align: center;
padding-top: 2rem;
padding-bottom: 2rem;
color: #4a5b6a;
`

const Important = styled.span`
font-weight: bold;
`

const Logo = styled.img`
height: 50px;
`

const Footer = () => {
  return (
    <Section>
      <Logo src="../../img/Logo.png" alt="Coronel Logo" />
      <h1>Creado por <Important>Mauricio Coronel</Important></h1>
      <h2>2023</h2>
    </Section>
  );
}

export default Footer;