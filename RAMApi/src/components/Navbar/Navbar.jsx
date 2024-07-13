import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function s() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="fs-3 my-4 navbar-brand">
                    <span className="text-primary"> Rick & Morty </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link"
                                aria-current="page"
                            >
                                Characters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/episodes"
                                className="nav-link"
                            >
                                Episodes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/location"
                                className="nav-link"
                            >
                                Location
                            </NavLink>
                        </li>
                    </ul>
                    {/* <span className="navbar-text">
                        Navbar text with an inline element
                    </span> */}
                </div>
            </div>
        </nav>
    );
}

export default s;
