/* eslint-disable react/prop-types */
export function ExperiencesIndex(props) {
  return (
    <div>
      <h2>Experience</h2>
      {props.students.map((student) => (
        <div key={student.id} className="card">
          <p>{student.first_name}</p>
        </div>
      ))}
    </div>
  );
}
