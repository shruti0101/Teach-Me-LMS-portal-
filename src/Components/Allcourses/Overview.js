import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Overview.css'; // Link to the CSS
import { useEffect } from 'react';
import { useState } from 'react';


function Overview() {

    // for the animating the slider bars

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            animateRatingBars();
        }
    }, [active]);

    function animateRatingBars() {
        const bars = [
            { id: 'bar-5', width: '90%' },
            { id: 'bar-4', width: '70%' },
            { id: 'bar-3', width: '65%' },
            { id: 'bar-2', width: '50%' },
            { id: 'bar-1', width: '30%' },
        ];

        bars.forEach((bar, index) => {
            const element = document.getElementById(bar.id);
            element.style.transition = 'width 0.8s ease';
            setTimeout(() => {
                element.style.width = bar.width;
            }, index * 200); // Delay each bar animation slightly for a smooth transition
        });
    }





    return (
        <>

            <Tabs
                defaultActiveKey="Curriculum"
                id="Overview"
                className="overview-tabs mt-4"
            >

                <Tab eventKey="Overview" title="Overview">
                    <div className='description mt-5 '>
                        <h4 >1. Course Description</h4>
                        <p>
                            Learn the fundamentals of web development, including HTML, CSS, JavaScript, and more. Build responsive websites and gain practical experience through hands-on projects.
                        </p>

                        <h4>2. Key Highlights</h4>
                        <p>
                            Comprehensive coverage of essential web technologies.
                            Real-world projects and assignments.
                            Flexible learning at your own pace.
                        </p>
                        <h4>3. Certification</h4>
                        <p>
                            Upon successful completion of the course, you will receive a Certificate of Completion. This certificate validates your new skills and can be added to your resume or LinkedIn profile to showcase your expertise in web development.</p>
                    </div>
                </Tab>


                <Tab eventKey="Curriculum" title="Curriculum" >

                    <div className='drop-content'>
                        <h4 className='description fs-3 fw-700 mt-5'>Course Content</h4>



                        <div className="d-flex  pt-4 timing align-items-center my-sm-0 gap-16 flex-sm-wrap flex-wrap">
                            <p className="fw-bold mb-0">Level Beginner</p>

                            <div className="dot d-flex align-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9"
                                    height="8"
                                    viewBox="0 0 6 7"
                                    fill="none"
                                >
                                    <circle cx="3" cy="3.5" r="3" fill="#92949F"></circle>
                                </svg>
                            </div>

                            <p className="fw-bold mb-0">Lectures 15</p>

                            <div className="dot d-flex align-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9"
                                    height="8"
                                    viewBox="0 0 6 7"
                                    fill="none"
                                >
                                    <circle cx="3" cy="3.5" r="3" fill="#92949F"></circle>
                                </svg>
                            </div>

                            <p className="fw-bold mb-0">
                                Total: 6 Hours 45 Minutes 36 Seconds
                            </p>
                        </div>



                        <div className='container-fluid mt-4 p-0 m-0'>
                            {/* course 1 */}



                            <div className="container m-0 p-0 drop-content mt-4 ">
                                <div className="accordion" id="courseAccordion">

                                    {/* Introduction to HTML */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="false"
                                                aria-controls="collapseOne"
                                            >
                                                <div className="d-flex justify-content-between w-100">
                                                    <span >Introduction to HTML</span>
                                                    <span>03 Lectures • 45 Minutes</span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#courseAccordion"
                                        >
                                            <div className="accordion-body">
                                                {/* Course Content for Introduction to HTML */}
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> Basics of HTML
                                                        </span>
                                                        <div>
                                                            <button className="btn btn-warning btn-sm me-2">Preview</button>
                                                            <span>20:40</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mt-2">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> Structuring a Webpage
                                                        </span>
                                                        <div>
                                                            <button className="btn btn-warning btn-sm me-2">Preview</button>
                                                            <span>10:40</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mt-2">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> HTML5 Features
                                                        </span>
                                                        <div>
                                                            <span>14:00</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CSS Fundamentals */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                <div className="d-flex justify-content-between w-100">
                                                    <span>CSS Fundamentals</span>
                                                    <span>03 Lectures • 50 Minutes</span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#courseAccordion"
                                        >
                                            <div className="accordion-body">
                                                {/* Course Content for CSS Fundamentals */}
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> CSS Basics
                                                        </span>
                                                        <div>
                                                            <button className="btn btn-warning btn-sm me-2">Preview</button>
                                                            <span>15:30</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mt-2">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> Styling a Webpage
                                                        </span>
                                                        <div>
                                                            <button className="btn btn-warning btn-sm me-2">Preview</button>
                                                            <span>18:00</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mt-2">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> Advanced CSS Features
                                                        </span>
                                                        <div>
                                                            <span>17:00</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* JavaScript Basics */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                <div className="d-flex justify-content-between w-100">
                                                    <span>JavaScript Basics</span>
                                                    <span>03 Lectures • 40 Minutes</span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#courseAccordion"
                                        >
                                            <div className="accordion-body">
                                                {/* Course Content for JavaScript Basics */}
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> JS Syntax
                                                        </span>
                                                        <div>
                                                            <button className="btn btn-warning btn-sm me-2">Preview</button>
                                                            <span>12:00</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mt-2">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> Functions and Scope
                                                        </span>
                                                        <div>
                                                            <button className="btn btn-warning btn-sm me-2">Preview</button>
                                                            <span>10:00</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mt-2">
                                                        <span>
                                                            <i className="bi bi-play-circle"></i> DOM Manipulation
                                                        </span>
                                                        <div>
                                                            <span>18:00</span>
                                                            <i className="bi bi-lock-fill"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>



                    </div>
















                </Tab>



                <Tab eventKey="Instructor" title="Instructor">
                    <div className='container-fluid'>
                        <div className='container mt-3 pt-4  '>
                            <div className='d-flex instructor-body  flex-row'>
                                <img src='https://uiparadox.co.uk/templates/teach-me/assets/media/course/tutor-1.png' alt='' className='img-fluid'></img>
                                <div className=' instructor-content justify-content-center gap-3 text-left ms-5 d-flex flex-column'>
                                    <h3>John Doe</h3>
                                    <h4>Design Teacher</h4>
                                    <p>

                                        Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar congue dictum enim

                                        rutrum orci eu. Elit adipiscing auctor augue.</p>

                                    <ul class="list-unstyled m-0 social-icons d-flex flex-row align-items-center gap-2">
                                        <li>
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M12.2362 24.1796C12.1567 24.1796 12.0773 24.1796 11.9973 24.1793C10.116 24.1838 8.37781 24.136 6.68738 24.0331C5.13757 23.9388 3.7229 23.4032 2.59607 22.4844C1.50879 21.5978 0.766296 20.399 0.389282 18.9217C0.0611572 17.6356 0.0437622 16.3731 0.0270996 15.152C0.0150146 14.2758 0.00256348 13.2376 0 12.1818C0.00256348 11.1216 0.0150146 10.0834 0.0270996 9.20727C0.0437622 7.98632 0.0611572 6.72381 0.389282 5.43749C0.766296 3.9602 1.50879 2.76141 2.59607 1.87481C3.7229 0.955987 5.13757 0.420404 6.68756 0.326105C8.37799 0.223382 10.1166 0.175409 12.0018 0.179986C13.8836 0.175958 15.6213 0.223382 17.3117 0.326105C18.8615 0.420404 20.2762 0.955987 21.403 1.87481C22.4905 2.76141 23.2328 3.9602 23.6098 5.43749C23.9379 6.72363 23.9553 7.98632 23.972 9.20727C23.9841 10.0834 23.9967 11.1216 23.9991 12.1774V12.1818C23.9967 13.2376 23.9841 14.2758 23.972 15.152C23.9553 16.3729 23.9381 17.6354 23.6098 18.9217C23.2328 20.399 22.4905 21.5978 21.403 22.4844C20.2762 23.4032 18.8615 23.9388 17.3117 24.0331C15.6929 24.1316 14.0299 24.1796 12.2362 24.1796ZM11.9973 22.6928C13.8479 22.6972 15.5471 22.6503 17.1978 22.55C18.3697 22.4787 19.752 21.7101 20.5844 21.0313C21.3538 20.4038 21.8837 19.5381 22.1593 18.4581C22.4325 17.3875 22.4482 16.238 22.4634 15.1263C22.4753 14.256 22.4878 13.2252 22.4903 12.1796C22.4878 11.1339 22.4753 10.1032 22.4634 9.2329C22.4482 8.12127 22.4325 6.97173 22.1593 5.90093C21.8837 4.82098 21.3538 3.95525 20.5844 3.32775C19.752 2.64916 18.3697 1.903 17.1978 1.83177C15.5471 1.73125 13.8479 1.68492 12.0016 1.68895C10.1514 1.68456 8.45196 1.73675 6.80127 1.83728C5.62939 1.9085 4.37526 2.41108 3.54286 3.08967C2.77346 3.71717 2.10105 4.82098 1.82548 5.90093C1.55229 6.97173 1.53654 8.12109 1.52134 9.2329C1.50944 10.1039 1.49699 11.1354 1.49443 12.1818C1.49699 13.2237 1.50944 14.2553 1.52134 15.1263C1.53654 16.238 1.55229 17.3875 1.82548 18.4581C2.10105 19.5381 2.63096 20.4038 3.40037 21.0313C4.23277 21.7099 5.62939 22.4787 6.80127 22.55C8.45196 22.6505 10.1517 22.6974 11.9973 22.6928ZM11.9526 18.039C8.72186 18.039 6.0932 15.4105 6.0932 12.1796C6.0932 8.94872 8.72186 6.32024 11.9526 6.32024C15.1835 6.32024 17.8119 8.94872 17.8119 12.1796C17.8119 15.4105 15.1835 18.039 11.9526 18.039ZM12.0016 7.68458C9.36718 7.68458 7.51314 9.53861 7.51314 12.1774C7.51314 14.3743 9.17436 16.6927 11.9757 16.6927C14.1728 16.6927 16.457 14.6113 16.457 12.1774C16.457 9.98052 14.781 7.68458 12.0016 7.68458ZM18.4682 4.44524C17.6916 4.44524 17.0619 5.07476 17.0619 5.85149C17.0619 6.62823 17.6916 7.25774 18.4682 7.25774C19.2449 7.25774 19.8744 6.62823 19.8744 5.85149C19.8744 5.07476 19.2449 4.44524 18.4682 4.44524Z" fill="#0C0C0D"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M14.242 10.342L22.9844 0.179688H20.9128L13.3217 9.00352L7.25876 0.179688H0.265869L9.43423 13.5229L0.265869 24.1797H2.33766L10.354 14.8614L16.7569 24.1797H23.7498L14.2415 10.342H14.242ZM11.4044 13.6404L10.4755 12.3118L3.08416 1.7393H6.26631L12.2312 10.2716L13.1601 11.6003L20.9137 22.691H17.7316L11.4044 13.641V13.6404Z" fill="#0C0C0D"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M12.0469 24.1797C18.653 24.1797 24 18.8336 24 12.2266C24 5.64374 18.6753 0.179688 12.0469 0.179688C5.44611 0.179688 0 5.62213 0 12.2266C0 18.8608 5.47064 24.1797 12.0469 24.1797ZM5.87732 20.8149C6.74872 17.4941 9.85291 14.7922 13.8234 13.5958C14.7545 16.3428 15.3292 19.2439 15.5037 22.191C14.4203 22.5678 13.2572 22.7734 12.0469 22.7734C9.7489 22.7734 7.61865 22.0474 5.87732 20.8149ZM16.8745 21.6019C16.6648 18.7343 16.1049 15.9368 15.2036 13.2485C17.6506 12.7506 20.2018 12.8444 22.52 13.4713C22.1012 17.0164 19.9178 20.0285 16.8745 21.6019ZM13.9206 9.99341C16.3065 9.10425 18.8361 7.6297 20.2117 5.4989C21.6628 7.28784 22.5482 9.56055 22.5914 12.0369C20.0967 11.4112 17.361 11.3445 14.7222 11.907C14.4668 11.24 14.2086 10.6257 13.9206 9.99341ZM19.2151 4.42902C18.0736 6.49371 15.5171 7.91443 13.3079 8.72119C12.0714 6.28882 10.5588 4.06995 8.79034 2.09625C9.8172 1.76538 10.9114 1.58594 12.0469 1.58594C14.8123 1.58594 17.332 2.66589 19.2151 4.42902ZM7.39819 2.65656C9.18073 4.57697 10.7076 6.77643 11.9425 9.16504C8.85846 10.0515 5.24158 10.3543 1.65802 9.92328C2.367 6.72296 4.52106 4.05988 7.39819 2.65656ZM1.4458 11.3143C5.28589 11.7825 9.20398 11.4515 12.5682 10.446C12.8428 11.0421 13.1003 11.6481 13.3392 12.2635C9.47516 13.4349 5.97491 16.0738 4.69958 19.8485C2.67151 17.927 1.40625 15.2205 1.40625 12.2266C1.40625 11.9193 1.42017 11.6152 1.4458 11.3143Z" fill="#0C0C0D"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M5.64368 7.71082H1.125C0.736633 7.71082 0.421875 8.02576 0.421875 8.41394V23.4766C0.421875 23.8649 0.736633 24.1797 1.125 24.1797H5.64368C6.03204 24.1797 6.3468 23.8649 6.3468 23.4766V8.41394C6.3468 8.02576 6.03204 7.71082 5.64368 7.71082ZM4.94055 22.7734H1.82812V9.11707H4.94055V22.7734Z" fill="#0C0C0D"></path>
                                                    <path d="M3.38452 0.179688C1.75085 0.179688 0.421875 1.50867 0.421875 3.14197C0.421875 4.77563 1.75085 6.10443 3.38452 6.10443C5.01801 6.10443 6.3468 4.77545 6.3468 3.14197C6.3468 1.50867 5.01801 0.179688 3.38452 0.179688ZM3.38452 4.69818C2.52631 4.69818 1.82812 4.00018 1.82812 3.14197C1.82812 2.28394 2.52631 1.58594 3.38452 1.58594C4.24255 1.58594 4.94055 2.28394 4.94055 3.14197C4.94055 4.00018 4.24255 4.69818 3.38452 4.69818Z" fill="#0C0C0D"></path>
                                                    <path d="M16.9411 7.61139C15.8723 7.61139 14.8189 7.86902 13.8755 8.35095C13.8435 7.99225 13.5423 7.71082 13.1752 7.71082H8.65613C8.26794 7.71082 7.953 8.02576 7.953 8.41394V23.4766C7.953 23.8649 8.26794 24.1797 8.65613 24.1797H13.1752C13.5635 24.1797 13.8783 23.8649 13.8783 23.4766V15.1921C13.8783 14.1265 14.7455 13.2595 15.8112 13.2595C16.8768 13.2595 17.7437 14.1265 17.7437 15.1921V23.4766C17.7437 23.8649 18.0586 24.1797 18.4468 24.1797H22.9656C23.354 24.1797 23.6688 23.8649 23.6688 23.4766V14.3391C23.6688 10.6293 20.6508 7.61139 16.9411 7.61139ZM22.2625 22.7734H19.1501V15.1921C19.1501 13.351 17.6523 11.8532 15.8113 11.8532C13.97 11.8532 12.472 13.351 12.472 15.1921V22.7734H9.35944V9.11707H12.472V9.63654C12.472 9.90698 12.6271 10.1534 12.871 10.2704C13.1147 10.3875 13.4041 10.3541 13.6152 10.1851C14.5673 9.42139 15.7176 9.01764 16.9411 9.01764C19.8754 9.01764 22.2625 11.4048 22.2625 14.3391V22.7734Z" fill="#0C0C0D"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>








                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>



                <Tab eventKey="Rating" title="Rating" onEnter={() => setActive(true)}>
                    <div className="container my-5 " style={{ fontFamily: 'sans-serif', color: '#45474F' }}>
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <h1 className="display-4">4.8</h1>
                                <p className="review-stars">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </p>
                                <p>20 Reviews</p>
                            </div>
                            <div className="col-md-9">
                                <h5>Average Customer Rating</h5>
                                <div className="d-flex align-items-center">
                                    <div className="rating-bar w-75">
                                        <div className="rating-bar-fill" id="bar-5" style={{ width: '0%', backgroundColor: '#007bff', height: '100%' }}></div>
                                    </div>
                                    <div className="rating-percentage">90%</div>
                                </div>
                                <div className="d-flex align-items-center my-2">
                                    <div className="rating-bar w-75">
                                        <div className="rating-bar-fill" id="bar-4" style={{ width: '0%', backgroundColor: '#007bff', height: '100%' }}></div>
                                    </div>
                                    <div className="rating-percentage">70%</div>
                                </div>
                                <div className="d-flex align-items-center my-2">
                                    <div className="rating-bar w-75">
                                        <div className="rating-bar-fill" id="bar-3" style={{ width: '0%', backgroundColor: '#007bff', height: '100%' }}></div>
                                    </div>
                                    <div className="rating-percentage">65%</div>
                                </div>
                                <div className="d-flex align-items-center my-2">
                                    <div className="rating-bar w-75">
                                        <div className="rating-bar-fill" id="bar-2" style={{ width: '0%', backgroundColor: '#007bff', height: '100%' }}></div>
                                    </div>
                                    <div className="rating-percentage">50%</div>
                                </div>
                                <div className="d-flex align-items-center my-2">
                                    <div className="rating-bar w-75">
                                        <div className="rating-bar-fill" id="bar-1" style={{ width: '0%', backgroundColor: '#007bff', height: '100%' }}></div>
                                    </div>
                                    <div className="rating-percentage">30%</div>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-5">
                            <h5>Reviews</h5>
                            <div className="media my-4 auth-1">
                                <img src="https://uiparadox.co.uk/templates/teach-me/assets/media/user/blog-user-1.png" alt="profile" className="mr-3 img-fluid" />
                                <div className="media-body">
                                    <h6 className="mt-0">William Roberts <small className="text-muted">08 July, 2024</small></h6>
                                    <p className="review-stars">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Lectus massa massa et nisl ornare amet sed. Venenatis egestas massa pharetra nunc quam urna donec in. Quis non a tincidunt tortor commodo.</p>
                                </div>
                            </div>

                            <div className="media my-4 auth-2">
                                <img src="https://uiparadox.co.uk/templates/teach-me/assets/media/user/blog-user-2.png" alt="profile" className="mr-3 img-fluid" />
                                <div className="media-body">
                                    <h6 className="mt-0">Elizabeth Carter <small className="text-muted">08 July, 2024</small></h6>
                                    <p className="review-stars">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Lectus massa massa et nisl ornare amet sed. Venenatis egestas massa pharetra nunc quam urna donec in. Quis non a tincidunt tortor commodo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* form for ratings */}

                    <div class="container mt-5">
                        <h3 className='fw-500 fs-3 mb-4'>Add a Review</h3>
                        <p>Your email address will not be published. Required fields are marked.</p>

                        <form id="reviewForm">

                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required></input>
                                <div class="invalid-feedback">This field is required.</div>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Your Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" required></input>
                                <div class="invalid-feedback">This field is required.</div>
                            </div>

                            <div class="mb-3 rating">
                                <p >please rate here...</p>
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label for="star5">5 stars</label>
                                <input type="radio" id="star4" name="rating" value="4" />
                                <label for="star4">4 stars</label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                <label for="star3">3 stars</label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                <label for="star2">2 stars</label>

                                <input type="hidden" name="rating" id="rating" required></input>
                                <div class="invalid-feedback">Please give a rating.</div>
                            </div>

                            <div class="mb-3">
                                <label for="comment" class="form-label"></label>
                                <textarea class="form-control" id="comment" name="comment" rows="4" placeholder="Write Your Comments..." required></textarea>
                                <div class="invalid-feedback">This field is required.</div>
                            </div>

                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="agree" name="agree" required></input>
                                <label class="form-check-label" for="agree">I accept the TeachMe terms and have read the privacy policy.</label>
                                <div class="invalid-feedback">You must accept the terms.</div>
                            </div>

                            <button type="submit" class="btn btn-success">Submit Review</button>
                        </form>
                    </div>






                </Tab>

            </Tabs>

        </>
    );
}

export default Overview;
