import { useContext } from "react";
import { ProductContext } from "../../App";

export default function Products() {
  const { products, setProducts } = useContext(ProductContext);
  return (
    <>
      <tbody>
        {products &&
          products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          ))}
      </tbody>
    </>
  );
}
