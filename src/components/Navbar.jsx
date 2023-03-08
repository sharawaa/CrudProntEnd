import { useState } from "react";
import { Link} from "react-router-dom";
import "../styles/navbar.css"

export default function SideMenu() {
  
  const [btnState, setBtnState] = useState("")

  function handleClick(event){
    setBtnState(event.target.id)
}
  return (
    <>
      <div className="sideMenu">
        <Link
        to={"/allProduct"}
          className= {btnState==="1" ? "active": "sideBtn"}
         onClick={handleClick}
         id={1}
        >
           All product
        </Link>
        <Link
        to={"/loadMore"}
         className= {btnState==="2" ? "active": "sideBtn"}
           onClick={handleClick}
           id={2}
        >
          Load more
        </Link>
        <Link
        to={"/filterByCategory"}
         className= {btnState==="3" ? "active": "sideBtn"}
          onClick={handleClick}
          id={3}
        >
           Filter by category
        </Link>
        <Link
        to={"/filterByBrand"}
         className= {btnState==="4" ? "active": "sideBtn"}
          onClick={handleClick}
          id={4}
        >
         Filter by brand
        </Link>
        <Link
        to={"/addProduct"}
         className= {btnState==="5" ? "active": "sideBtn"}
          onClick={handleClick}
          id={5}
        >
           Add product
        </Link>
      </div>
    </>
  );
}

