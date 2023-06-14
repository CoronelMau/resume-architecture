import styled from "styled-components";

const Section = styled.section`
margin-top: 3rem;
padding-top: 3rem;
padding-bottom: 3rem;
background-color: #B4C5DB;
`

const Title = styled.h1`
text-align: center;
font-size: 32px;
font-weight: bold;
padding-bottom: 1rem;
color: #4a5b6a;
`

const Schools = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
margin: 0 10% 0 10%;
gap: 30px;
`

const SchoolCard = styled.div`
display: inline-flex;
flex-direction: column;
`

const SchoolImg = styled.img`
width: 150px;
height: 150px;
padding: 2rem;
margin-bottom: 1rem;
background-color: #FFF;
border-radius: 10px;
`

const SchoolName = styled.h1`
font-weight: bold;
color: #4a5b6a;
font-size: 1.2rem;
@media screen and (max-width: 768px) {
  font-size: 18px;
}
`

const ListEducation = [
  { id: 1, img: "../../img/unam.png", name: "Arquitectura", year: "2018 - Actualmente" },
  { id: 2, img: "../../img/enp5.png", name: "Técnico en Programación", year: "2016 - 2018" },
  { id: 3, img: "../../img/conamat-1.png", name: "Diploma de Matemáticas", year: "2017-2018" },
  { id: 4, img: "../../img/alura.png", name: "Desarrollador WEB", year: "2022-2023" },
]

const Education = () => {
  return (
    <Section id="education">
      <Title>Educación</Title>
      <Schools>
        {ListEducation.map(({ id, img, name, year }) =>
          <SchoolCard id={id}><SchoolImg src={img} /><SchoolName>{name}</SchoolName>{year}</SchoolCard>)}
      </Schools>
    </Section>
  );
}

export default Education;