/* eslint-disable react/prop-types */
export function ResumesShow(props) {
  console.log(props);
  return (
    <div id="modal">
      <h1>
        {props.resume.first_name} {props.resume.last_name}
      </h1>
        <img src={props.resume.image_url} />
        <div className="card">
        <h3>{props.resume.email}</h3>
        <h3>{props.resume.phone_number}</h3>
        <p><strong>Bio: </strong>{props.resume.short_bio}</p>
        </div>

      <div className="experiences">
        <h2>Experience</h2>
        {props.resume.experiences.map((experience) => (
          <div className="container" key={experience.id}>
            <div className="row">
              <div className="col">
                <p>Job Title: {experience.job_title}</p>
              </div>
              <div id="dates" className="col">
                <p>
                  {experience.start_date} - {experience.end_date}
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
      {props.resume.educations.map((education) => (
        <div key={education.id} className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{education.university_name}</h3>
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
      {props.resume.skills.map((skill) => (
        <div key={skill.id}>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
