import React from "react";
import "../styles/allProducts.css";
// export default function Home() {
// }
import Table from "react-bootstrap/Table";
import Products from "../components/mainComponents/Products";

export default function AllProducts() {
  return (
    <Table striped bordered hover size="sm" className="table-body-head">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>

      <Products />
    </Table>
  );
}
