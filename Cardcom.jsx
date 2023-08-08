import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

import React from "react";

function Cardcom(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props?.cardata?.img} />
        <Card.Body>
          <Card.Title>{props.cardata.productname}</Card.Title>
          <h4>{props.cardata.description}</h4>
          <h3>{props.cardata.price}</h3>
          <Button variant="primary">Click</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardcom;
