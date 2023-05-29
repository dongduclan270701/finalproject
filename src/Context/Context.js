import { useState, useEffect, createContext } from 'react'
import { fetchCartUser } from 'Apis'
const StateContext = createContext()

function StateProvider({ children }) {
    const [arrayOrder, setArrayOrder] = useState([])
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))){
            fetchCartUser(JSON.parse(localStorage.getItem('user'))[0])
            .then(result => {
                setArrayOrder(result.product)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }, [])
    const handleUpdateArrayOrder = (data) => {
        setArrayOrder(data)
    }
    const value = {
        arrayOrder,
        handleUpdateArrayOrder
    }
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}
export { StateContext, StateProvider }