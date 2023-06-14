import './App.css';
import styled from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import About from './components/About';
import Information from './components/Information';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ButtonToTop from './components/ButtonToTop';


const StyledHeader = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
padding-top: 2rem;
color: #4a5b6a;
@media screen and (max-width: 320px) {
flex-direction: column;
}
`

const MyData = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

const Logo = styled.img`
height: 35px;
@media screen and (max-width: 560px) {
display: none;
}
`

const Name = styled.p`
font-weight: bold;
padding-left: 1rem;
`

const Navigation = styled.nav`
width: 50%;
`

const Ul = styled.ul`
display: flex;
justify-content: space-evenly;
`

const ContactEmail = styled.a`
font-weight: bold;
color: #4a5b6a;
text-decoration: none;
`

const navList = [
  { id: 1, href: "#information", name: "Sobre mí" },
  { id: 2, href: "#skills", name: "Skills" },
  { id: 3, href: "#hobbies", name: "Hobbies" },
  { id: 4, href: "#education", name: "Educación" },
  { id: 5, href: "#projects", name: "Proyectos" },
]

function App() {

  return (

    <BrowserRouter>
      <body>
        <StyledHeader>
          <MyData>
            <Logo src="../../img/Logo.png" alt="Coronel Logo" />
            <Name>Mauricio Coronel</Name>
          </MyData>
          <Navigation>
            <Ul>
              {navList.map(({ id, href, name }) =>
                <Link className="navBar" smooth
                  to={href} id={id}>{name}</Link>)}
              <ContactEmail href="mailto: 8mau.coronel@gmail.com">8mau.coronel@gmail.com</ContactEmail>
            </Ul>
          </Navigation>
        </StyledHeader>
        <About />
        <Information />
        <Skills />
        <Hobbies />
        <Education />
        <Experience />
        <Contact />
        <Footer />
        <ButtonToTop />
      </body>
    </BrowserRouter >
  )
}

export default App;
