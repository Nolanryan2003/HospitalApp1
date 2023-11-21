import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./Single.scss";
import Axios from "axios";
import { useParams } from "react-router-dom";

export const Single = () => {
  const [patient, setPatient] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5555/newPatient/${userId}`
        );
        setPatient(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPatient();
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="title">Information</div>
            <img
              src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              className="itemImage"
            />
            {patient && (
              <div className="item">
                <div className="patientTitle">
                  FullName: {patient.firstName + " " + patient.lastName}
                </div>
                <div className="detailPatient">
                  <span className="patientKey">Age: </span>
                  <span className="patientValue">{patient.age}</span>
                </div>
                <div className="detailPatient">
                  <span className="patientKey">Date of Birth: </span>
                  <span className="patientValue">{patient.dateOfBirth}</span>
                </div>
                <div className="detailPatient">
                  <span className="patientKey">Gender: </span>
                  <span className="patientValue">{patient.gender}</span>
                </div>
                <div className="detailPatient">
                  <span className="patientKey">Current Medications:</span>
                  <span className="patientValue">
                    {patient.currentMedications}
                  </span>
                </div>
                <div className="detailPatient">
                  <span className="patientKey">Allergies:</span>
                  <span className="patientValue">{patient.allergies}</span>
                </div>
                <div className="detailPatient">
                  <span className="patientKey">Past Medical Conditions:</span>
                  <span className="patientValue">
                    {patient.pastMedicalConditions}
                  </span>
                  <div className="detailPatient">
                    <span className="patientKey">Severity:</span>
                    <span className="patientValue">{patient.severity}</span>
                  </div>
                  <div className="detailPatient">
                    <span className="patientKey">BloodPressure:</span>
                    <span className="patientValue">
                      {patient.bloodPressure}
                    </span>
                  </div>
                  <div className="detailPatient">
                    <span className="patientKey">Temperature:</span>
                    <span className="patientValue">{patient.temperature}</span>
                  </div>
                  <div className="detailPatient">
                    <span className="patientKey">Weight:</span>
                    <span className="patientValue">{patient.weight}</span>
                  </div>
                  <div className="detailPatient">
                    <span className="patientKey">Surgical History:</span>
                    <span className="patientValue">
                      {patient.surgicalHistory}
                    </span>
                  </div>
                  <div className="detailPatient">
                    <span className="patientKey">Doctor Assigned:</span>
                    <span className="patientValue">
                      {patient.doctorAssigned}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};
