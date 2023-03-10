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
          <th>image</th>
          <th>name</th>
          <th>price</th>
          <th>sale</th>
        </tr>
      </thead>
      <tbody>
        <Products />
      </tbody>
    </Table>
  );
}
