import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CadastroUsuario from "../views/cadastro/cadastroUsuario";
import Home from "../views/home";
import CadastroLancamento from "../views/lancamentos/CadastroLancamento";
import ConsultaLancamento from "../views/lancamentos/consulta-lancamento";
import Login from "../views/login/login";
import AuthService from "../service/AuthService";


function RotaAutenticada({children}) {
    return AuthService().isUsuarioAutenticado() ? children : <Navigate to={"/login"} />
}


function Rotas() {

    return (
        <Routes>
            <Route path="/login" Component={Login}></Route>
            <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>

            <Route path="/home" element={
                <RotaAutenticada>
                    <Home />
                </RotaAutenticada>
            } />

            <Route path="/lancamentos" element={
                <RotaAutenticada>
                    <ConsultaLancamento />
                </RotaAutenticada>
            } />

            <Route path="/cadastro-lancamentos/:id?" element={
                <RotaAutenticada>
                    <CadastroLancamento />
                </RotaAutenticada>
            } />

        </Routes>
    )
}

export default Rotas
