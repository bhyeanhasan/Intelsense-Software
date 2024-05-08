import React from "react";
import ReactMarkdown from 'react-markdown';
// import jobImg1 from "../../Assets/images/jobs/seniorBackendDeveloper.jpeg";
import "./Job.scss";
import { useParams } from "react-router-dom";
import { jobData } from "../../utils/JobData";
import Meta from "../../components/Meta/Meta";
const Job = () => {
  const { jobitem, jobtitle } = useParams();
  const maketitle = (subhead) => subhead?.replace(/\s/g, '-')?.toLowerCase();

// Get the jobs array for the specified jobitem
const jobsArray = jobData[jobitem];

// Check if the jobtitle matches any of the titles in the jobsArray
const matchingJobs = jobsArray.filter(item => maketitle(item.title) === jobtitle);

// console.log(matchingJobs[0]);

const matchingJobsobj=matchingJobs[0]

console.log(matchingJobsobj)
  return (
    <>
    {matchingJobsobj&&
    <>
    <Meta title={matchingJobsobj.title} socialimage={matchingJobsobj.jobimg}/>
    <section className="job-intro py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 d-flex justify-content-center">
              <img className="img-fluid" src={matchingJobsobj.jobimg} alt="" />
            </div>
          </div>
          <div className="row justify-content-center py-2 py-md-4">
            <div className="col-12 d-flex justify-content-between flex-wrap">
              <p><span className="fs-5">Published:</span> {matchingJobsobj.Published}</p>
              <p><span className="fs-5">Deadline:</span> {matchingJobsobj.Deadline}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container job-content bg-white py-5 px-5 mb-5">
          <h1>{matchingJobsobj.title}</h1>
          <div className="row">
            <div className="col-12">
            <ReactMarkdown >{matchingJobsobj.details}</ReactMarkdown>
                </div>
          </div>
        </div>
      </section>
    </>}
      
    </>
  );
};

export default Job;
