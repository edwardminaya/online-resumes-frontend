import { ExperiencesIndex } from "./ExperiencesIndex";
import { ResumesIndex } from "./ResumesIndex";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Capstone } from "./Capstone";
import { Education } from "./Education";
import { Modal } from "./Modal";
import { ResumesShow } from "./ResumesShow";
// Added axios and combined useState and useEffect
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  // Attributes of the Student Model API
  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  // Added axios request for students
  const [students, setStudents] = useState([]);
  const handleIndexStudents = () => {
    console.log("handleIndexStudents");
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };
  useEffect(handleIndexStudents, []);
  // Above code is used to pull students info. Go to your component and change variables to students to see data. See ExperiencesIndex for example.

  const handleShowResume = (resume) => {
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };

  const handleClose = () => {
    setIsResumesShowVisible(false);
  };

  return (
    <div>
      <ResumesIndex students={students} onShowResume={handleShowResume} />
      {/* <Skills students={students} /> */}
      {/* <Capstone students={students} /> */}
      {/* I updated below from experiences={experiences} to students={students} you should do the same for your page. */}
      {/* <ExperiencesIndex students={students} />
      <Contact students={students} /> */}
      {/* <Education students={students} /> */}

      <Modal show={isResumesShowVisible} onClose={handleClose}>
        <ResumesShow resume={currentResume} />
      </Modal>
    </div>
  );
}
