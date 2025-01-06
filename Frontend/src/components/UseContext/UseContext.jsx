// import React from 'react'
import Comp2 from "./Comp2";
import React from "react";

// var ThemeProvider = React.createContext();
const ExamResults = () => {
  return (
    <div>
      {/* <ThemeProvider value={{ sgpa: "10.00" }}> */}
        <h3>In Use component Parent -1</h3>
        <Comp2 />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default ExamResults;
