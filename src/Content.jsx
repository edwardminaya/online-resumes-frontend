import { ResumesIndex } from "./ResumesIndex";
// import { Education } from "./Education";

export function Content() {
  const students = [
    { id: 1, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 2, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
    { id: 3, first_name: "First", last_name: "Last", photo: 150, bio: 150 },
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
      {/* <Education schools={schools} /> */}
    </div>
  );
}
