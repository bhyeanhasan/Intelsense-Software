import React from 'react'
import { jobData } from '../../utils/JobData';
import { Link } from 'react-router-dom';

const AccordionItem = ({ itemTitle, idx }) => {
    const jobs = jobData[itemTitle] || [];
    const maketitle=(mainhead,subhead)=>{  
        const final =mainhead.toLowerCase()+' '+subhead.replace(/\s/g, '-').toLowerCase()
        return final.replace(/\s/g, '/')
    }
    

console.log('itme',itemTitle)
    console.log('jobs',jobs)

    let content = null;
    if (jobs && jobs.length > 0) {
        content = jobs.map((job, indx) => (<>
            <div key={indx} className="col-12 d-flex justify-content-between">
                <h6>{job.title}</h6>
                <p className="d-flex justify-content-end">
                    <span className="bg-light rounded-2 px-2 ms-2">{job.type}</span>
                    <span className="bg-light rounded-2 px-2 ms-2">{job.type2}</span>
                    <Link
                        to={`/jobs/${maketitle(itemTitle,job.title)}`}
                        className="px-2 ms-2">
                        details
                    </Link>
                </p>
            </div>
            <hr />
        </>)
        );
    }
    if (jobs && jobs.length === 0) {
        content = <>
            <div className="col-12 d-flex justify-content-between">
                <h6>No job available.</h6>
            </div>
        </>
    }

    return (
        <>
            <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse-${idx}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse-${idx}`}
                    >
                        {itemTitle}
                    </button>
                </h2>
                <div
                    id={`flush-collapse-${idx}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body rounded-1">
                        <div className="row">
                            {content}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AccordionItem;