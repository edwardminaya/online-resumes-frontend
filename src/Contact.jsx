export function Contact(props) {
  return (
    <div>
      <h2>Contact Info</h2>
      {props.students.map((student) => (
        <div key={student.id} className="card">
          <ul className="list-group list-group-flush">
            <li>
              <img src={student.image_url} />
              <h3>
                {student.first_name} {student.last_name}
              </h3>
            </li>
            <li className="list-group-item">Email: {student.email}</li>
            <li className="list-group-item">Phone: {student.phone_number}</li>
            <li className="list-group-item">Bio: {student.short_bio}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
