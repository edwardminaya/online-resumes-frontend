/* eslint-disable react/prop-types */
export function ResumesShow(props) {
  console.log(props);
  return (
    <div id="modal">
      <h1>
        {props.resume.first_name} {props.resume.last_name}
      </h1>

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
        <div key={capstone.id}>
          <p>{capstone.name}</p>
        </div>
      ))}
      {props.resume.educations.map((education) => (
        <div key={education.id}>
          <p>{education.degree}</p>
        </div>
      ))}
      {props.resume.skills.map((skill) => (
        <div key={skill.id}>
          <p>{skill.job_title}</p>
        </div>
      ))}
    </div>
  );
}
