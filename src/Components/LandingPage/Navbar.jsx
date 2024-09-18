import React from 'react'
import Button from '../Button';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className=" navbar navbar-expand-lg navigation-wrap  " >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img decoding="async" src="https://uiparadox.co.uk/templates/teach-me/assets/media/logo.png" alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-stream navbar-toggler-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">

                        <ol className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item" id='nv1'>
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <i className="fas fa-circle" style={{ fontSize: '6px' }}></i>


                                <Link
                                    className="nav-link dropdown-toggle custom-dropdown  "
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"

                                >
                                    COURSE <i class="fa fa-angle-down"></i>
                                </Link>
                                <ul className="dropdown-menu pt-0 pb-0" aria-labelledby="dropdownMenuButton">
                                    <li><Link className="dropdown-item" to="/courses">Courses</Link></li>
                                    <li><Link className="dropdown-item" to="/course-detail">Course Detail</Link></li>
                                    <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                                    <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item custom-item">
                                <i className="fas fa-circle" style={{ fontSize: '6px' }}></i>
                                <Link className="nav-link" to="/about">
                                    ABOUT
                                </Link>
                            </li>

                            <li className="nav-item custom-item">
                                <i className="fas fa-circle" style={{ fontSize: '6px' }}></i>
                                <Link className="nav-link" to="/blog">
                                    BLOG
                                </Link>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <i className="fas fa-circle" style={{ fontSize: '6px' }}></i>


                                <Link
                                    className="nav-link dropdown-toggle custom-dropdown  "
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"

                                >
                                    TRAINERS <i class="fa fa-angle-down"></i>
                                </Link>
                                <ul className="dropdown-menu dropdwn-menu-trainer pt-0 pb-0" aria-labelledby="navbarDropdown" >
                                    <li><Link className="dropdown-item " to="/teacher">Teachers</Link></li>
                                    <li><Link className="dropdown-item" to="/teach-with-us">Teach With Us</Link></li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-circle" style={{ fontSize: '6px' }}></i>
                                <Link className="nav-link" to="/contact">
                                    CONTACT
                                </Link>
                            </li>
                        </ol>
                        <div className='d-flex gap-2'>  <li className="nav-item">

                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>


                          <Link to="/signup">  <Button content="Signup"></Button></Link> 

                        </div>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar