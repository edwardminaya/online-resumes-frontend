export function ExperiencesIndex(props) {
  return (
    <div>
      <h2>Experience</h2>
      {props.experiences.map((experience) => (
        <div key={experience.id} className="card">
          <ul className="list-group list-group-flush">
            <li>
              <h3>{experience.job_title}</h3>
            </li>
            <li className="list-group-item">Company: {experience.company_name}</li>
            <li className="list-group-item">
              Start Date: {experience.start_date} - End Date: {experience.end_date}
            </li>
            <li className="list-group-item">{experience.details}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
