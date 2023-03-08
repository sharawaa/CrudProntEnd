import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import AddProduct from "./pages/AddProduct.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Brand from "./pages/Brand.jsx";
import Category from "./pages/Category.jsx";
import LoadMore from "./pages/LoadMore.jsx";



function App() {
  return (
    <div className="container appContainer">
  <Navbar />
      <Routes>
        <Route exact path="/allProduct" element={<AllProducts />} />
        <Route exact path="/loadMore" element={<LoadMore />}/>
        <Route exact path="/filterByCategory" element={<Category />}/>
        <Route exact path="/filterByBrand" element={<Brand />}/>
        <Route exact path="/addProduct" element={<AddProduct />}/>
      </Routes>
     
    </div>
  );
}

export default App;
