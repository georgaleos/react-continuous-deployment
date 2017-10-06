import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                Elefth
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/" exact activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/roster" activeClassName="active">
                    Roster
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/schedule" activeClassName="active">
                    Schedule
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" activeClassName="active">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/form" activeClassName="active">
                    Products Form
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeClassName="active">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wizard" activeClassName="active">
                    Wizard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search" activeClassName="active">
                    Search
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
