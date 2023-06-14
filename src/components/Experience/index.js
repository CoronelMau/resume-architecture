import styled from "styled-components";

const Section = styled.section`
`

const Title = styled.h1`
margin-top: 3rem;
text-align: center;
font-size: 32px;
font-weight: bold;
padding-bottom: 1.5rem;
color: #4a5b6a;
`

const ProjectCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-bottom: 8rem;
@media screen and (max-width: 768px) {
  flex-direction: column;
  margin-bottom: 4rem;
}
`

const ProjectImg = styled.img`
  width: 50%;
  box-shadow: 10px 10px 30px 10px rgba(0,0,0,0.1);
  @media screen and (max-width: 768px) {
  width: 80%;
}
`

const ProjectTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #4a5b6a;
  @media screen and (max-width: 768px) {
  padding-top: 1rem;
}
`

const ProjectDesciption = styled.p`
padding-top: 0.5rem;
padding-bottom: 0.5rem;
`

const List = [
  {
    id: 1,
    name: "Four Leaves Villa",
    description: "3Ds Max y Corona Render",
    img: "../../img/four-leaves.jpg",
  },
  {
    id: 2,
    name: "Practica Photoshop",
    description: "Sketchup y post producción en Photoshop",
    img: "../../img/img-ps.jpg",
  },
  {
    id: 3,
    name: "Restaurante",
    description: "Rediseño de Restaurante, Hidalgo",
    img: "../../img/restaurante.jpg",
  },
  {
    id: 4,
    name: "Iglesia",
    description: "Rediseño de Iglesia, Michoacán",
    img: "../../img/iglesia.jpg",
  },
  {
    id: 5,
    name: "Hostal Zamala",
    description: "Render Maqueta, Zempoala",
    img: "../../img/maqueta2.jpg",
  },
  {
    id: 6,
    name: "Sala de Exposiciones",
    description: "Render Maqueta, rediseño en Palacio de los Deportes",
    img: "../../img/maqueta1.png",
  },
];

const Experience = () => {
  return (
    <Section id="projects">
      <Title>Proyectos</Title>

      {List.map(({ id, name, description, img, repo, demo }) =>
        <ProjectCard id={id}>
          <ProjectImg src={img} alt="Project img" />
          <div>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDesciption>{description}</ProjectDesciption>
          </div>
        </ProjectCard>)}
    </Section>
  );
}

export default Experience;