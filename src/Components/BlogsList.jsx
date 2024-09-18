import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const BlogsList = () => {
  return (
    <div>
    
    <div className="container-fluid mt-3">
    <div className="container">
    <div className="row ">
    <div className="col-lg-10 col-12">
    <h2 className="fs-1">Insights and Articles</h2>
    <p className="mb-4 mr-5"> 
    Our Experienced Teachers: Leaders in Education Bringing
    Knowledge to Life. 
    </p></div>
     

      <div className="col-lg-2 col-12 my-4">
      <Link  to="/blog">
    <Button content="See All Blogs"></Button>
      
  </Link>


    
    </div>
    </div>

    <div className="row">
    {/* First Card */}
    <div className="col-md-3">
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
        
        <div className="d-flex gap-1 mt-4 mb-4">
        <i class="bi bi-person "></i>
          <p className='text-nowrap fw-bold'>By John Smith</p>
        </div>
        <h5 className="card-title mb-3">Graphic Design for Beginnners</h5>
       
        <p className="card-text text-wrap">
        Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.


             </p>
           
        

          
         
          <div className=" mt-3">
        
           <Link to="/blog"><p className='fw-bold'>Read More</p> </Link>
          </div>
       
      </div>
    </div>
  </div>

     {/* Second Card */}
     <div className="col-md-3">
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
         
         <div className="d-flex gap-1 mt-4 mb-4">
         <i class="bi bi-person "></i>
           <p className='text-nowrap fw-bold'>By John Smith</p>
         </div>
         <h5 className="card-title mb-3">Graphic Design for Beginnners</h5>
        
         <p className="card-text text-wrap">
         Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.
 
 
              </p>
            
         
 
           
          
           <div className=" mt-3">
         
            <Link to="/blog"><p className='fw-bold'>Read More</p> </Link>
           </div>
        
       </div>
     </div>
   </div>

     {/* Third Card */}

     <div className="col-md-3">
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
         
         <div className="d-flex gap-1 mt-4 mb-4">
         <i class="bi bi-person "></i>
           <p className='text-nowrap fw-bold'>By John Smith</p>
         </div>
         <h5 className="card-title mb-3">Graphic Design for Beginnners</h5>
        
         <p className="card-text text-wrap">
         Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.
 
 
              </p>
            
         
 
           
          
           <div className=" mt-3">
         
            <Link to="/blog"><p className='fw-bold'>Read More</p> </Link>
           </div>
        
       </div>
     </div>
   </div>

      {/* Fourth Card */}

      <div className="col-md-3">
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
          
          <div className="d-flex gap-1 mt-4 mb-4">
          <i class="bi bi-person "></i>
            <p className='text-nowrap fw-bold'>By John Smith</p>
          </div>
          <h5 className="card-title mb-3">Graphic Design for Beginnners</h5>
         
          <p className="card-text text-wrap">
          Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.
  
  
               </p>
             
          
  
            
           
            <div className=" mt-3">
          
             <Link to="/blog"><p className='fw-bold'>Read More</p> </Link>
            </div>
         
        </div>
      </div>
    </div>

   </div>
    
    
    </div>
    </div></div>
  )
}

export default BlogsList