import "./HospitalHome.scss";

import { Navbar } from "../../components/navbar/Navbar";
import { HospitalSidebar } from "../../components/hospitalSidebar/HospitalSidebar";
import { HopsitalTable } from "../../components/tables/HospitalTable";
export const HospitalHome = () => {
  return (
    <div className="hospitalHome">
      <HospitalSidebar />
      <div className="hospitalHomeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Patient info</div>
          <HopsitalTable />
        </div>
      </div>
    </div>
  );
};
