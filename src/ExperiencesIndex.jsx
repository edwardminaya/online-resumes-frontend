export function ExperiencesIndex(props) {
  return (
    <div>
      <h1>Experience</h1>
      {props.experiences.map((experience) => (
        <div key={experience.id}>
          <p>Title: {experience.job_title}</p>
          <p>Company: {experience.company_name}</p>
          <p>
            Start Date: {experience.start_date} - End Date: {experience.end_date}
          </p>
          <p>{experience.details}</p>
        </div>
      ))}
    </div>
  );
}
