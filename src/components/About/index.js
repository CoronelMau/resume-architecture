import styled from "styled-components";

const Section = styled.section`
display: grid;
margin: 0 10vw 0;
padding: 3rem 0;
align-items: center;
grid-template-columns: 3fr 1fr;
gap: 100px;

@media screen and (max-width: 610px) {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
`

const AboutMe = styled.div`
display: flex;
flex-direction: column;
width: 90%;
@media  screen and (max-width: 768px) {
  width: 100%;
}
`

const MainTitle = styled.h1`
font-size: 2.5rem;
font-weight: bold;
color: #4a5b6a;
@media  screen and (max-width: 768px) {
  font-size: 22px;
}
`

const AboutText = styled.p`
font-size: 1.1rem;
padding: 1.5rem 0;
line-height: 1.2;
@media  screen and (max-width: 768px) {
  font-size: 16px;
}
`

const MePhoto = styled.img`
height: 368px;
border-radius: 50%;
padding-right: 3rem;
@media  screen and (max-width: 768px) {
  height: 250px;
  padding-right: 0rem;
}
`

const SocialMedia = styled.ul`
display: flex;
justify-content: space-around;
font-size: .85rem;
gap: 20px;
@media  screen and (max-width: 1024px) {
  width: 175%;
  flex-wrap: wrap;
}
@media  screen and (max-width: 768px) {
  width: 100%;
  flex-wrap: wrap;
}
`

const ArrowImg = styled.img`
width: 10px;
padding-left: .3rem;
`

const Link = styled.a`
text-decoration: none;
color: black;
color: #4a5b6a;
`

const items = [
  { id: 1, href: "https://drive.google.com/file/d/1xVuM7k4QiFpDmLgVJnHZVWhp97fnvJna/view?usp=sharing", name: "Curriculum" },
  { id: 2, href: "https://drive.google.com/file/d/1fQchHdjx5AyltRSG4McSIvCF3Ycmk5UW/view?usp=sharing", name: "Portafolio" },
  { id: 3, href: "https://www.instagram.com/m.coronel/", name: "Instagram" },
  { id: 4, href: "https://www.linkedin.com/in/mauricio-coronel/", name: "LinkedIn" },
];

const About = () => {
  return (
    <Section>
      <AboutMe>
        <MainTitle>¡Hola, soy Mauricio Coronel!</MainTitle>
        <AboutText>Acutalmente soy estudiante de Arquitectura en la UNAM, cursando mi último semestre en la carrera.
          Con gran experiencia en el proceso proyectural y de renderizado.
        </AboutText>
        <SocialMedia>
          {items.map(({ id, name, href }) =>
            <li id={id}><Link target="_blank" href={href}>{name}<ArrowImg src="../../img/right-arrow.png" /></Link></li>
          )}
        </SocialMedia>
      </AboutMe>
      <MePhoto alt="Mauricio Coronel Photo" src="../../img/Me_Photo.png" />
    </Section >
  );
}

export default About;