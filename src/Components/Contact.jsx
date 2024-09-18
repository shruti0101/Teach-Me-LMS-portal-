import React, { useState } from 'react';
import HeaderComponent from '../Components/page_header/HeaderComponent';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make sure template parameters match what EmailJS expects
        emailjs.send(
            'service_z2ym1um', // Replace with your EmailJS Service ID
            'template_w4kjmf4', // Replace with your EmailJS Template ID
            {
                firstName: formData.firstName, // Match your EmailJS template variable names
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
            },
            'DqDJ-VijVLN4WeSKq' // Replace with your EmailJS User ID (Public Key)
        )
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Failed to send email. Error:', error); // Log detailed error for debugging
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <>
            <HeaderComponent item1="Contact Us" />
            <section className="contact-bg" style={{ fontFamily: 'sans-serif' }}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 mt-3 pt-3">
                                <h4 className="fs-1 pt-4 fw-500">Contact Information</h4>
                                <div className="contact-icon d-flex flex-column mt-4 pt-2">
                                    <div className="icon-bg d-flex gap-3">
                                        <i className="bi bi-telephone"></i>
                                        <h4>Phone Number:</h4>
                                    </div>
                                    <p className="contact-info mx-5">
                                    +91 77079-34521
                                    </p>
                                    <div className="icon-bg d-flex gap-3 mt-3">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email Address:</h4>
                                    </div>
                                    <p className="contact-info mx-5">info@mitishasoftech.in</p>
                                    <div className="icon-bg d-flex gap-3 mt-3">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                    </div>
                                    <p className="contact-info mx-5">
                                    First Floor, F426, Phase 8B, Industrial Area, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 160055
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 mt-4 pt-4">
                                <div className="container mt-2">
                                    <h1 className="fs-1">What can we do for you?</h1>
                                    <p style={{ color: '#61636A' }}>
                                        Your email address is safe with us. Required fields are noted with <strong>*</strong>
                                    </p>
                                    <form id="contactForm" onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="firstName" className="form-label">
                                                    First Name
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-user"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="First Name"
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label">
                                                    Email Address
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-envelope"></i>
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone" className="form-label">
                                                    Phone Number
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-phone"></i>
                                                    </span>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Phone Number"
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="subject" className="form-label">
                                                    Subject
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-file-alt"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label">
                                                    Write Your Message
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    rows="4"
                                                    name="message"
                                                    placeholder="Write Your Message"
                                                    required
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="remember"
                                                    />
                                                    <label className="form-check-label" htmlFor="remember">
                                                        Remember my details for future comments.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-success">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
