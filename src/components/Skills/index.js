import styled from "styled-components";

const Section = styled.section`
padding-top: 2rem;
`

const Title = styled.h1`
text-align: center;
font-size: 32px;
font-weight: bold;
padding-bottom: 1rem;
color: #4a5b6a;
`

const Cards = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
gap: 30px;
margin: 0 5% 0 5%;
`

const Card = styled.div`
width: 150px;
height: 150px;
margin-bottom: 3rem;
display: flex;
flex-direction: column;
justify-content: end;
border-radius: 5px;
background-color: #FFF;
`

const Image = styled.img`
width: 30px;
padding:0 0 1rem 1rem;
filter: #4a5b6a;
`

const Text = styled.p`
padding:0 0 1rem 1rem;
color: #4a5b6a;
`

const mySkills = [
  { id: 7, name: "AutoCad", src: "../../img/dwg.png", alt: "Autocad image" },
  { id: 8, name: "3D Studio Max", src: "../../img/max.png", alt: "3ds Max image" },
  { id: 9, name: "VRay", src: "../../img/v-ray.png", alt: "VRay image" },
  { id: 10, name: "Sketchup", src: "../../img/sketchup.png", alt: "Sketchup image" },
  { id: 11, name: "Illustrator", src: "../../img/ai.png", alt: "Illustrator image" },
  { id: 12, name: "Photoshop", src: "../../img/ps.png", alt: "Photoshop image" },
  { id: 13, name: "Blender", src: "../../img/blender.png", alt: "Blender image" },
  { id: 1, name: "HTML 5", src: "../../img/html.png", alt: "HTML image" },
  { id: 2, name: "CSS", src: "../../img/css.png", alt: "CSS image" },
  { id: 3, name: "JavaScript", src: "../../img/java-script.png", alt: "JS image" },
  { id: 4, name: "Java", src: "../../img/java.png", alt: "Java image" },
  { id: 5, name: "React", src: "../../img/react.png", alt: "React image" },
  { id: 14, name: "PHP", src: "../../img/php.png", alt: "PHP image" },
  { id: 15, name: "Python", src: "../../img/python.png", alt: "Python image" },
  { id: 6, name: "Git", src: "../../img/git.png", alt: "Git image" },

]

const Skills = () => {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Cards>

        {mySkills.map(({ id, name, src, alt }) =>
          <Card id={id}><Image src={src} alt={alt} /><Text>{name}</Text></Card>)}
      </Cards>
    </Section>
  );
}

export default Skills;