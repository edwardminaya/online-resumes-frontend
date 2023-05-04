/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export function Skills(props) {
  return (
    <div>
      <h2>Skills</h2>
      {props.students.map((student) => (
        <div key={student.id} className="card">
          {student.skills.map((skill) => (
            <p>{skill.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
