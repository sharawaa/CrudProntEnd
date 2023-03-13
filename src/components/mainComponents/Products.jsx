import { useContext } from "react";
import { ProductContext } from "../../App";
import "../../styles/allProducts.css"

export default function Products() {
  const { products } = useContext(ProductContext);
  return (
    <>
      {products &&
        products.map((product) => (
          <tr >
            <td>
              <img
                src={product.image}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </td>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
          
            <td>{product.price}</td>
            <td>{product.sale}</td>
          </tr>
        ))}
    </>
  );
}
