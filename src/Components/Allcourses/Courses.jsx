import React from 'react';
import { Tab, Tabs, Container, Button } from 'react-bootstrap';
import './ourcoursesmain.css';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import HeaderComponent from '../page_header/HeaderComponent';
const Courses = () => {
  return (
    <div>

    <HeaderComponent item1="Courses"></HeaderComponent>

  
    
   
    
    
        <div className='container-fluid mt-5'>
        <div className="container tab-container">
        <h2 className="course-title">Our Latest Course</h2>
        <div className='position-relative mw-100'>     
         <Tabs defaultActiveKey="all" id="course-tabs" className="custom-tabs ">
        <Tab eventKey="all" title="All Courses">
          <div  className="tab-content"> <CourseCard> </CourseCard> </div>
        </Tab>
      
        <Tab eventKey="ux-ui" title="UX/UI Design">
          <div className="tab-content"><CourseCard> </CourseCard></div>
        </Tab>
        <Tab eventKey="digital-market" title="Digital Market">
          <div className="tab-content"><CourseCard> </CourseCard></div>
        </Tab>
        <Tab eventKey="data-scientist" title="Data Scientist">
          <div className="tab-content"><CourseCard> </CourseCard></div>
        </Tab>
        <Tab eventKey="front-end" title="Front-End Development">
          <div className="tab-content"><CourseCard> </CourseCard></div>
        </Tab>
      </Tabs>  
      
     
    
    
      <Link to="/courses">  <Button variant="dark" className="explore-btn text-center">Explore All Courses</Button></Link> 
        </div>
      </div>
        </div>
         
    
    
      );
    };
    
  
    


  </div>
  )
}

export default Courses