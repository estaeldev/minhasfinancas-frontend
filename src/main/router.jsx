import React from "react";
import { Route, Routes } from "react-router-dom";
import CadastroUsuario from "../views/cadastro/cadastroUsuario";
import Home from "../views/home";
import ConsultaLancamento from "../views/lancamentos/consulta-lancamento";
import Login from "../views/login/login";

function Rotas() {
    return (
        <Routes>
            <Route path="/login" Component={Login}></Route>
            <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>
            <Route path="/home" Component={Home}></Route>
            <Route path="/lancamentos" Component={ConsultaLancamento}></Route>
        </Routes>
    )
}

export default Rotas
