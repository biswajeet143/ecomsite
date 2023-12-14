import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Productlist() {
  const [products, setproduct] = useState([]);
  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setproduct(result);
  };
  const deleteproduct = async (item) => {
    let result = await fetch(`http://localhost:5000/products/${item}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getproducts();
    }
  };
const searchbox=async(event)=>{
  let key=event.target.value;
  if(key){
  let result=await fetch(`http://localhost:5000/search/${key}`);
  result=await result.json();
  if(result){
    setproduct(result);
  }}
  else
  {
    getproducts()
  }
}
  // console.warn("products", products);
  return (
    <>
      {/* <div className="productlist">
        <ul>
          <li>slno</li>
          <li>name</li>
          <li>price</li>
          <li>category</li>
        </ul>
        </div>
      {products.map((item, index) => {
        return (
          <ul>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
          </ul>
          
        );
        
      }
      )} */}

<div className="search-container">
  <input
    type="text"
    className="search-input"
    placeholder="Enter For Search"
    onChange={searchbox}
  />
  <i class="fa-solid fa-magnifying-glass"></i>
</div>

      <div className="productlist">
        <table border="1" height="400px" width="800px">
          <tr>
            <th>slno</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th>company</th>
            <th>Operation</th>
          </tr>

          {products.length>0?products.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.companyname}</td>
                <td>
                  <button onClick={() => deleteproduct(item._id)}>
                    Delete
                  </button>
                  <button>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/updateproduct/${item._id}`}
                    >
                      update
                    </Link>
                  </button>
                </td>
              </tr>
            );
          }):<td colSpan="6">no result</td>}
        </table>
      </div>
    </>
  );
}

export default Productlist;
