export function Capstone(props) {
  return (
    <div>
      <h2>Capstone Projects</h2>
      {props.capstones.map((capstone) => (
        <div key={capstone.id} className="card">
          <h3>
            <img src={capstone.screenshot} />
            <a href={capstone.url} target="_blank" rel="noreferrer">
              {capstone.name}
            </a>
          </h3>
          <p>{capstone.description}</p>
        </div>
      ))}
    </div>
  );
}
