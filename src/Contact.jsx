export function Contact(props) {
    return (
        <div>
            <h1>Contact Info</h1>
            {props.students.map((student) => (
                <div key={student.id}>
                    <h2>{student.first_name} {student.last_name}</h2>
                    <p>{student.email}</p>
                    <p>{student.phone}</p>
                    <p>{student.short_bio}</p>
                    <img src={student.photo} />
                </div>
            ))}
        </div>
    )
}