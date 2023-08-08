import React, { useState } from "react";

export default function Multiinput() {
  let [name, setname] = useState({
    name: "",
    email: "",
    age: " ",
    Mobile: " ",
  });
  let [arr, setarr] = useState([]);
  let [ind, setind] = useState(null);

  function getdata(e) {
    setname({ ...name, [e.target.name]: e.target.value });
  }

  function addata() {
    if (name.name.trim() && name.email.trim()) {
      setarr([...arr, name]);
      setname({ name: "", email: "", age: " ", Mobile: " " });
    } else {
      alert("Enter data");
    }
  }
  function deleteData(index) {
    arr.splice(index, 1);
    setarr([...arr]);
  }
  function deleteall() {
    setarr([]);
  }

  function update(index, data) {
    setind(index);
    setname(data);
  }
  function savedata() {
    arr.splice(ind, 1, name);
    setarr([...arr]);
    setname({
      name: "",
      email: "",
      age: " ",
      Mobile: " ",
    });
    setind(null);
  }
  return (
    <div className="container mt-5">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={(e) => getdata(e)}
          value={name.name}
          placeholder="enter name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Age:</label>
        <input
          type="text"
          name="age"
          className="form-control"
          onChange={(e) => getdata(e)}
          value={name.age}
          placeholder="enter age"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Mobile:</label>
        <input
          type="text"
          name="Mobile"
          className="form-control"
          onChange={(e) => getdata(e)}
          value={name.Mobile}
          placeholder="enter number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={(e) => getdata(e)}
          value={name.email}
          placeholder="enter email"
        />
      </div>
      <button className="btn btn-primary me-5  px-4 " onClick={addata}>
        Add <i className="fa-solid fa-add"></i>
      </button>
      <button className="btn btn-primary me-5 " onClick={deleteall}>
        Delete All <i className="fa-solid fa-trash"></i>
      </button>
      <button className="btn btn-danger me-5 px-3" onClick={() => savedata()}>
        save changes<i className="fa-solid fa-server"></i>
      </button>

      <table className="table mt-4 ">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.Mobile}</td>
              <td>{e.email}</td>

              <td>
                <button className="btn " onClick={(i) => deleteData(i)}>
                  {" "}
                  <i class="fa-sharp fa-solid fa-trash"></i>
                </button>
                <button className="btn " onClick={() => update(i, e)}>
                  {" "}
                  <span className="fa-solid fa-upload"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
