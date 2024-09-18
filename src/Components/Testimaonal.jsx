import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: 'Amanda Martinez',
      role: 'Student',
      rating: 5.0,
      course: 'Front-End Web Development',
      feedback: 'This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!',
      img: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Alexander Miller',
      role: 'Student',
      rating: 5.0,
      course: 'Advanced JavaScript',
      feedback: 'This course transformed my understanding of JavaScript. The practical projects were invaluable. Highly recommend!',
      img: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
      name: 'Daniel Hernandez',
      role: 'Student',
      rating: 5.0,
      course: 'UI/UX Design',
      feedback: 'This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!',
      img: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'Emma Watson',
      role: 'Student',
      rating: 5.0,
      course: 'React Development',
      feedback: 'The course structure was clear and concise. Highly recommend for anyone starting in web development.',
      img: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
      name: 'Emma Watson',
      role: 'Student',
      rating: 5.0,
      course: 'React Development',
      feedback: 'The course structure was clear and concise. Highly recommend for anyone starting in web development.',
      img: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
      name: 'Emma Watson',
      role: 'Student',
      rating: 5.0,
      course: 'React Development',
      feedback: 'The course structure was clear and concise. Highly recommend for anyone starting in web development.',
      img: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
      name: 'Emma Watson',
      role: 'Student',
      rating: 5.0,
      course: 'React Development',
      feedback: 'The course structure was clear and concise. Highly recommend for anyone starting in web development.',
      img: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
      name: 'John Doe',
      role: 'Student',
      rating: 5.0,
      course: 'Full-Stack Development',
      feedback: 'The practical examples were great! Highly recommend!',
      img: 'https://randomuser.me/api/portraits/men/52.jpg'
    }
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
<div className='container-fluid'>

<div className="testimonial-slider-container container">
<div>
<h2 className="mb-4">What Our Students Say</h2>
<p className="r mb-5">Insights from Our Students: Hear Their Experiences and Success Stories.</p>
</div>
<div className="testimonial-slider-wrapper">
  <Carousel
    activeIndex={index}
    onSelect={handleSelect}
    controls={false}
    indicators={false}
    interval={null} // Disable auto sliding
  >
    {testimonials.slice(0, testimonials.length - 2).map((_, i) => (
      <Carousel.Item key={i}>
        <div className="testimonial-cards-wrapper d-flex justify-content-center">
          {testimonials.slice(i, i + 3).map((testimonial, idx) => (
            <Card className="testimonial-card mx-2" key={idx}>
              <Card.Body>
                <div className="d-flex">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-circle testimonial-image"
                  />
                  <div className="testimonial-info ms-3 ">
                    <h5 className='card-title mb-1'>{testimonial.name}</h5>
                    <p className='mb-2'>{testimonial.role}</p>
                    <div className="testimonial-rating mb-3">
                    
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                    <path d="M8.45211 1.15485C8.60114 0.692846 9.25478 0.692845 9.40382 1.15484L11.0452 6.24302C11.1118 6.44954 11.304 6.58952 11.521 6.58952H16.8401C17.3236 6.58952 17.5256 7.20748 17.1354 7.49301L12.826 10.6467C12.652 10.7741 12.5792 10.9986 12.6454 11.2037L14.29 16.302C14.4388 16.7633 13.91 17.1453 13.5188 16.859L9.22324 13.7154C9.04742 13.5868 8.80851 13.5868 8.63268 13.7154L4.33708 16.859C3.94593 17.1453 3.41714 16.7633 3.56594 16.302L5.21054 11.2037C5.27673 10.9986 5.20395 10.7741 5.02997 10.6467L0.720503 7.49301C0.330336 7.20748 0.532302 6.58952 1.01579 6.58952H6.33491C6.55192 6.58952 6.74415 6.44954 6.81077 6.24302L8.45211 1.15485Z" fill="#FD961E"></path>
                                                </svg>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                    <path d="M8.45211 1.15485C8.60114 0.692846 9.25478 0.692845 9.40382 1.15484L11.0452 6.24302C11.1118 6.44954 11.304 6.58952 11.521 6.58952H16.8401C17.3236 6.58952 17.5256 7.20748 17.1354 7.49301L12.826 10.6467C12.652 10.7741 12.5792 10.9986 12.6454 11.2037L14.29 16.302C14.4388 16.7633 13.91 17.1453 13.5188 16.859L9.22324 13.7154C9.04742 13.5868 8.80851 13.5868 8.63268 13.7154L4.33708 16.859C3.94593 17.1453 3.41714 16.7633 3.56594 16.302L5.21054 11.2037C5.27673 10.9986 5.20395 10.7741 5.02997 10.6467L0.720503 7.49301C0.330336 7.20748 0.532302 6.58952 1.01579 6.58952H6.33491C6.55192 6.58952 6.74415 6.44954 6.81077 6.24302L8.45211 1.15485Z" fill="#FD961E"></path>
                                                </svg>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                    <path d="M8.45211 1.15485C8.60114 0.692846 9.25478 0.692845 9.40382 1.15484L11.0452 6.24302C11.1118 6.44954 11.304 6.58952 11.521 6.58952H16.8401C17.3236 6.58952 17.5256 7.20748 17.1354 7.49301L12.826 10.6467C12.652 10.7741 12.5792 10.9986 12.6454 11.2037L14.29 16.302C14.4388 16.7633 13.91 17.1453 13.5188 16.859L9.22324 13.7154C9.04742 13.5868 8.80851 13.5868 8.63268 13.7154L4.33708 16.859C3.94593 17.1453 3.41714 16.7633 3.56594 16.302L5.21054 11.2037C5.27673 10.9986 5.20395 10.7741 5.02997 10.6467L0.720503 7.49301C0.330336 7.20748 0.532302 6.58952 1.01579 6.58952H6.33491C6.55192 6.58952 6.74415 6.44954 6.81077 6.24302L8.45211 1.15485Z" fill="#FD961E"></path>
                                                </svg>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                    <path d="M8.45211 1.15485C8.60114 0.692846 9.25478 0.692845 9.40382 1.15484L11.0452 6.24302C11.1118 6.44954 11.304 6.58952 11.521 6.58952H16.8401C17.3236 6.58952 17.5256 7.20748 17.1354 7.49301L12.826 10.6467C12.652 10.7741 12.5792 10.9986 12.6454 11.2037L14.29 16.302C14.4388 16.7633 13.91 17.1453 13.5188 16.859L9.22324 13.7154C9.04742 13.5868 8.80851 13.5868 8.63268 13.7154L4.33708 16.859C3.94593 17.1453 3.41714 16.7633 3.56594 16.302L5.21054 11.2037C5.27673 10.9986 5.20395 10.7741 5.02997 10.6467L0.720503 7.49301C0.330336 7.20748 0.532302 6.58952 1.01579 6.58952H6.33491C6.55192 6.58952 6.74415 6.44954 6.81077 6.24302L8.45211 1.15485Z" fill="#FD961E"></path>
                                                </svg>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                    <path d="M8.45211 1.15485C8.60114 0.692846 9.25478 0.692845 9.40382 1.15484L11.0452 6.24302C11.1118 6.44954 11.304 6.58952 11.521 6.58952H16.8401C17.3236 6.58952 17.5256 7.20748 17.1354 7.49301L12.826 10.6467C12.652 10.7741 12.5792 10.9986 12.6454 11.2037L14.29 16.302C14.4388 16.7633 13.91 17.1453 13.5188 16.859L9.22324 13.7154C9.04742 13.5868 8.80851 13.5868 8.63268 13.7154L4.33708 16.859C3.94593 17.1453 3.41714 16.7633 3.56594 16.302L5.21054 11.2037C5.27673 10.9986 5.20395 10.7741 5.02997 10.6467L0.720503 7.49301C0.330336 7.20748 0.532302 6.58952 1.01579 6.58952H6.33491C6.55192 6.58952 6.74415 6.44954 6.81077 6.24302L8.45211 1.15485Z" fill="#FD961E"></path>
                                                </svg>
                  
                    </div>
                  </div>
                </div>
                <hr className='mb-4' />

                <Card.Text className="mt-3 ">
                  <div className='fw-bold'>{testimonial.course}</div><br />
                  <p className='testimonal-feed  text-break'> {testimonial.feedback}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Carousel.Item>
    ))}
  </Carousel>

  {/* Custom Controls positioned in the top right corner */}
  <div className="top-right-navigation mt-sm-0 mt-48 d-sm-flex d-none">
    

    <button className='carousel-control-prev' type="button" className="btn btn-secondary btnnew"
    onClick={() => setIndex(index === 0 ? testimonials.length - 3 : index - 1)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
    <path d="M12.6455 23.9124C12.6455 20.9124 9.84551 16.9124 6.64551 16.9124M6.64551 16.9124C8.47884 16.9124 12.6455 15.9124 12.6455 9.91235M6.64551 16.9124H25.6455" stroke="white" stroke-width="2"></path>
</svg>
              </button>
  

    <button className='carousel-control-prev' type="button" className='btn btn-secondary btnnew'
    onClick={() => setIndex(index === testimonials.length - 3 ? 0 : index + 1)}>
 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path d="M19.3545 23.9124C19.3545 20.9124 22.1545 16.9124 25.3545 16.9124M25.3545 16.9124C23.5212 16.9124 19.3545 15.9124 19.3545 9.91235M25.3545 16.9124H6.35449" stroke="white" stroke-width="2"></path>
                                </svg>
              </button>
  </div>

  {/* Custom Indicators */}
  <div className="custom-indicators">
    {testimonials.slice(0, testimonials.length - 2).map((_, i) => (
     <button
     key={i}
     className={`indicator-btn ${index === i ? 'active' : ''}`}
     onClick={() => setIndex(i)}
   ></button>
    ))}
  </div>
</div>
</div>

</div>
    
  
  );
};

export default TestimonialSlider;
