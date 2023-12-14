import React from "react";
import { Link ,useNavigate} from "react-router-dom";
function Nav() {
  const auth = localStorage.getItem("user");
  console.log()
  const navigate=useNavigate()
  const clearuser = () => {
    localStorage.clear();
    navigate("/signup")
  };
  return (
    <div className="nav-ul">
      <div>
        <img src="logo512.png" style={{ "height": "50px", "width": "50px" }} />
      </div>
      <div>
        <ul>
          <li>
            <Link className="ll" to="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="ll" to="/addproduct">
              Add Products
            </Link>
          </li>
          <li>
            <Link className="ll" to="/">
              Update Product
            </Link>
          </li>
          {/* <li>
            <Link className="ll" to="/profile">
              Profile
            </Link>
          </li> */}
          {/* <li>{auth?<Link className='ll'onClick={clearuser}to="/logout">Logout</Link>:
        <Link className='ll'to="/signup">signup</Link>}</li>
        <li>{<Link className='ll'to="/login">signin</Link>}</li> */}
          {auth ? (
             <>
            <li>
             <Link className="ll" onClick={clearuser} to="/signup">
              Logout {JSON.parse(auth).name}
            </Link></li>
            <li style={{fontSize:"30px",color:"white"}}> </li>
            </>
          ) : (
            <>
              <li>
                <Link className="ll" to="/signup">
                  signup
                </Link>
              </li>
              <li>
                <Link className="ll" to="/login">
                  signin
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
