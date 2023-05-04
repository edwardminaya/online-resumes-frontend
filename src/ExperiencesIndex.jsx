/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
export function ExperiencesIndex(props) {
  return (
    <div>
      <h2>Experience</h2>
      {props.students.map((student) => (
        <div key={student.id} className="card">
          {student.experiences.map((experience) => (
            <div>
              <h3>{experience.job_title}</h3>
              <h3>{experience.company_name}</h3>
              <h4>
                {experience.start_date} - {experience.end_date}
              </h4>
              <div></div>
              <p>{experience.details}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
