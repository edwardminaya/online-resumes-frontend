/* eslint-disable react/prop-types */
export function ResumesIndex(props) {
  console.log(props);
  return (
    <div>
      {props.students.map((student) => (
        <div key={student.id} className="card">
          <h3>
            <img src={student.image_url} />
            <a>
              {student.first_name} {student.last_name}
            </a>
          </h3>
          <p>{student.short_bio}</p>
          <button onClick={() => props.onShowResume(student)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
