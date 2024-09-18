import React from "react";
import Button from './Button';

import { Card,  Container, Row, Col } from "react-bootstrap";

import { Link } from 'react-router-dom';


const teachers = [
  {
    name: "Victoria Bennett",
    role: "Professor",
    img: "https://uiparadox.co.uk/templates/teach-me/assets/media/teachers/teacher-1.png", // Replace with actual image URL
  },
  {
    name: "Alexander Martin",
    role: "Head of Department",
    img: "https://uiparadox.co.uk/templates/teach-me/assets/media/teachers/teacher-2.png", // Replace with actual image URL
  },
  {
    name: "Elizabeth Carter",
    role: "English Teacher",
    img: "https://uiparadox.co.uk/templates/teach-me/assets/media/teachers/teacher-3.png", // Replace with actual image URL
  },
  {
    name: "Johnathan Miller",
    role: "Design Teacher",
    img: "https://uiparadox.co.uk/templates/teach-me/assets/media/teachers/teacher-4.png", // Replace with actual image URL
  },
];

const TeacherCard = ({ teacher }) => {
  return (
    <Card className="text-center shadow-sm p-3 mb-5 bg-white rounded ">
      <Card.Img
        variant="top"
        src={teacher.img}
        className="img-fluid"
        style={{
          borderRadius: "50%",
          width: "250px",
          height: "260px",
          objectFit: "cover",
          margin: "0 auto",
    
        }}
      />
      <Card.Body>
        <Card.Title>{teacher.name}</Card.Title>
        <Card.Text>{teacher.role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const TeachersList = () => {
  return (
     <div className="container-fluid mt-3">
     <div className="container">
     <div className="row ">
     <div className="col-lg-10 col-12">
     <h2 className="fs-1">Our Experienced Teachers</h2>
     <p className="mb-4 mr-5">
       Our Experienced Teachers: Leaders in Education Bringing Knowledge to Life.
     </p></div>
      
 
       <div className="col-lg-2 col-12 my-4">
       <Link  to="/teacher">
     <Button content="See All Teacher"></Button>
       
   </Link>


     
     </div>
     </div>
   
       <Row>
         {teachers.map((teacher, index) => (
           <Col key={index} md={3} sm={6}>
             <TeacherCard teacher={teacher} />
           </Col>
         ))}
       </Row>
      
     </div></div>

  );
};

export default TeachersList;
