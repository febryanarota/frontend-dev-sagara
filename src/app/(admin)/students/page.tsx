

import StudentsTable from "./students-table";

export default function Page() {
  return (
    <div className="page-container">
      <p className=" font-bold text-2xl">Data Students</p>
      <StudentsTable/>
      <div className="h-[100px]"></div>
    </div>
  );
}
