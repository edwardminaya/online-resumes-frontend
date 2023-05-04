/* eslint-disable react/prop-types */
export function ResumesShow(props) {
  console.log(props);
  return (
    <div>
      <h1>
        {props.resume.first_name} {props.resume.last_name}
      </h1>
        <img src={props.resume.image_url} />
        <h3>{props.resume.email}</h3>
        <h3>{props.resume.phone_number}</h3>
        <p>{props.resume.short_bio}</p>

      {props.resume.experiences.map((experience) => (
        <div key={experience.id}>
          <p>{experience.job_title}</p>
        </div>
      ))}
      {props.resume.capstones.map((capstone) => (
        <div key={capstone.id}>
          <p>{capstone.name}</p>
        </div>
      ))}
      {props.resume.educations.map((education) => (
        <div key={education.id}>
          <p>{education.degree}</p>
        </div>
      ))}
      {props.resume.skills.map((skill) => (
        <div key={skill.id}>
          <p>{skill.job_title}</p>
        </div>
      ))}
    </div>
  );
}
