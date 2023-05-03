/* eslint-disable react/prop-types */
export function ResumesIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All resumes</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          {/* change p tag to image tag once we have api images */}
          <p>{student.photo}</p>
          <h2>
            <a href="#">
              {student.first_name} {student.last_name}
            </a>
          </h2>
          <p>Short Bio: {student.short_bio}</p>
          <button onClick={() => props.onShowResume(student)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
