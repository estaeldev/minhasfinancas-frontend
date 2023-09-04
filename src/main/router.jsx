import React from "react";
import { Route, Routes } from "react-router-dom";
import CadastroUsuario from "../views/cadastro/cadastroUsuario";
import Home from "../views/home";
import Login from "../views/login/login";

function Rotas() {
    return (
        <Routes>
            <Route path="/login" Component={Login}></Route>
            <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>
            <Route path="/home" Component={Home}></Route>
        </Routes>
    )
}

export default Rotas
