import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Link } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["React Developer","Frontend Developer", "Web Designer"];

    const [text, settext] = useState('');
        const [delta, setdelta] = useState(300- Math.random() * 100)

    const period = 2000;
    useEffect(() => {
            let ticker = setInterval(() => {
                tick();

            }, delta)
            return()=> { clearInterval(ticker)}
        }, [text]
    )
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
      let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      
      settext(updateText);

      if (isDeleting) {
        setdelta(prevDelta => prevDelta /2)
      }
      if (!isDeleting && updateText === fullText) {
        setisDeleting(true);
        setdelta(period);
      } else if (isDeleting && updateText === '') {
        setisDeleting(false);
        setloopNum(loopNum + 1);
        setdelta(500);
      }
    }

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to Chue Portfolio</span>
                    <h2>
                      {`Hi I'm Chue Wathan Kyaw `}
                      <span className="wrap">{text}</span>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent efficitur libero eu nunc tincidunt sollicitudin
                      quis sed ipsum. Morbi sapien justo, hendrerit eu rutrum
                      vitae, iaculis nec diam. Duis efficitur ultrices
                      tristique.
                    </p>
                      <button onClick={() => console.log("connect")}>
                        Let's Connect <ArrowRightCircle size={25} />
                      </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>

            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    );
}