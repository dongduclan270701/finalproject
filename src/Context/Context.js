import { useState, useEffect, createContext } from 'react'
import { fetchCartUser, fetchUserOrderDetails } from 'Apis'
const StateContext = createContext()

function StateProvider({ children }) {
    const [arrayOrder, setArrayOrder] = useState([])
    const [category, setCategory] = useState([])
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))) {
            fetchCartUser(JSON.parse(localStorage.getItem('user'))[0])
                .then(result => {
                    setArrayOrder(result.product)
                    document.title = 'KTech';
                })
                .catch(error => {
                    console.log(error)
                })
            fetchUserOrderDetails(JSON.parse(localStorage.getItem('user'))[0])
                .then(result => {
                    localStorage.setItem("user", JSON.stringify([result.email, result.username, result.phoneNumber, result.address, result.image]));
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [])

    const handleUpdateArrayOrder = (data) => {
        setArrayOrder(data)
    }
    const handleUpdateCategory = (data) => {
        setCategory(data)
    }
    const value = {
        arrayOrder,
        category,
        handleUpdateArrayOrder,
        handleUpdateCategory
    }
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}
export { StateContext, StateProvider }