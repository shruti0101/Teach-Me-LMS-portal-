import React from 'react';
import Navbar from './Navbar';
import './main.css';
import Button from '../Button';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (



    <header className='header container-fluid' id='home'>
      <section id="home">
        <div className='wraper'>
          <div className="container-fluid px-0 top-banner">
            <div className="container">
              <div className="row">
                {/* Banner Right Column */}
                <div className="col-12  col-lg-5 sec1img banner-right  order-1 order-lg-3">
                  <img className='img-fluid ' src="https://uiparadox.co.uk/templates/teach-me/assets/media/hero/hero-banner.png" alt="" />
                </div>

                {/* Banner Left Column */}
                <div className="col-12  col-lg-5 mt-5 order-2 order-lg-1 text-center text-lg-start">
                  <h1 className="banerhead">
                    We've amazing Skills for <span className='position-relative'><img className="img-fluid position-absolute bottom-0" src="https://uiparadox.co.uk/templates/teach-me/assets/media/vector/underline.png" alt="" />Teaching</span>
                  </h1>
                  <p className='mt-3' style={{ color: "#fff" }}>
                  Elevate online education with our advanced LMS portal, offering seamless course management and personalized learning experiences. Empower learners with intuitive access to interactive content and flexible study options. Redefine education with a platform built for excellence.
                  </p>
                  <div className='baner-buton mt-5 d-flex gap-3 '>
                     
                  <Link to="/courses"><Button content="Explore Courses" ></Button></Link>
                  <Link to="/about"><Button content="Read More" ></Button></Link>

                    
                    
                  
                   
                    
                    </div>
                    

                    <div className='d-flex jusify-content-center align-items-center pb-5 mt-5 gap-2 bannerleftdown-text '>
                    <div >
                      <img className='imgover imgover1' src="https://uiparadox.co.uk/templates/teach-me/assets/media/user/banner-user-1.png" alt="" />
                      <img className='imgover imgover2' src="https://uiparadox.co.uk/templates/teach-me/assets/media/user/banner-user-2.png" alt="" />
                      <img className='imgover imgover3' src="https://uiparadox.co.uk/templates/teach-me/assets/media/user/banner-user-3.png" alt="" />
                      <img  className='imgover imgover4' src="https://uiparadox.co.uk/templates/teach-me/assets/media/user/banner-user-4.png" alt="" />
                    </div>
                    <h5>50,000+</h5>
                    <h5 style={{color:'#fff'}}>Students</h5>
                  </div>
                
              </div>

              {/* Banner Center Column (hidden on mobile and tablet) */}
              <div className="col-12 col-lg-2 pt-5 d-none d-lg-block order-1 order-lg-2 banner-center">
                <img className='img-fluid' src="https://uiparadox.co.uk/templates/teach-me/assets/media/vector/arrow-line.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </header >


  );
};
