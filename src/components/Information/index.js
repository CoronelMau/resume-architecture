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
        <AboutMeHeader>About me</AboutMeHeader>
        <AboutMeText>
          Hi! My name is <Important>Mauricio Coronel</Important>. I'm 23 years old, and currently living in Mexico City.
          I'm a self-taught person in this world of programming, always wanting to learn more and more everyday.
        </AboutMeText>
        <AboutMeText>
          I'm a very competitive person, who likes great challenges and does he's best in every single one of them.
          Also, I do well with teams, trying to contribute and expecting to get something out of every project.
        </AboutMeText>
        <Signature src="../../img/signature.png" />
      </Section>
    </AboutMeSection>
  );
}

export default Information;