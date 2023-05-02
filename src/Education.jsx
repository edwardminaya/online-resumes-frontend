export function Education(props) {
  return (
    <div>
      <h2>Education</h2>
      {props.schools.map((school) => (
        <div key={school.id}>
          <h3>{school.school_name}</h3>
          <p>
            Attended: {school.start_date} — {school.end_date}
          </p>
          <p>Description: {school.details}</p>
        </div>
      ))}
    </div>
  );
}
