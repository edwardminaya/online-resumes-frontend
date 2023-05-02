export function Capstone(props) {
  return (
    <div>
      <h2>Capstone Projects</h2>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <h3>
            <a href={capstone.url} target="_blank" rel="noreferrer">
              {capstone.project_name}
            </a>
            <img src={capstone.screenshot} width="300px" />
          </h3>
          <p>{capstone.description}</p>
        </div>
      ))}
    </div>
  );
}
