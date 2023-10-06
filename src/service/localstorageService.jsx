function LocalStorage() {

    const addItem = (chave, valor) => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }

    const getItem = (chave) => {
        return JSON.parse(localStorage.getItem(chave))
    }   

    const removerItem = (chave) => {
        localStorage.removeItem(chave)
    }
    
    return {addItem, getItem, removerItem}

}

export default LocalStorage