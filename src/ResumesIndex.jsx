export function ResumesIndex(props) {
  return (
    <div>
      <h1>All resumes</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>
            {student.first_name} {student.last_name}
          </h2>
          <p>Width: {student.photo}</p>
          <p>Height: {student.bio}</p>
        </div>
      ))}
    </div>
  );
}
