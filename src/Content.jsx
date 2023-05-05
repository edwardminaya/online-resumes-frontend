import { ResumesIndex } from "./ResumesIndex";

import { Modal } from "./Modal";
import { ResumesShow } from "./ResumesShow";

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
    axios.get("https://resume-data-api.onrender.com/students.json").then((response) => {
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
      <Modal show={isResumesShowVisible} onClose={handleClose}>
        <ResumesShow resume={currentResume} />
      </Modal>
    </div>
  );
}
