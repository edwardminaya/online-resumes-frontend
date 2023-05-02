import { ExperiencesIndex } from "./ExperiencesIndex";
import { ResumesIndex } from "./ResumesIndex";
import { Skills } from "./Skills";
import { Modal } from "./Modal";
import { Contact } from "./Contact";

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
 
  return (
    <div>
      <ResumesIndex students={students} />

      <Skills />
      <ExperiencesIndex experiences={experiences} />
      {/* <Contact contacts={contacts}/> */}
      <Modal show={false}>
        <p>Test</p>
      </Modal>
    </div>
  );
}
