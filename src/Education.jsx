/* eslint-disable react/prop-types */
export function Education(props) {
  return (
    <div>
      <h2>Education</h2>
      {props.educations.map((education) => (
        <div key={education.id} className="card">
          <ul class="list-group list-group-flush">
            <li>
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
    </div>
  );
}
