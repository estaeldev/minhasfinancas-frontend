import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import AuthService from "../../service/AuthService";

function NavBar() {

    const deslogar = () => {
        AuthService().removerUsuarioAutenticado()
    }
    
    return (
        <>
            <div className="container_navbar">

                <nav className="navbar navbar-expand-lg bg-primary">

                    <div className="center_items">

                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <label>Minhas Finanças</label>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to={"/home"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/cadastro-usuario"}>Usuários</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/lancamentos"}>Lançamentos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={deslogar} to={"/login"}>Sair</Link>
                            </li>
                        </ul>

                    </div>

                </nav>

            </div>
        </>
    )
}


export default NavBar
