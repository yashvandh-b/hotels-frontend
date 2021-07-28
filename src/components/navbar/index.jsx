import React from 'react'
import * as UI from './navbarElements';

const Navbar = () => {
  return (
    <>
      <UI.Nav>
        <UI.NavLink key="home" to="/"><h1>Home</h1></UI.NavLink>
        <UI.Bars />
        <UI.NavMenu>
          <UI.NavLink key="about" to="/about" ><h1>About</h1></UI.NavLink>
          <UI.NavLink key="new_hotel" to="/hotel/new" ><h1>Add Hotel</h1></UI.NavLink>
          <UI.NavLink key="hotels" to="/hotels" ><h1>Hotels</h1></UI.NavLink>
          <UI.NavLink key="signup" to="/signup" ><h1>Sign Up</h1></UI.NavLink>
          <UI.NavBtnLink to='/signin'> Sign In</UI.NavBtnLink>
        </UI.NavMenu>
      </UI.Nav>
    </>
  )
}

export default Navbar;
