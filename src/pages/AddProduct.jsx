import axios from "axios"
import "../styles/addProduct.css"
export default function AddProduct(){
    function addProduct(e){
e.preventDefault()

axios.post("http://localhost:8000/product", {
 name: e.target.productName.value,
 image: e.target.productImage.value,
 price: e.target.productPrice.value,
 brand: e.target.brands.value,
 category: e.target.category.value,
}).then((res)=>console.log(res));
console.log(e.target.brands.value,);
    }

    return<>    
    <form onSubmit={addProduct} className="addProduct">
        <h1>Add product</h1>
        <div>
            <section className="">
                <input type="text" name="productName" defaultValue={"name"} />
                <input type="text" name="productPrice" defaultValue={"price"} />
            </section>
            <section>
                <input type="text" name="productImage" defaultValue={"image"} />
                <select className="brand-select" name="brands" id="">
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sony">Sony</option>
                        <option value="LG">LG</option>
                        <option value="Dell">Dell</option>
                        <option value="Other">Other</option>
                    </select>
            </section>
        </div>
        <section >
                <select className="category-select" name="category" id="">
                    <option value="Phone & Table">Phone & Tablet</option>
                    <option value="TV">TV</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Headphone">Headphone</option>
                    <option value="Other">Other</option>
                </select>
        </section>
       <section>
       <button type="submit">add +</button>
       </section>
    </form>


    <div className="addCategory">
        <h1>Add category</h1>
        <input type="text" defaultValue={"Category"}/>
        <button>add category</button>
    </div>
    <div className="addBrand">
        <h1>Add brand</h1>
        <input type="text" defaultValue={"Brand"}/>
        <button>add brand</button>
    </div>
    </>
}