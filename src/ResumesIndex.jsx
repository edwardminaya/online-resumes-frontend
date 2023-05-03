/* eslint-disable react/prop-types */
export function ResumesIndex(props) {
  console.log(props);
  return (
    <div>
      <h2>All resumes</h2>
      {props.students.map((student) => (
        <div key={student.id} className="card">
          {/* replace src with {student.photo}  once we have api images */}
          <h3>
            <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2021612/rs_1200x1200-210712112838-1200-ted-lasso-s2-thumbnail-jason.jpg" />
            <a href="#">
              {student.first_name} {student.last_name}
            </a>
          </h3>
          <p>Short Bio: {student.short_bio}</p>
          <button onClick={() => props.onShowResume(student)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
