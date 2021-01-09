import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { profileContext } from '../../../contexts/ProfileContext';

function TotalSum() {
    const { makeOrder } = useContext(profileContext)
    const [state, setState] = useState(null)
console.log(state)
    useEffect(() => {
        let cart = makeOrder()
        setState(cart)
        console.log(cart)
    }, [])
    console.log(state)
    return (
        <div>
            {state != null ? state.totalPrice: false}
        </div>
    )
}

export default TotalSum
