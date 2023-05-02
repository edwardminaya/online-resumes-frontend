export function Skills() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Skills</h1>
      <form onSubmit={handleSubmit}>
        {/* hardcoding data for now, needs to link to database though */}
        <div>Ruby, HTML, JavaScript, React, CSS</div>
        <div>
          <input type="text" placeholder="Add New Skill"></input>
        </div>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}
