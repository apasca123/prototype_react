import React, {Component} from 'react';
import "../App.css"
import Header from "./Header";
class Nav extends Component {
    render() {
        return (
            <div className="sec_nav" id="sec_nav">
                <Header />
                <nav className="nav1" id="nav1">
                    <ul className="sidebar-navigation">
                        <li>
                            <a href="index.html">
                                <i className="fa fa-home" aria-hidden="true"></i> Acasa
                            </a>
                        </li>
                        <li>
                            <a href="camere.html">
                                <i className="fa fa-tachometer" aria-hidden="true"></i> Camere
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                <i className="fa fa-users" aria-hidden="true"></i> Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;