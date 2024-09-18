import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'



const Banner1 = () => {
  return (

    <div className="container-fluid ">
    <div className="container">
    <div className='row mt-5'>
    <div className="col-12 col-lg-8 style={{background-color:'#FFFFFF'}}">
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <h1 className="mb-4 text-dark bannerhead1">
        Why Choose Us
        </h1>
        <h6 className="card-text text-color font-weight-normal mb-auto ">
        High-quality, affordable education accessible to all learners seeking excellence without financial burden, ensuring accessibility and excellence.        </h6>
       <div className='mt-4'>  <Link to="/about">  <Button   content="Learn More"></Button></Link> </div>
     
      </div>
      <img
        className="card-img-right my-5 flex-auto d-none d-md-block img-fluid"
        src='https://uiparadox.co.uk/templates/teach-me/assets/media/icons/choose-1.png'       
        style={{ width: '20.313vw;', height: '160px' }}
      />
      
    </div>
  </div>



  <div className="col-12 col-lg-4 style={{background-color:'#FFFFFF'}}">
   <div className="card flex-md-row mb-4 box-shadow h-md-250">

   <div className="card-body d-flex flex-column font-weight-normal align-items-start gap-23">
   <img className='img-fluid mt-0 ' src="https://uiparadox.co.uk/templates/teach-me/assets/media/icons/choose-2.png"  style={{ width: '56px;', height: '56px' }} alt="" />
   <h5 className="banerheading mt-5 mb-3 ">
     Flexible Learning 
     
   </h5>
   <h6 className="card-text font-weight-normal   ">
   Explore any interest or trending topic. Take prerequisite courses to build a foundation, then advance your skills with specialized training and projects.        </h6>
 </div>
   
   </div>

</div>

 
 
    
    
    </div>
  {/*  second Row Banner*/}
    <div className='row mt-2'>
    <div className="col-12 col-lg-4 style={{background-color:'#FFFFFF'}}">
   <div className="card flex-md-row mb-4 box-shadow h-md-250">

   <div className="card-body d-flex flex-column font-weight-normal align-items-start gap-23">
   <img className='img-fluid mt-0 ' src="https://uiparadox.co.uk/templates/teach-me/assets/media/icons/choose-3.png"  style={{ width: '56px;', height: '56px' }} alt="" />
   <h5 className="banerheading  mt-5 mb-3 ">
   Learn Anything
     
   </h5>
   <h6 className="card-text font-weight-normal   ">
   Explore any interest or trending topic. Take prerequisite courses to build a foundation, then advance your skills with specialized training and projects.        </h6>
 </div>
   
   </div>

</div>

<div className="col-12 col-lg-4 style={{background-color:'#FFFFFF'}}">
   <div className="card flex-md-row mb-4 box-shadow h-md-250">

   <div className="card-body d-flex flex-column font-weight-normal align-items-start gap-23">
   <img className='img-fluid mt-0 ' src="https://uiparadox.co.uk/templates/teach-me/assets/media/icons/choose-4.png"  style={{ width: '56px;', height: '56px' }} alt="" />
   <h5 className="banerheading  mt-5 mb-3 ">
   Affordable Pricing
     
   </h5>
   <h6 className="card-text font-weight-normal   ">
   Explore any interest or trending topic. Take prerequisite courses to build a foundation, then advance your skills with specialized training and projects.        </h6>
 </div>
   
   </div>

</div>

<div className="col-12 col-lg-4 style={{background-color:'#FFFFFF'}}">
   <div className="card flex-md-row mb-4 box-shadow h-md-250">

   <div className="card-body d-flex flex-column font-weight-normal align-items-start gap-23">
   <img className='img-fluid mt-0 ' src="https://uiparadox.co.uk/templates/teach-me/assets/media/icons/choose-5.png"  style={{ width: '56px;', height: '56px' }} alt="" />
   <h5 className="banerheading mt-5 mb-3 ">
   Certification
     
   </h5>
   <h6 className="card-text font-weight-normal   ">
   Explore any interest or trending topic. Take prerequisite courses to build a foundation, then advance your skills with specialized training and projects.        </h6>
 </div>
   
   </div>

</div>
    
    </div>
    </div>
    </div>
    
   
  )
}

export default Banner1