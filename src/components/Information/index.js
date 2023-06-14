import styled from "styled-components"

const AboutMeSection = styled.section`
background-color: #B4C5DB;
padding: 4rem 10vw;
`

const Section = styled.div`
  width: 50%; 
  @media screen and (max-width: 768px) {
  width: 80%;
  }
  @media  screen and (max-width: 425px) {
  width: 100%;
}
`

const AboutMeHeader = styled.h1`
font-size: 32px;
font-weight: bold;
color:#4a5b6a;
@media screen and (max-width: 768px) {
  font-size: 22px;
}
`

const AboutMeText = styled.p`
padding-top: 1rem;
line-height: 1.3;
text-align: justify;
@media screen and (max-width: 768px) {
  font-size: 14px;
}
`

const Important = styled.span`
font-weight: bold;
color: #4a5b6a;
`

const Signature = styled.img`
  padding-top: 2rem;
  height: 12rem;
  @media screen and (max-width: 768px) {
  height: 6rem;
}
`

const Information = () => {

  return (
    <AboutMeSection id="information">
      <Section>
        <AboutMeHeader>Sobre Mí</AboutMeHeader>
        <AboutMeText>
          ¡Hola! Soy <Important>Mauricio Coronel</Important>. Tengo 23 años, y actualmente vivo en la Ciudad de México.
        </AboutMeText>
        <AboutMeText>
          Me considero una persona muy competitiva, a quien le gustan los retos, dando lo mejor de mí para lograr el objetivo.
          Soy bueno en trabajos en equipo, tratando de aportar y esperando sacar lo mejor de cada uno de ellos.
        </AboutMeText>
        <Signature src="../../img/signature.png" />
      </Section>
    </AboutMeSection>
  );
}

export default Information;