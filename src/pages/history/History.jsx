import "./History.scss";

import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { HistoryTable } from "../../components/tables/HistoryTable";

export const History = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Completed Orders</div>
          <HistoryTable />
        </div>
      </div>
    </div>
  );
};
