import { Outlet } from "@remix-run/react";
import Navbar from "~/components/navbar";

function Product() {
  return ( <div>
    <Navbar/>
    <Outlet/>
  </div> );
}

export default Product;