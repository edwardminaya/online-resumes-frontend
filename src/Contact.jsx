export function Contact(props) {
    return (
        <div>
            <h1>Contact Info</h1>
            {props.students.map((student) => (
                <div key={student.id}>
                    <h2>Name: {student.first_name} {student.last_name}</h2>
                    <p>Email: {student.email}</p>
                    <p>Phone: {student.phone_number}</p>
                    <p>Bio: {student.short_bio}</p>
                    <img src={student.image_url} />
                </div>
            ))}
        </div>
    );
}

