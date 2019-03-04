import React from "react";
import Header from "../Header/Header";
import Employerinfo from '../Employer-info/EmployerInfo';
import "./employee.css";


// Parent for User information

const Employee = () => {

  return (

    <div className="employee">
      <Header content='Employee Director'/>
      <Employerinfo /> {/* Parent for user-info */}
    </div>

  );

};

export default Employee;
