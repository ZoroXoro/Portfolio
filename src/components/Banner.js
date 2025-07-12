import { Container,Row,Col } from "react-bootstrap";
import { useState,useEffect } from "react";
import { ArrowRightCircle, ArrowRightSquare } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.png'
// import {motion} from 'framer-motion';

export const Banner =()=> {
    const [activeLink, setActiveLink] = useState('home');
const onUpdateActiveLink =(value) => {
        setActiveLink(value);
    }
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer','App Developer','Web Designer'];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return() => {clearInterval(ticker)}
    },[text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length +1)
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
            }
    }

    return (
        <section className="banner" id="home">
<Container>
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <span className="tagline">Welcome to my Portfolio</span>
        <h1>{''}<span className="wrap">{text}</span></h1>
        <p></p>
        <button
              className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('connect')}
            >
              <a href="#connect" style={{ color: 'inherit', textDecoration: 'none' }}>
                <span>Let's Connect </span>
              </a>
            <ArrowRightCircle/></button>
        </Col>
        <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt='Header img'/>
        </Col>
    </Row>
</Container>
        </section>
    )
}