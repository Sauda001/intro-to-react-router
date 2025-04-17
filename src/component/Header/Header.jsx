import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobile">Mobile</a>
                <a href="/laptop">Laptops</a>
                <a href=""></a> */}

                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobile">Mobiles</NavLink>
                <NavLink to="/laptop">Laptops</NavLink>
                <NavLink to="/user">Users</NavLink>
                <NavLink to="/user2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>

            </nav>
        </div>
    );
};

export default Header;