import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <div>
        <img className="img-logo" src="./logo-chef.jpg"/>
        </div>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Accueil
          </NavLink>
          <NavLink to="/Recettes" activeStyle>
            Recettes
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;