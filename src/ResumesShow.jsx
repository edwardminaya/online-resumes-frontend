/* eslint-disable react/prop-types */
export function ResumesShow(props) {
  console.log(props);
  return (
    <div id="modal">
      <h1>
        {props.resume.first_name} {props.resume.last_name}
      </h1>
      {/* Banner */}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={props.resume.image_url} />
          </div>
          <div className="col-6" id="links">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={props.resume.website_url} target="_blank" rel="noreferrer">
                  Website
                </a>
              </li>
              <li className="list-group-item">
                <a href={props.resume.linkedin_url} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="list-group-item">
                <a href={props.resume.website_url} target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
              <li className="list-group-item">
                <a href={`http://twitter.com/${props.resume.twitter_handle}`} target="_blank" rel="noreferrer">
                  {props.resume.twitter_handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="card">
        <p>
          <a href={`mailto:${props.resume.email}`}>{props.resume.email}</a> | {props.resume.phone_number}
        </p>
        <p>
          <strong>Bio: </strong>
          {props.resume.short_bio}
        </p>
      </div>

      {/* Experiences */}
      <h3>Experience</h3>
      <div className="card" id="experiences">
        {props.resume.experiences.map((experience) => (
          <div className="container" key={experience.id}>
            <div className="row">
              <div className="col">
                <p>
                  <strong>Job Title:</strong> {experience.job_title}
                </p>
              </div>
              <div id="dates" className="col">
                <p>
                  <strong>
                    {experience.start_date} - {experience.end_date}
                  </strong>
                </p>
              </div>
              <p id="company">{experience.company_name}</p>
              <ul id="list">
                <li>{experience.details}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Capstones */}
      <div>
        <h3>Capstones</h3>
        {props.resume.capstones.map((capstone) => (
          <div key={capstone.id} className="card">
            <h3>
              <img src={capstone.screenshot} />
              <a href={capstone.url} target="_blank" rel="noreferrer">
                {capstone.name}
              </a>
            </h3>
            <p>{capstone.description}</p>
          </div>
        ))}
      </div>

      {/* Education  */}
      <div>
        <h3>Education</h3>
        {props.resume.educations.map((education) => (
          <div key={education.id} className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{education.university_name}</h4>
              </li>
              <li className="list-group-item">
                <strong>Attended:</strong> {education.start_date} — {education.end_date}
              </li>
              <li className="list-group-item">
                <strong>Description:</strong> {education.details}
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Skills  */}
      <h3>Skills</h3>
      <div className="card">
        <ul className="list-group list-group-flush">
          {props.resume.skills.map((skill) => (
            <li key={skill.id} className="list-group-item">
              <strong>{skill.name}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
