import { useState, useEffect, createContext } from 'react'

const StateContext = createContext()

function StateProvider({ children }) {
    const [arrayOrder, setArrayOrder] = useState(JSON.parse(localStorage.getItem('orderArray')))
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