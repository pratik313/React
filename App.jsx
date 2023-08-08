import "./App.css";
import React from "react";
import Updatecom from "./Updatecom";
import Mapcom from "./Mapcom";
import NavScrollExample from "./Navbar";
import Deletecompo from "./Deletecompo";
import Multiinput from "./Multiplinput";

function App() {
  return (
    <>
      <NavScrollExample />
      <Mapcom />

      {/* <Deletecompo /> */}
      <Updatecom />
      {/* <Multiinput/> */}
      <App/>
    </>
  );
}

export default App;
