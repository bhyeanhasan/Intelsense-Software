import React from 'react';

import "./CareerOpportunity.scss"
import Internship from './Internship';
import { Link } from 'react-router-dom';
import { jobData } from '../../utils/JobData';
import AccordionItem from './AccordionItem';

const CareerOpportunity = () => {
    const jobCategories = Object.keys(jobData) || null;

    const content = jobCategories.map((jobCategory, idx) => <AccordionItem key={idx} idx={idx} itemTitle={jobCategory} />);
    
    return (
        <>
            <section className="career-opportunity py-5">
                <h1 className="fw-bold text-center text-white mb-5">CAREER OPPORTUNITIES</h1>

                <div className="container job-openings-container px-2 px-md-5 py-5 rounded-3">
                    <div className="row">
                        <div className="col col-md-4 d-flex justify-content-center align-items-center">
                            <h3 className='text-center fw-bold'>VACANCIES</h3>
                        </div>
                        <div className="col col-md-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        {content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Internships */}
                <Internship />

                <div className="row justify-content-center py-4">
                    <div className="col-12 col-md-8">
                        <h1 className='fw-bold text-center text-white'>
                            “I think AI is coming about and replacing routine jobs is pushing us to do what we should be doing anyway: the creation of more humanistic service jobs.”
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col col-md-10 rounded-5 px-2 py-4 book-place">
                        <p className='fs-3 fw-bold'>WANT TO TAKE A TOUR WITH INTELSENSE AI?</p>
                        <p className='fs-5'>We arrange a tri-monthly trip in the company to share our ideas, workflow and office environment with bright young minds</p>
                        <p className='mt-4'>
                            <Link
                                to={`/contact`}
                                className='bg-info white px-3 py-2 rounded-pill'
                            >BOOK YOUR PLACE</Link>
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CareerOpportunity