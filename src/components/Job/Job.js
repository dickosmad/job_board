import React, { useEffect, useState } from "react";
import "./Job.scss";
import datas from "../../data";
import SearchBar from "../SearchBar/SearchBar";

export default function Job() {
  const [jobs, setJobs] = useState([]);
  const [text, setText] = useState([]);
  useEffect(() => {
    setJobs(datas);
  }, []);
  console.log(jobs);
  console.log(jobs.languages);
  const handleFilterInput = (e) => {
    setText([...text, e.target.innerText]);
  };
  //   let { first, ...rest } = jobs.languages;

  const filterJobs = jobs.filter((job) => {
    let [first, ...rest] = job.languages;
    console.log(first, rest);
    if (text.length === 0) {
      return job;
    }
    console.log(job);
    return (
      job.level.includes(text) ||
      job.position.includes(text) ||
      first.includes(text) ||
      rest.includes(text)
    );
  });
  console.log("filter Jobs", filterJobs);

  return (
    <>
      <SearchBar info={text} />
      {filterJobs &&
        filterJobs.map((job) => {
          return (
            <div className="container" key={job.id}>
              <div className="job_post">
                <div className="logo">
                  <img src={job.logo} alt={job.company} />
                </div>
                <div className="job_infos">
                  <div className="job_title_infos">
                    <h4>{job.company}</h4>
                    {job.new && <p className="new">NEW !</p>}
                    {job.featured && <p className="featured">FEATURED</p>}
                  </div>
                  <div className="job_position">
                    <h3> {job.position} </h3>
                  </div>
                  <div className="job_post_date">
                    <ul>
                      <li className="day"> {job.postedAt} </li>
                      <li className="status"> {job.contract} </li>
                      <li className="place">{job.location} </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div onClick={handleFilterInput} className="skills">
                  <p className="skill">{job.role}</p>
                  <p className="skill">{job.level}</p>
                  {job &&
                    job.languages.map((language) => {
                      return <p className="skill">{language}</p>;
                    })}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
