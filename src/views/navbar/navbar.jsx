import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
    return (
        <>
            <div className="container_navbar">

                <nav className="navbar navbar-expand-lg bg-primary">

                    <div className="center_items">

                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Minhas Finanças</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/home"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/cadastro-usuario"}>Usuários</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Lançamentos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>
        </>
    )
}


export default NavBar
