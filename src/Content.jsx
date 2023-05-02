import { ResumesIndex } from "./ResumesIndex";
import { Capstone } from "./Capstone";

export function Content() {
  const students = [
    { id: 1, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 2, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 3, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
  ];

  const capstones = [
    {
      id: 1,
      project_name: "Weather App",
      description: "Did you see the movie Twister? That.",
      url: "http://mistertwister.co",
      screenshot: "https://cdn.pixabay.com/photo/2014/04/03/10/26/tornado-310431_960_720.png",
    },
    {
      id: 2,
      project_name: "Birdle",
      description: "Guess the bird in 6 chirps",
      url: "http://birdle-game.org",
      screenshot: "https://cdn.pixabay.com/photo/2016/05/26/14/39/parrot-1417286_960_720.png",
    },
  ];

  return (
    <div>
      <ResumesIndex students={students} />
      <Capstone capstones={capstones} />
    </div>
  );
}
