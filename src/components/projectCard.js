import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ProjectCard = ({ title, description, imgUrl, weblink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img alt="" src={imgUrl} />
        <div className="proj-txtx">
         
            <h4>{title}</h4>
            <span>{description}</span>
            <br></br>

            <span>{weblink}</span>
        </div>
      </div>
    </Col>
  );
};
