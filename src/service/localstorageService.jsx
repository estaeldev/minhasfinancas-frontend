function LocalStorage() {

    const addItem = (chave, valor) => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }

    const getItem = (chave) => {
        return JSON.parse(localStorage.getItem(chave))
    }   

    const removerItem = (cheve) => {
        localStorage.removeItem(cheve)
    }
    
    return {addItem, getItem, removerItem}

}

export default LocalStorage