import React, { useState } from "react";

export default function Inputcar() {
  const [carname, setcarname] = useState("");
  const [caraary, setcaraary] = useState([]);

  function cardata(e) {
    setcarname(e.target.value);
  }

  function car() {
    setcaraary([...caraary, carname]);
    setcarname(""); // Clear the input field after adding the car name
  }

  return (
    <div>
      <label htmlFor="name"> Car Name </label>
      <input
        type="text"
        id="name"
        onChange={(e) => cardata(e)}
        value={carname}
      />

      <button onClick={() => car()}> Add Car</button>

      {/* <h1>{carname}</h1>` */}

      {caraary.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </div>
  );
}