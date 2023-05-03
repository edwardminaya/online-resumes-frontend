export function Education(props) {
  return (
    <div>
      <h2>Education</h2>
      {props.educations.map((education) => (
        <div key={education.id}>
          <h3>{education.university_name}</h3>
          <p>
            Attended: {education.start_date} — {education.end_date}
          </p>
          <p>Description: {education.details}</p>
        </div>
      ))}
    </div>
  );
}
