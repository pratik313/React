import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Adduser } from "../User/Action";

function Userdata(props) {
  let [userdata, setuserdata] = useState({
    Email: "",
    name: "",
  });

  function addDatatoPrp() {
    props.addData(Adduser(userdata));
    setuserdata({
      Email: "",
      name: "",
    });
  }

  return (
    <>
      <h1>Userdata</h1>
      {/* <h1>emil{userdata.Email}</h1> */}
      {/* <h1>emil{userdata.Password}</h1> */}
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userdata.Email}
            onChange={(e) =>
              setuserdata({ ...userdata, Email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            value={userdata.name}
            onChange={(e) =>
              setuserdata({ ...userdata, name: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={() => addDatatoPrp()}>
          Submit
        </Button>
      </Form>
    </>
  );
}

const toDispachtoprops = (dispatch) => {
  return {
    addData: dispatch,
  };
};
export default connect(null, toDispachtoprops)(Userdata);
