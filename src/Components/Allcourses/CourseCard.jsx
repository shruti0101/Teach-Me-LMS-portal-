import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../Allcourses/Coursecard.css';
import { Link } from 'react-router-dom';

const CourseCard = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-4">
       {/* First Card */}
      
       <div className="col-md-4">
       <Link to="/course-detail">
       <div className="card h-100 card-hover-effect" style={{ width: '100%' }}>
       <div className="image-container">
         <img
           src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/course-1.png"
           className="card-img-top"
           alt="UI/UX Design"
         />
         <div className="flash-effect"></div> {/* Flash effect */}
       </div>
       <div className="card-body">
         
         <div className="d-flex justify-content-between mt-4 mb-4">
         <div className="d-flex align-items-center">
         <span className="badge bg-secondary">4 Weeks</span>
         <span className="badge bg-primary ms-2">Beginner</span>
       </div>
           <div className='cardauthor'>By John Smith</div>
         </div>
         <h5 className="card-title mb-3">UI/UX Designs</h5>
         <div className="d-flex align-items-center mb-3">
             <div className="text-warning me-2">
               {Array.from({ length: 5 }, (_, index) => (
                 <i className="bi bi-star-fill" key={index}></i>
               ))}
             </div>
             <smal className="fw-bold text-secondary ">(20 Reviews)</smal>
           </div>
         <p className="card-text text-wrap">
         Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.


              </p>
              <hr />
         <div className="mt-4">

           
           <div className="d-flex justify-content-between">
             <div>
               <i className="bi bi-layers"></i> 15 Lessons
             </div>
             <div>
               <i className="bi bi-people"></i> 8000 Students
             </div>
           </div>
           <div className="d-flex justify-content-between align-items-center mt-3">
             <span className="fw-bold fs-4">$120</span>
             <button className="btn btn-success">Enroll Now</button>
           </div>
         </div>
       </div>
     </div></Link>
     
     </div>

        {/* Second Card */}
        <div className="col-md-4">
        <Link to="/course-detail">

        <div className="card h-100 card-hover-effect" style={{ width: '100%' }}>
        <div className="image-container">
          <img
            src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/course-2.png"
            className="card-img-top"
            alt="UI/UX Design"
          />
          <div className="flash-effect"></div> {/* Flash effect */}
        </div>
        <div className="card-body">
          
          <div className="d-flex justify-content-between mt-4 mb-4">
          <div className="d-flex align-items-center">
          <span className="badge bg-secondary">4 Weeks</span>
          <span className="badge bg-primary ms-2">Beginner</span>
        </div>
            <div className='cardauthor'>By John Smith</div>
          </div>
          <h5 className="card-title mb-3">Graphic Design for Beginnners</h5>
          <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <i className="bi bi-star-fill" key={index}></i>
                ))}
              </div>
              <smal className="fw-bold text-secondary ">(20 Reviews)</smal>
            </div>
          <p className="card-text text-wrap">
          Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.


               </p>
               <hr />
          <div className="mt-4">

            
            <div className="d-flex justify-content-between">
              <div>
                <i className="bi bi-layers"></i> 15 Lessons
              </div>
              <div>
                <i className="bi bi-people"></i> 8000 Students
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="fw-bold fs-4">$120</span>
              <button className="btn btn-success">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
        
        </Link>

      </div>

        {/* Third Card */}
        <div className="col-md-4">
        <Link to="/course-detail">
        <div className="card h-100 card-hover-effect" style={{ width: '100%' }}>
        <div className="image-container">
          <img
            src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/course-3.png"
            className="card-img-top"
            alt="UI/UX Design"
          />
          <div className="flash-effect"></div> {/* Flash effect */}
        </div>
        <div className="card-body">
          
          <div className="d-flex justify-content-between mt-4 mb-4">
          <div className="d-flex align-items-center">
          <span className="badge bg-secondary">4 Weeks</span>
          <span className="badge bg-primary ms-2">Beginner</span>
        </div>
            <div className='cardauthor'>By John Smith</div>
          </div>
          <h5 className="card-title mb-3">Web Design Fundamentals</h5>
          <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <i className="bi bi-star-fill" key={index}></i>
                ))}
              </div>
              <smal className="fw-bold text-secondary ">(20 Reviews)</smal>
            </div>
          <p className="card-text text-wrap">
          Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.


               </p>
               <hr />
          <div className="mt-4">

            
            <div className="d-flex justify-content-between">
              <div>
                <i className="bi bi-layers"></i> 15 Lessons
              </div>
              <div>
                <i className="bi bi-people"></i> 8000 Students
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="fw-bold fs-4">$120</span>
              <button className="btn btn-success">Enroll Now</button>
            </div>
          </div>
        </div>
      </div></Link>

     </div>
      </div>
      <div className="row mb-4">
       {/* First Card */}
      
       <div className="col-md-4">
       <Link to="/course-detail">
       <div className="card h-100 card-hover-effect" style={{ width: '100%' }}>
       <div className="image-container">
         <img
           src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/course-1.png"
           className="card-img-top"
           alt="UI/UX Design"
         />
         <div className="flash-effect"></div> {/* Flash effect */}
       </div>
       <div className="card-body">
         
         <div className="d-flex justify-content-between mt-4 mb-4">
         <div className="d-flex align-items-center">
         <span className="badge bg-secondary">4 Weeks</span>
         <span className="badge bg-primary ms-2">Beginner</span>
       </div>
           <div className='cardauthor'>By John Smith</div>
         </div>
         <h5 className="card-title mb-3">UI/UX Designs</h5>
         <div className="d-flex align-items-center mb-3">
             <div className="text-warning me-2">
               {Array.from({ length: 5 }, (_, index) => (
                 <i className="bi bi-star-fill" key={index}></i>
               ))}
             </div>
             <smal className="fw-bold text-secondary ">(20 Reviews)</smal>
           </div>
         <p className="card-text text-wrap">
         Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.


              </p>
              <hr />
         <div className="mt-4">

           
           <div className="d-flex justify-content-between">
             <div>
               <i className="bi bi-layers"></i> 15 Lessons
             </div>
             <div>
               <i className="bi bi-people"></i> 8000 Students
             </div>
           </div>
           <div className="d-flex justify-content-between align-items-center mt-3">
             <span className="fw-bold fs-4">$120</span>
             <button className="btn btn-success">Enroll Now</button>
           </div>
         </div>
       </div>
     </div></Link>
     
     </div>

        {/* Second Card */}
        <div className="col-md-4">
        <Link to="/course-detail">

        <div className="card h-100 card-hover-effect" style={{ width: '100%' }}>
        <div className="image-container">
          <img
            src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/course-2.png"
            className="card-img-top"
            alt="UI/UX Design"
          />
          <div className="flash-effect"></div> {/* Flash effect */}
        </div>
        <div className="card-body">
          
          <div className="d-flex justify-content-between mt-4 mb-4">
          <div className="d-flex align-items-center">
          <span className="badge bg-secondary">4 Weeks</span>
          <span className="badge bg-primary ms-2">Beginner</span>
        </div>
            <div className='cardauthor'>By John Smith</div>
          </div>
          <h5 className="card-title mb-3">Graphic Design for Beginnners</h5>
          <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <i className="bi bi-star-fill" key={index}></i>
                ))}
              </div>
              <smal className="fw-bold text-secondary ">(20 Reviews)</smal>
            </div>
          <p className="card-text text-wrap">
          Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.


               </p>
               <hr />
          <div className="mt-4">

            
            <div className="d-flex justify-content-between">
              <div>
                <i className="bi bi-layers"></i> 15 Lessons
              </div>
              <div>
                <i className="bi bi-people"></i> 8000 Students
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="fw-bold fs-4">$120</span>
              <button className="btn btn-success">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
        
        </Link>

      </div>

        {/* Third Card */}
        <div className="col-md-4">
        <Link to="/course-detail">
        <div className="card h-100 card-hover-effect" style={{ width: '100%' }}>
        <div className="image-container">
          <img
            src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/course-3.png"
            className="card-img-top"
            alt="UI/UX Design"
          />
          <div className="flash-effect"></div> {/* Flash effect */}
        </div>
        <div className="card-body">
          
          <div className="d-flex justify-content-between mt-4 mb-4">
          <div className="d-flex align-items-center">
          <span className="badge bg-secondary">4 Weeks</span>
          <span className="badge bg-primary ms-2">Beginner</span>
        </div>
            <div className='cardauthor'>By John Smith</div>
          </div>
          <h5 className="card-title mb-3">Web Design Fundamentals</h5>
          <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <i className="bi bi-star-fill" key={index}></i>
                ))}
              </div>
              <smal className="fw-bold text-secondary ">(20 Reviews)</smal>
            </div>
          <p className="card-text text-wrap">
          Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.


               </p>
               <hr />
          <div className="mt-4">

            
            <div className="d-flex justify-content-between">
              <div>
                <i className="bi bi-layers"></i> 15 Lessons
              </div>
              <div>
                <i className="bi bi-people"></i> 8000 Students
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="fw-bold fs-4">$120</span>
              <button className="btn btn-success">Enroll Now</button>
            </div>
          </div>
        </div>
      </div></Link>

     </div>
      </div>
     
      
    </div>
  );
};

export default CourseCard;
