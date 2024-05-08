import React from "react";
import emailjs from 'emailjs-com';
import {FaMapMarkerAlt} from "react-icons/fa";


import Meta from "../../components/Meta/Meta";
import "./Contact.scss";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_USER_ID;
        console.log(SERVICE_ID, TEMPLATE_ID, USER_ID)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                window.alert("Email sent.")
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <Meta title={"CONTACT US"}/>
            <section className="contact-wrapper">
                <div className="py-5">
                    <h2 className="heading fw-bold white mb-0 my-5">CONTACT US</h2>
                </div>
                <div className="container-lg py-5">
                  <div className="row">

                    <div className="col-md-2"></div>


                    <div className="col-12 col-md-8 my-auto ps-md-5 mt-4 mt-md-0">
                      <div className="text-center">
                        <h3>Let's Connect Us</h3>
                      </div>
                      <form onSubmit={sendEmail}>
                        <p className="fw-bold text-primary mb-2">Name</p>
                        <input
                            type="text"
                            name="user_name"
                            className="form-control mb-3"
                            id="validationTooltip01"
                            placeholder="Full name"
                            required
                        />
                        <p className="fw-bold text-primary mb-2">Email</p>
                        <input
                            type="email"
                            name="user_email"
                            className="form-control mb-3"
                            placeholder="Your E-mail"
                            id="validationTooltipUsername"
                            aria-describedby="validationTooltipUsernamePrepend"
                            required
                        />
                        <p className="fw-bold text-primary mb-2">Phone</p>
                        <input
                            type="number"
                            name="user_phone"
                            className="form-control mb-3"
                            placeholder="Enter your phone number"
                            id="validationTooltipUsername"
                            aria-describedby="validationTooltipUsernamePrepend"
                            required
                        />
                        <p className="fw-bold text-primary mb-2">Message</p>
                        <input
                            type="text"
                            name="user_message"
                            className="form-control pt-5 pb-5 text-center mb-3"
                            placeholder="Type your message here..."
                            id="validationTooltip05"
                            required
                        />
                        <p className="agreement px-4 text-center">
                          By submitting this form , I agree to receive communication
                          from Intelsense Software in connection with enquery.My information
                          will be processed in accordance with Intelsense Software's Privacy
                          Policy.
                        </p>
                        <button
                            className="button2 mt-4 hvr-grow d-block mx-auto"
                            type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>

                    <div className="col-12 col-md-12">
                      <div className="text-center my-4">

                      </div>
                      <div className="info">
                        <FaMapMarkerAlt className="fs-1"/>
                        <h3 className="sub-heading text-start my-4">DHAKA OFFICE</h3>
                        <p className="mb-0">
                          <strong>Address: </strong> House-60, Road-03, Block - B, Niketon, Gulshan-1, Dhaka
                        </p>
                        <p className="mb-0">
                          <strong>Email us at: </strong> info@intelsense.ai
                        </p>
                        <p>
                          <strong>Phone: </strong> +8801632305448
                        </p>
                      </div>
                      <div className="map">
                        <iframe
                            className="shadow-sm"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.102720640843!2d90.40753300346236!3d23.773195517369402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7829894dd41%3A0x7191fa7e24aa22b9!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1682589984033!5m2!1sen!2sbd"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>


                  </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
