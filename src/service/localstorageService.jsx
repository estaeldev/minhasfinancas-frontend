function LocalStorage() {

    const addItem = (chave, valor) => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }

    const getItem = (chave) => {
        return JSON.parse(localStorage.getItem(chave))
    }   
    
    return {addItem, getItem}

}

export default LocalStorage