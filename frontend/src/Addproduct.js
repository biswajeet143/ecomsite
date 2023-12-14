import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./App.css";
function Addproduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [companyname, setcompany] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const auth=localStorage.getItem('user');
  //   if(auth)
  //   {
  //     navigate('/');
  //   }
  // },[])
  const submitdata = async () => {
    if (!name || !price || !category || !companyname) {
      seterror(true);
      return false;
    }

    const userid = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/addproduct", {
      method: "post",
      body: JSON.stringify({ name, price, category, userid, companyname }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      
      // localStorage.setItem("product", JSON.stringify(result));
      navigate("/addproduct");
      setname("")
      setcategory("")
      setprice("")
      setcompany("")
    }
  };
  return (
    <div className="signup">
      <h1>AddProduct</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setname(event.target.value)}
      />
      {error && !name && <span>enter name</span>}
      <input
        type="text"
        placeholder="Enter price"
        value={price}
        onChange={(event) => setprice(event.target.value)}
      />
      {error && !price && <span>enter price</span>}
      <input
        type="text"
        placeholder="Enter  category"
        value={category}
        onChange={(event) => setcategory(event.target.value)}
      />
      {error && !category && <span>enter category</span>}

      <input
        type="text"
        placeholder="Enter  companyname"
        value={companyname}
        onChange={(event) => setcompany(event.target.value)}
      />
      {error && !companyname && <span>enter companyname</span>}

      <button type="button" onClick={submitdata}>
        Add
      </button>
    </div>
  );
}

export default Addproduct;
