import React from "react";
import { Container, Row, div, Form, Button } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white mt-5 pt-5 pb-1 px-5 ">
    <div className="container-fluid  ">
     <div className="">
    
     

     <div className="row">
       <div className="col-lg-3 col-12 pb-5">
       <img src="https://uiparadox.co.uk/templates/teach-me/assets/media/logo.png" className="img-fluid mb-2" alt="Responsive image pb-4"></img>
         <p className="wrap text-white">
         LMS portal delivers a comprehensive learning experience with interactive courses and real-world projects.
         </p>
         <h6 className="text-white">Follow Us!</h6>
         <div className="d-flex">
           <FaInstagram className="me-3" />
           <FaTwitter className="me-3" />
           <FaLinkedin className="me-3" />
         </div>
       </div>

       <div className="col-lg-3 col-md-4 col-6"  >
         <h5 className="text-uppercase pb-3">Popular Courses</h5>
         <ul className="list-unstyled">
           <li>Web Development</li>
           <li>Data Science</li>
           <li>Digital Marketing</li>
           <li>Business Management</li>
           <li>Graphic Design</li>
           <li>Human Resources</li>
         </ul>
       </div>

       <div className="col-lg-3 col-md-4 col-6 " >
         <h5 className="text-uppercase pb-3">Quick Links</h5>
         <ul className="list-unstyled">
         
         <Link to='/'>   <li>Home Page</li></Link>
          <Link to="/about">  <li>About Us</li></Link>
          <Link to="/courses">  <li>Courses</li></Link>
          <Link to="/signup">  <li>Signup</li></Link>
          <Link to="/login">  <li>Login</li></Link>
          <Link to="/contact">  <li>Contact</li></Link>
         </ul>
       </div>

       <div  className="tel-mail col-lg-3 col-md-4 col-12">
         <h5 className="text-uppercase pb-3 pt-3 pt-md-0 pt-lg-0">Contact Us</h5>
         <p className="m-0 pb-2 text-white">
           <FaPhoneAlt /> <a  href="tel:123456987"> +001 123 456 789</a> <span className="badge bg-success">FREE</span>
         </p>
         <p className="mb-4 text-white">
           <FaEnvelope /> <a  href="mailto:info@example.com">exampleinfo@gmail.com</a>  
         </p>

         <p class="fw-bold text-white mb-1">Subscribe to Our Newslatter</p>
        <form action="index.html" method="post" className="position-relative bg-transparent ">
                            <svg className="mailBox" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <g clip-path="url(#clip0_11807_2054)">
                                <path d="M18.9088 3.14844L2.42444 3.14844C1.45323 3.14844 0.666626 3.93992 0.666626 4.90625L0.666626 15.4531C0.666626 16.4252 1.45901 17.2109 2.42444 17.2109H18.9088C19.8719 17.2109 20.6666 16.4285 20.6666 15.4531V4.90625C20.6666 3.94164 19.8831 3.14844 18.9088 3.14844ZM18.6626 4.32031C18.3035 4.67754 12.123 10.8255 11.9096 11.0378C11.5776 11.3698 11.1362 11.5526 10.6666 11.5526C10.1971 11.5526 9.75569 11.3698 9.42256 11.0367C9.27905 10.8939 3.16674 4.81383 2.67061 4.32031L18.6626 4.32031ZM1.8385 15.2146L1.8385 5.14551L6.90249 10.1828L1.8385 15.2146ZM2.67135 16.0391L7.73335 11.0093L8.59502 11.8664C9.14838 12.4198 9.88409 12.7245 10.6666 12.7245C11.4492 12.7245 12.1849 12.4198 12.7371 11.8675L13.5999 11.0093L18.6619 16.0391H2.67135ZM19.4948 15.2146L14.4308 10.1828L19.4948 5.14551V15.2146Z" fill="white"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0_11807_2054">
                                <rect width="20" height="20" fill="white" transform="translate(0.666626 0.179688)"></rect>
                                </clipPath>
                                </defs>
                            </svg>
                            <input type="email" name="email" id="eMail" class="form-input" placeholder="Enter your email"></input>
                            <button type="submit" class="submit-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <g clip-path="url(#clip0_11807_2057)">
                                    <path d="M19.8283 0.351335C19.6625 0.185554 19.4138 0.134577 19.1963 0.221608L0.368218 7.75277C0.152789 7.83894 0.00853097 8.04409 0.00024974 8.27601C-0.00799243 8.50788 0.121382 8.72276 0.330132 8.82401L7.75465 12.4248L11.3555 19.8493C11.4537 20.0518 11.6588 20.1796 11.8826 20.1796C11.8895 20.1796 11.8965 20.1795 11.9035 20.1792C12.1353 20.171 12.3406 20.0267 12.4267 19.8113L19.9579 0.983287C20.045 0.765631 19.994 0.517077 19.8283 0.351335ZM2.03478 8.34831L16.9811 2.36985L8.07371 11.2771L2.03478 8.34831ZM11.8312 18.1447L8.90234 12.1057L17.8097 3.19844L11.8312 18.1447Z" fill="white"></path>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_11807_2057">
                                    <rect width="20" height="20" fill="white" transform="translate(0 0.179688)"></rect>
                                    </clipPath>
                                    </defs>
                                </svg>
                                
                            </button>
                        </form>
       </div>
     </div>

     <div className="row">
       <div >
       <hr></hr>
         <p className="text-center text-white">
           &copy; 2024 All Rights Copyright <span className="text-warning">TeachMe</span>. Design & Developed By{" "}
           <span className="text-warning">UIPARADOX</span>
         </p>
       </div>
       
     </div>
   </div>



     </div>


     

    </footer>

    
  );
};

export default Footer;