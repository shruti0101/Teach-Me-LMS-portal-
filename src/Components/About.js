import HeaderComponent from '../Components/page_header/HeaderComponent';
import './About.css'
import BrandSlider from './BrandSlider';
import TeachersList from './TeachersList';
import TestimonialSlider from './Testimaonal';


function About() {
    return (
        <>
            <HeaderComponent item1='About Us'></HeaderComponent>


            <div className='container-fluid mb-5'>
                <div className='container mt-5 pt-4'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-12'>
                            <div className='about-img'>
                                <img src='https://uiparadox.co.uk/templates/teach-me/assets/media/hero/hero-banner.png' alt='' className='img-fluid'></img>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12 col-12 '>
                            <span style={{ color: '#004439', fontFamily: 'sans-serif' }} className='fw-bold mb-3 '>ABOUT US</span>
                            <h3 className='fs-1 fw-bold pt-3'>

                                Explore an Innovative Method to Boost Your Skills</h3>
                            <p className='about-content'>Lorem ipsum dolor sit amet consectetur. Nunc nibh id ac ac massa rhoncus. Montes posuere in nulla volutpat aliquet. Odio dui ullamcorper praesent eget. Bibendum mauris a quam mauris egestas velit quis tincidunt nibh. Sollicitudin molestie lorem lectus convallis tempus. Rhoncus venenatis tempor adipiscing quis mollis diam elit et.

                                Lorem ipsum dolor sit amet consectetur. Nunc nibh id ac ac massa rhoncus. Montes posuere in nulla volutpat aliquet. Odio dui ullamcorper praesent eget. Bibendum mauris a quam mauris egestas velit quis tincidunt nibh. Sollicitudin molestie lorem lectus convallis tempus. Rhoncus venenatis tempor adipiscing quis mollis diam elit et.</p>

                                

                            <div className='about-progress mt-3 pt-4'>
                                <div className="mb-3">
                                    <span className="progress-label">Skill Mastery Levels</span>
                                    <span className="progress-percentage">90%</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <span className="progress-label">Learning Milestones</span>
                                    <span className="progress-percentage">70%</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }}></div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <span className="progress-label">Digital Proficiency Journey</span>
                                    <span className="progress-percentage">65%</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>


                </div>
            </div>
<div className='mb-1'>   <TeachersList ></TeachersList></div>
        

<div className='mb-4'><BrandSlider></BrandSlider></div>
            <TestimonialSlider></TestimonialSlider>

        </>
    );
}

export default About;