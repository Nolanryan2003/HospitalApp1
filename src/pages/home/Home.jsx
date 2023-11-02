import React from "react";
import "./Home.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Tables } from "../../components/tables/Tables";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Patient info</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};
