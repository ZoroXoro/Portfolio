import { Col } from "react-bootstrap";


export const ProjectCard=({title,description,imgurl})=>{

    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgurl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
        
    )
}