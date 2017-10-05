import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {

    render(){
        return (
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to='/roster' activeClassName="active">Roster</NavLink></li>
                        <li><NavLink to='/schedule' activeClassName="active">Schedule</NavLink></li>
                        <li><NavLink to='/products' activeClassName="active">Products</NavLink></li>
                        <li><NavLink to='/products/form' activeClassName="active">Products Form</NavLink></li>
                        <li><NavLink to='/login' activeClassName="active">Login</NavLink></li>
                        <li><NavLink to='/wizard' activeClassName="active">Wizard</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default Header;