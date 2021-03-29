import React, { useEffect, useState } from "react";
import "./Job.scss";
import datas from "../../data";
import SearchBar from "../SearchBar/SearchBar";

export default function Job() {
  const [jobs, setJobs] = useState([]);
  const [tagFilter, setTagFilter] = useState([]);
  useEffect(() => {
    setJobs(datas);
  }, []);
  // console.log(jobs);

  const handleFilterInput = (e) => {
    setTagFilter([...tagFilter, e.target.innerText]);
  };
  //   let { first, ...rest } = jobs.languages;

  const filterJobs = jobs.filter((job) => {
    let [language] = job.languages;
    let level = job.level;
    let role = job.role;
    let [tool] = job.tools;
    let tags = [role, level, tool, language];
    console.log("tags", tags);

    if (tagFilter.length === 0) {
      return job;
    }
    return tagFilter.every((t) => tags.includes(t));
  });
  //console.log("filter Jobs", filterJobs);
  const deleteFilter = (value) => {
    if (tagFilter === undefined) return;
    return setTagFilter(tagFilter.filter((tagFilter) => tagFilter !== value));
  };

  return (
    <>
      <SearchBar textTag={tagFilter} filters={deleteFilter} />
      {filterJobs &&
        filterJobs.map((job) => {
          return (
            <div
              className="container"
              style={
                job.featured
                  ? { borderLeft: "5px solid hsl(180, 29%, 50%)" }
                  : null
              }
              key={job.id}
            >
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
                  {job.tools &&
                    job.tools.map((tool) => {
                      return (
                        <p className="skill" key={tool}>
                          {tool}
                        </p>
                      );
                    })}
                  {job &&
                    job.languages.map((language) => {
                      return (
                        <p className="skill" key={language}>
                          {language}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
