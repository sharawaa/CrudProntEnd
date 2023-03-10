import { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Brand from "./pages/Brand.jsx";
import Category from "./pages/Category.jsx";
import LoadMore from "./pages/LoadMore.jsx";
import axios from "axios";

export const ProductContext = createContext();
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/product")
      .then((products) => setProducts(products.data));
  }, []);
  console.log(products);

  return (
    <div className="container appContainer">
      <ProductContext.Provider value={{ products, setProducts }}>
        <Navbar />
        <Routes>
          <Route exact path="/allProduct" element={<AllProducts />} />
          <Route exact path="/loadMore" element={<LoadMore />} />
          <Route exact path="/filterByCategory" element={<Category />} />
          <Route exact path="/filterByBrand" element={<Brand />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
