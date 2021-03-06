import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={process.env.PUBLIC_URL + '/Allied.jpg'}
        />
      </Link>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Recent</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
   

        <Link to="/checkout">
          <div className="header__optionBasket"> 
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

        <Link to='/request'>
          <div className="header__optionRequest">
            <span className="header__optionLineTwo">Get a</span>
              <img
              className="header__requestSample"
              src={process.env.PUBLIC_URL + '/redQoute.png'}
              />
            <span className="header__optionLineTwo">Quote</span>
          </div>
        </Link>
   
    </div>
  );
}

export default Header;
