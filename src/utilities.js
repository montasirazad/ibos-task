const getLocalItem = () => {
    const savedData = localStorage.getItem('user-data')
    if (savedData) {
        return JSON.parse(localStorage.getItem('user-data'))
    } else {
        return null
    }
}

export {
    getLocalItem
}