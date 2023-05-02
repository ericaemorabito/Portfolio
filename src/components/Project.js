import React from "react";
import "../styles/project.css";
import link from '../icons/link.svg'
import github from '../icons/github-line.svg'

const Project = ({ project }) => {
  const portfolioData = {
    1: {
      title: 'first ttest title',
      description: 'test description',
      tech1: 'JavaScript',
      tech2: 'React',
      tech3: 'MongoDB',
      link: '#',
      github: '#',
      youtube: '#'
    }
  }

  let data = null;
  
  if (project = 'second'){
    data = portfolioData[1]
    console.log(data);
    console.log(data.title)
  } 
  
  return (
    <>
      <h2 id="project-title">{data.title}</h2>
      <div className="project-description-area">
        <p id="project-description-text">{data.description}</p>
      </div>
      <div className="project-tech-area">
        <ul id="project-tech-list">
          {/* {data.tech.map((tech) => {<li className="project-tech">{tech}</li>})} */}
          <li className="project-tech">{data.tech1}</li>
          <li className="project-tech">{data.tech2}</li>
          <li className="project-tech">{data.tech3}</li>

        </ul>
      </div>
      <div className="project-link-area">
        <button className="project-link" onClick={()=> {console.log('link opened')}}>
          <img className="project-link-icon" src={link} alt='open link icon'>
          </img>
          {/* Site */}
          </button>
        <button className="project-link" onClick={()=> {console.log('github opened')}}>
        <img className="project-link-icon" src={github} alt='github cat icon'>
          </img>
          {/* Github */}
          </button>
      </div>
    </>
  );
};

export default Project;
