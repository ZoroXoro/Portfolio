import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png"
import meter2 from "../assets/img/meter2.png"
import meter3 from "../assets/img/meter3.png"
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
                        <p>Aute irure consectetur non sunt incididunt excepteur commodo sunt nisi.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt=""></img>
                                <h5>FreeLancer</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt=""></img>
                                <h5>Web-Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt=""></img>
                                <h5>Web-Designer</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt=""></img>
                                <h5>App-Developer</h5>
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