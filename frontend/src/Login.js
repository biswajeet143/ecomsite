import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
function Login() {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth)
      {
        navigate('/')
      }
    },[])
    const submitdata=async ()=>
    {
      if (!email || !password) {
        alert("plz fill form")
        return false;
      }
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{"Content-Type":"application/json"},
        });
        result=await result.json();
        // console.log(result)s
        if(result)
        {
          
            localStorage.setItem("user",JSON.stringify( result))
            navigate("/")
        }
        else
        {
          console.log("asjgahsgjh")
          alert("not found");
        }
       
    }
  return (
    <div className="signup">
      <h1>Login Page </h1>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />
     
      <button type="button" onClick={submitdata}>
        Click Here To Login
      </button>
    </div>
  )
}

export default Login
