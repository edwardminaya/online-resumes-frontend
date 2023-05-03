/* eslint-disable react/prop-types */
export function ResumesShow(props) {
  console.log(props);
  return (
    <div>
      <h1>
        {props.resume.first_name} {props.resume.last_name}
      </h1>
    </div>
  );
}
