import React from "react";
import { Link } from "react-router-dom";
import useProvedorAutenticacaoContext from "../../hook/useProvedorAutenticacaoContext";
import "./navbar.scss";

function NavBar() {

    const {encerrarSessao, usuarioAutenticado} = useProvedorAutenticacaoContext()

    const deslogar = () => {
        encerrarSessao()
    }
    
    return (
        <>
            <div className="container_navbar">

                <nav className="navbar navbar-expand-lg bg-primary">

                    <div className="center_items">

                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <label style={{color: "white", marginRight: "15px", fontSize: "25px"}}>Minhas Finanças</label>
                            </li>

                            {usuarioAutenticado.isAutenticado && (
                                <>
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
                                </>
                            )}
                            
                        </ul>

                    </div>

                </nav>

            </div>
        </>
    )
}


export default NavBar
