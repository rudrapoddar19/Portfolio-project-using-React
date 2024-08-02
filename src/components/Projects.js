
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather Application",
      description: "It is Weather Application API build using JavaScript. By using this web application we can find the current temperature, wind speed of your location.",
      imgUrl: projImg1,
    },
    {
      title: "Tic Tac Toe",
      description: "It is a fully functional Tic Tac Toe game build using JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "BMI Calculator",
      description: "It is a fully functional web application build using HTML, CSS & JavaScript. It help us to calculate the Body Mass Index(BMI) according to the given height and weight of a person.",
      imgUrl: projImg3,
    },
    {
      title: "Speech Recognition",
      description: "It is a API based project. That is Speech Recognition API project build using JavaScript. In this project we can recognize speech using JavaScript. Which is super easy to recognize speech in a browser using JavaScript and then getting the text from the speech to use as user input.",
      imgUrl: projImg4,
    },
    {
      title: "Amazone Clone",
      description: "The Amazon Clone Website is a e-commerce platform built using HTML and CSS. It replicates the familiar layout and design of Amazon, allowing users to browse and purchase products. The website features a responsive design, intuitive navigation, and a seamless shopping experience, all achieved using only HTML and CSS.",
      imgUrl: projImg5,
    },
    // {
    //   title: "Portfolio",
    //   description: "Is is a responsive portfolio website build using React ",
    //   imgUrl: projImg6,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>This are some Front-End and Back-End based Project.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
        
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
