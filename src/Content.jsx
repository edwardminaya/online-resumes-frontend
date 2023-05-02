import { ExperiencesIndex } from "./ExperiencesIndex";
import { ResumesIndex } from "./ResumesIndex";
import { Skills } from "./Skills";
import { Modal } from "./Modal";
import { Contact } from "./Contact";
import { Capstone } from "./Capstone";

export function Content() {
  // Attributes of the Student Model API
  const students = [
    { id: 1, first_name: "John", last_name: "Doe", short_bio: "John Doe's short bio", photo: "image_url" },
    { id: 2, first_name: "Jane", last_name: "Doe", short_bio: "Jane Doe's short bio", photo: "image_url" },
    { id: 3, first_name: "Joe", last_name: "Doe", short_bio: "Joe Doe's short bio", photo: "image_url" },
  ];

  // Attributes from the Experience Model API
  const experiences = [
    {
      id: 1,
      start_date: "04-20-2020",
      end_date: "04-20-2022",
      job_title: "General Manager",
      company: "General Company",
      details: "managed general stuff",
    },
    {
      id: 2,
      start_date: "04-20-2020",
      end_date: "04-20-2022",
      job_title: "Assistant to the General Manager",
      company: "General Company",
      details: "assist in general stuff",
    },
    {
      id: 3,
      start_date: "04-20-2020",
      end_date: "04-20-2022",
      job_title: "Human Resource Manager",
      company: "General Company",
      details: "No one cares",
    },
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

      <Skills />
      <Capstone capstones={capstones} />
      <ExperiencesIndex experiences={experiences} />
      {/* <Contact contacts={contacts}/> */}
      <Modal show={false}>
        <p>Test</p>
      </Modal>
    </div>
  );
}
