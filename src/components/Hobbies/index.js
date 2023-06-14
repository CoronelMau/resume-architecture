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
margin: 0 5% 0 5%;
gap: 30px;
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
width: 40px;
padding:0 0 1rem 1rem;
`

const Text = styled.p`
padding:0 0 1rem 1rem;
color: #4a5b6a;
`

const myHobbies = [
  { id: 1, name: "Rubik's Cube", src: "../../img/rubik.png", alt: "Rubik's cube image" },
  { id: 2, name: "Videogames", src: "../../img/nintendo-switch.png", alt: "Nintendo Switch image" },
  { id: 3, name: "Listen to Music", src: "../../img/headphones.png", alt: "Headphones image" },
  { id: 4, name: "Watch movies", src: "../../img/film.png", alt: "Film image" },
  { id: 5, name: "Legos", src: "../../img/blocks.png", alt: "Legos image" },
]

const Hobbies = () => {
  return (
    <Section id="hobbies">
      <Title>Hobbies</Title>
      <Cards>
        {myHobbies.map(({ id, name, src, alt }) =>
          <Card id={id}><Image src={src} alt={alt} /><Text>{name}</Text></Card>)}
      </Cards>
    </Section>
  );
}

export default Hobbies;