import { ExperiencesIndex } from "./ExperiencesIndex";
import { ResumesIndex } from "./ResumesIndex";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Capstone } from "./Capstone";
// import { Education } from "./Education";

export function Content() {
  // Attributes of the Student Model API
  const students = [
    { id: 1, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 2, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 3, first_name: "First", last_name: "Last", photo: 150, bio: 150 },

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

  // const schools = [
  //   {
  //     id: 1,
  //     school_name: "Syracuse",
  //     degree_type: "MA",
  //     start_date: "07-03-2009",
  //     end_date: "05-15-2010",
  //     details: "TV, Radio, Film",
  //   },
  //   {
  //     id: 2,
  //     school_name: "Oberlin",
  //     degree_type: "BA",
  //     start_date: "09-04-2001",
  //     end_date: "05-30-2005",
  //     details: "Liberal Arts",
  //   },
  //   {
  //     id: 3,
  //     school_name: "Actualize",
  //     degree_type: "Certificate",
  //     start_date: "01-15-2023",
  //     end_date: "05-19-2023",
  //     details: "This",
  //   },
  // ];

  return (
    <div>
      <ResumesIndex students={students} />
      <Skills />
      <Capstone capstones={capstones} />
      <ExperiencesIndex experiences={experiences} />
      <Contact students={students} />
      {/* <Education schools={schools} /> */}

    </div>
  );
}
