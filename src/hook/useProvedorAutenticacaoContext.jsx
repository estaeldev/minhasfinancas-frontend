import { useContext } from "react";
import { AuthContext } from "../context/ProvedorAutenticacao";

function useProvedorAutenticacaoContext() {

    const context = useContext(AuthContext)

    if(context === undefined) {
        throw new Error("Não está dentro do contexto!")
    }

    return context
    
}

export default useProvedorAutenticacaoContext