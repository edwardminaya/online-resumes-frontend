/* eslint-disable react/prop-types */
export function Skills(props) {
  return (
    <div>
      <h2>Skills</h2>
      {props.students.map((student) => (
        <div key={student.id} className="card">
          <li>
            <h2>{student.skills.name}</h2>
          </li>
        </div>
      ))}
      ;
    </div>
  );
}
