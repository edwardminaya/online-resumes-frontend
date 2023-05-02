import { ResumesIndex } from "./ResumesIndex";
import { Modal } from "./Modal";
import { Contact } from "./Contact";

export function Content() {
  const students = [
    { id: 1, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 2, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 3, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
  ];

  return (
    <div>
      <ResumesIndex students={students} />
      <Modal show={false}>
        <p>Test</p>
      </Modal>
    </div>
  );
}
