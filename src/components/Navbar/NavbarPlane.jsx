import logo from '../../assets/Logo.png';
import './NavbarPlane.css';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function NavbarPlane() {
    return (
        <div className="navbarPlane">
            <div className="navbarPlane-container">


                <NavLink to='/'> <img src={logo} alt="" /></NavLink>

                <div className="navbar-menus">
                    <NavLink to='/AboutUs'><h3>Who we are</h3></NavLink>
                    <div class="dropdown">
                        <NavLink to='/Product'><h3 className='dropdown-main-menu'>What we offer</h3></NavLink>

                        <div class="dropdown-content">
                            <a href="#">&#8212; Wrecked eSports</a>

                        </div>
                    </div>

                    <NavLink to='/ContactUs'><h3>Contact Us</h3></NavLink>

                </div>
            </div>

        </div>
    )
}

export default NavbarPlane;