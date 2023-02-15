import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);

  const isScrolling =()=> window.scrollY > 0 ? setActive(true) : setActive(false);

  useEffect(()=>{
    window.addEventListener('scroll', isScrolling)

    return ()=>{
      window.removeEventListener('scroll', isScrolling)
    }
  }, [])

  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();

  const currentUser = {
    id: 1,
    username: "MiraXcode",
    isSeller: true,
  };

  return (
    // <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to='/'>
            <span className="text">M2Handi</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="navbarLinks">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && (<span>Become a Seller</span>)}
          {
            currentUser && (
              <div className="userMenu" onClick={()=>dropdown ? setDropdown(false) : setDropdown(true)}>
                <img src="https://media.licdn.com/dms/image/C4D03AQGPUbcleczVzw/profile-displayphoto-shrink_800_800/0/1647949957112?e=1681948800&v=beta&t=W4MIpDlyRyLYA1tVy5RArGwoELsen_7L6l52ehYLf8w" alt="" />
                <span>{currentUser?.username}</span>
                {dropdown && (
                  <div className="dropdownMenu">
                    {
                      currentUser?.isSeller && (
                        <>
                          <Link className="link" to="/mygigs"><span>My Gigs</span></Link>
                          <Link className="link" to="/addnew"><span>Add New Gigs</span></Link>
                        </>
                      )
                    }
                    <Link className="link" to='/orders'><span>Orders</span></Link>
                    <Link className="link" to='messages'><span>Messages</span></Link>
                    
                    <span>Logout</span>
                  </div>
                )
                  
                }
              </div>
            )

          }
          <span>Sign in</span>
          <button>Join</button>
        </div>
      </div>
      {
        (active || pathname !== "/") && (
          <>
            <hr />
            {/* categories */}
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        )
      }
      
    </div>
  );
}

export default Navbar;
