import React from "react";
// import Employee from "../Employee/Employee";
// import Homepage from "../Home-page/Homepage"
import Fire from '../Fire'; 
// pick utils
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';
// import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker
} from "material-ui-pickers";


import BasicDatePicker from '../DatePicker';

import "./app.css";

const App = () => (

  <div className="App">
    {/* <Homepage />
    <Employee /> */}
    {/* <h2>Meet firebase</h2> */}
    {/* <Fire /> */}
    <BasicDatePicker />
  </div>
  
);

export default App;
