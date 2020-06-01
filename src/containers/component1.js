import React from "react";
import TableComponent from './reactTable';

const Cmp1 = (props) => (
  <React.Fragment>
    <h1>Hello, {props.name}!</h1>
    <TableComponent/>
  </React.Fragment>
);

export default Cmp1;
