import React from "react";
import { NavLink ,useLocation} from "react-router-dom";
import "./LeftSideBar.css";
import { useState } from "react";


export default function LeftSideBar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');
  
    // Update the currentPage state when the route changes
    React.useEffect(() => {
      switch (location.pathname) {
        case '/customers':
          setCurrentPage('Customers');
          break;
        case '/product':
          setCurrentPage('Product');
          break;
        case '/income':
            setCurrentPage('Income');
            break;
        case '/Promote':
            setCurrentPage('Promote');
            break;    
        case '/Help':
            setCurrentPage('Help');
            break;      
        default:
          setCurrentPage('DashBoard');
      }
    }, [location.pathname]);

  return (
    <div className="left-sidebar">
      <h2>{currentPage}</h2>

      <nav className="side-nav">

        <NavLink to="./" className="side-nav-links" activeClassName="active">
          <p>Dashboard</p>
        </NavLink>
        
          <NavLink
            to="/product"
            className="side-nav-links"
            activeClassName="active"
          >
            <p>Product</p>
          </NavLink>
          <NavLink
            to="/customers"
            className="side-nav-links"
            activeClassName="active"
          >
            <p>Customers</p>
          </NavLink>
          <NavLink
            to="/income"
            className="side-nav-links"
            activeClassName="active"
          >
            <p>Income</p>
          </NavLink>
          <NavLink
            to="/Promote"
            className="side-nav-links"
            activeClassName="active"
          >
            <p>Promote</p>
          </NavLink>
          <NavLink
            to="/Help"
            className="side-nav-links"
            activeClassName="active"
          >
            <p>Help</p>
          </NavLink>
      </nav>
    </div>
  );
}
