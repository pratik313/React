import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./input.css";

export default function Deletecompo() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);

  // to get input value
  function getData(e) {
    setName(e.target.value);
  }

  // to add input value to array
  function addData() {
    setArr([...arr, name]); // we use spred opr. for copy old arr and also add new ele
    setName("");
  }

  // to delete data from array

  function deleteHandler(index) {
    // with use of splice
    // console.log("index:", index);
    // arr.splice(index, 1);
    // setArr([...arr]);

    // with use of filter

    let x = arr.filter((e, i) => {
      return i !== index;
    });
    setArr([...x]);
  }

  function deleteAll() {
    setArr([]);
  }

  return (
    <>
      <div className="inputDiv">
        <label htmlFor="name">Name </label>
        <input
          onChange={(e) => getData(e)}
          type="text"
          value={name} // to blank value of input
          id="name"
          placeholder="Please enter your name"
        />
        <Button className="mt-2" onClick={() => addData()} variant="primary">
          Add Name
        </Button>
        <Button
          className="mt-2 mb-2"
          onClick={() => deleteAll()}
          variant="danger"
        >
          Delete ALl
        </Button>
        {arr.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e}</td>
                    <td>
                      <Button
                        className="me-2"
                        variant="danger"
                        onClick={() => deleteHandler(i)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : null}
      </div>
    </>
  );
}
