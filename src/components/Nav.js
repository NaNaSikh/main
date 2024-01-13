import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarsStaggeredIcon from './icons/bars-staggered.png';
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <ul className="nav-ul">
        <li><Link to="/">All</Link></li>
        <li><Link to="/Movies">Movies</Link></li>
        <li><Link to="/Music">Music</Link></li>
        <li><Link to="/Sport">Sport</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>

        {/* Dropdown item */}
        <li className="nav-item dropdown">
           <Dropdown>
            <Dropdown.Toggle  className="nav-icon">
                <img
                src={BarsStaggeredIcon}
                alt="menu icon"
                onClick={handleDropdownToggle}
                  />
            </Dropdown.Toggle>
            { isDropdownOpen && 
            (<Dropdown.Menu className="dropdown-menu">
             <Dropdown.Item>
                <Link to="/Profile" id="dropdown-item" onClick={handleDropdownToggle}>Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/Tickets" id="dropdown-item" onClick={handleDropdownToggle}>My Tickets</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/Logout" id="dropdown-item" onClick={handleDropdownToggle}>Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>)
          }
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
