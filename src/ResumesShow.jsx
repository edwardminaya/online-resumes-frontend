/* eslint-disable react/prop-types */
export function ResumesShow(props) {
  console.log(props);
  return (
    <div>
      <h1>
        {props.resume.first_name} {props.resume.last_name}
      </h1>

      {props.resume.experiences.map((experience) => (
        <div key={experience.id}>
          <p>{experience.job_title}</p>
        </div>
      ))}
      {props.resume.capstones.map((capstone) => (
        <div key={capstone.id}>
          <p>{capstone.name}</p>
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
          <p>{skill.job_title}</p>
        </div>
      ))}
    </div>
  );
}
