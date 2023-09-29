import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function getdata(props) {
  let [serchtex, setserchtex] = useState("");
  let [data, setdata] = useState(props?.data || []); // Initialize with props.data

  useEffect(() => {
    // Use props.data directly here
    setdata(props?.data);
  }, [props?.data]);

  useEffect(() => {
    let filterdata = props?.data?.filter((e) => {
      return e?.Email?.toLowerCase().includes(serchtex.toLowerCase());
    });
    setdata(filterdata); // Update the data state here
  }, [props.data, serchtex]);

  return (
    <>
      <h1>USER TABLE</h1>
      <h1>{serchtex}</h1>
      <input type="text" onChange={(e) => setserchtex(e?.target?.value)} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.Email}</td>
                <td>{e.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

const toStateproops = (state) => {
  return {
    data: state.USER,
  };
};

export default connect(toStateproops)(getdata);
