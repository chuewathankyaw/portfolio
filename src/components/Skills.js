import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "./skill.css";
import Grid from "@mui/material";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              
              <div className="firstcon">
              <div className="seccon">
                <div className="skillsone btn_shadow">
                  <h5>HTML5</h5>

                  <div className="skilllogo">
                    <img src="./logo/html5.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>CSS</h5>

                  <div className="skilllogo">
                    <img src="./logo/css-3.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>JavaScript</h5>

                  <div className="skilllogo">
                    <img src="./logo/javascript.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
              </div>
              <div className="seccon">
                <div className="skillsone btn_shadow">
                  <h5>React</h5>

                  <div className="skilllogo">
                    <img src="./logo/react.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>Materia UI</h5>

                  <div className="skilllogo">
                    <img src="./logo/material-ui.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>Tailwindcss</h5>

                  <div className="skilllogo">
                    <img src="./logo/tailwindcss.svg" />
                  </div>

                  <span>experienced</span>
                </div>
              </div>
              <div className="seccon">
                <div className="skillsone btn_shadow">
                  <h5>TypeScript</h5>

                  <div className="skilllogo">
                    <img src="./logo/typescript.svg"  />
                  </div>

                  <span>experienced</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>Node.js</h5>

                  <div className="skilllogo">
                    <img src="./logo/nodejs.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>Express.js</h5>

                  <div className="skilllogo">
                    <img src="./logo/express.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
              </div>
              <div className="seccon">
                <div className="skillsone btn_shadow">
                  <h5>MongoDB</h5>

                  <div className="skilllogo">
                    <img src="./logo/mongodb.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>Heroku</h5>

                  <div className="skilllogo">
                    <img src="./logo/heroku.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>GitHub</h5>

                  <div className="skilllogo">
                    <img src="./logo/github-icon.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
              </div>
              <div className="seccon">
                <div className="skillsone btn_shadow">
                  <h5>Bootstrap</h5>

                  <div className="skilllogo">
                    <img src="./logo/bootstrap.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>Figma</h5>

                  <div className="skilllogo">
                    <img src="./logo/figma.svg" />
                  </div>

                  <span>experienced</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>Postman</h5>

                  <div className="skilllogo">
                    <img src="./logo/postman.svg" />
                  </div>

                  <span>intermediate</span>
                </div>
              </div>
              <div className="seccon">
                <div className="skillsone btn_shadow">
                  <h5>Uizard</h5>

                  <div className="skilllogo">
                    <img src="./logo/uizard.png" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>HTML</h5>

                  <div className="skilllogo">
                    <img src="./logo/react.png" />
                  </div>

                  <span>intermediate</span>
                </div>
                <div className="skillsone btn_shadow">
                  <h5>CSS</h5>

                  <div className="skilllogo">
                    <img src="./logo/react.png" />
                  </div>

                  <span>intermediate</span>
                </div>
              </div>
              </div>
              {/* <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <h5>Frontend skills </h5>
                    <div>
                      <div>
                        <p>React.js</p>
                        <img src="./public/logo/react.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={meter2} alt=""/>
                    <h5>Brand Identity</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt=""/>
                    <h5>Logo Design</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt=""/>
                    <h5>Web Development</h5>
                  </div>
                </Carousel> */}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" alt="" src={colorSharp} />
    </section>
  );
};
