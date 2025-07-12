import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/js.png"
import meter2 from "../assets/img/science.png"
import meter3 from "../assets/img/flutter.png"
import meter4 from "../assets/img/picture.png"
import meter5 from "../assets/img/firebase.png"
import meter6 from "../assets/img/figma.png"
import meter7 from "../assets/img/html-5.png"
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Skills =() =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Some of my skills that can be seen in my projects</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt=""></img>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt=""></img>
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt=""></img>
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt=""></img>
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt=""></img>
                                <h5>Web-development</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt=""></img>
                                <h5>Framer</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt=""></img>
                                <h5>Figma</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="bg-img-left"></img>
            <img className="background-image-right" src={colorSharp2} alt="bg-img-left"></img>
        </section>
      )
}