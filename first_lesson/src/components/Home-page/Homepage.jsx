import React from "react";
import Header from "../Header/Header";
import SearchBar from '../SearchBar/SearchBar';
import EmployeeList from '../Employee-list/EmployeeList';
import "./home.css";

const employeeArr = [
  {
      name: 'James',
      surname: 'King',
      position : 'President and CEO',
  },
  {
      name : 'Julie',
      surname : 'Taylor',
      position : 'VP of Marketing',
  },
  {
      name: 'Eugene',
      surname: 'Lee',
      position: 'CFO',
  },
  {
      name: 'John',
      surname: 'Williams',
      position: 'VP of Engineering',
  },
  {
      name: 'Ray',
      surname: 'Moore',
      position: 'VP of Sales'
  },
  {
      name: 'Paul',
      surname: 'Jones',
      position: 'QA Manager',
  }
];



const Homepage = () => {
  return (
    <div className="home">
      <Header content={'First Box'}/>
      <SearchBar />
      <EmployeeList employeeArr={employeeArr}/>
    </div>
  );
};
 

export default Homepage;
