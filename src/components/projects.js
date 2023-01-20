import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import myanfobase from "../assets/img/myanfobaseproject.png";
import ultraB from "../assets/img/ultrabproject.png";
import shoppingcart from "../assets/img/shoppingcartpj.png";
import reactsocial from "../assets/img/reactsocialmediapj.png";
import fashion from "../assets/img/fashionecommercepj.png";
import education from "../assets/img/educationpj.png";
import dni from "../assets/img/dnistore.png";
import digital from "../assets/img/digitalbrandpj.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Myanfobase",
      description: "Informatiom Sharing Website",
      weblink: "https://www.myanfobase.com",
      imgUrl: myanfobase,
    },
    {
      title: "Ultra-B",
      description: "Cosmetic Ecommerce Website",
      weblink: "https://ultra-b.netlify.app/",
      imgUrl: ultraB,
    },
    {
      title: "Shopping Cart",
      description: "Cart function",
      weblink: "https://furaitureselling.netlify.app",
      imgUrl: shoppingcart,
    },
    {
      title: "Social App",
      description: "React Frontend",
      weblink: "https://reactsocialmediadesign.netlify.app",
      imgUrl: reactsocial,
    },
    {
      title: "Fashion Shop",
      description: "E-commerce website",
      weblink: "https://fashionshopecommerce.netlify.app",
      imgUrl: fashion,
    },
    {
      title: "Education",
      description: "Education website with html & Css",
      weblink: "https://educationcoursewebsiteksh.netlify.app/",
      imgUrl: education,
    },
    {
      title: "Daily Need Items (DNI)",
      description: "Ecommerce Website ",
      weblink: "https://www.dnistore.com/",
      imgUrl: dni,
    },
    {
      title: "Digital Marketing and Business Solution Project",
      description: "Digital Marking Services",
      weblink: "https://educationhtmlpages.netlify.app",
      imgUrl: digital,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 6).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(6, 8).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};
