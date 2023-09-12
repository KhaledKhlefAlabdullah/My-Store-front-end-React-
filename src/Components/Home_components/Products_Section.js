import axios from "axios";
import { useState, useEffect } from "react";
import {  Container } from "react-bootstrap";
import { PRODUCTS} from "../REGEX_And_APIs";
import Loader from "../Loader";
import Product from "./Product_Component";

export default function Products_Section() {

  // To store products comming from api
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(PRODUCTS, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      console.log(response.data.products);
      if (response.status === 200) {

        const products = response.data.products;

        // Store product in locale storage to use it in side product menu (cart)
        localStorage.setItem('products', JSON.stringify(products));

        setProducts(products);
      }
    } catch (error) {
      
      if (!error.response) {
        alert("لايمكن جلب البيانات");
      } else if (error.response?.status === 409) {
        alert("لايمكن جلب البيانات");
      } else {
        alert("لايمكن جلب البيانات");
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  // Make add to fivorate function
  const add_to_fivorate = () => {
    // Emplemnted later
  };
  
  return (
    <Container className="home-section mt-2 mb-2 dir-rtl my-box-shadow">
      <div className="row pt-2 pb-2 position-relative">
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((product) => (
             <Product {...product}/>
          ))
        )}
      </div>
    </Container>
  );
}
