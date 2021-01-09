import React, { useEffect, useContext } from 'react';
import { calcSubPrice, calcTotalPrice } from '../../../helpers/CalcPrice';
import { Link } from 'react-router-dom';
import './Cart.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { profileContext } from '../../../contexts/ProfileContext';
function Cart() {
    const { cartData, getCart, changeCountProducts, makeOrder, deleteItem } = useContext(profileContext);
    useEffect(() => {
        getCart()
    }, [])

    console.log('cart', cartData)

    function handleChangeCount(e, id) {
        changeCountProducts(e.target.value, id)
    }

    return (
        <div className="cart">
            {cartData != undefined ? (
                <div>
                    {console.log(cartData)}
                    <table className="cart-table">
                        <thead>
                            <tr className="tr-title">
                                <th>image</th>
                                <th>title</th>
                                <th>price</th>
                                <th>delete</th>
                                <th>count</th>
                                <th>subTotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.products.map(item => (
                                <tr key={item.product.id} className="tr-info">
                                    <td><img style={{ width: "80px" }} src={item.product.img} /></td>
                                    <td>{item.product.title}</td>
                                    <td><span className="media-title"> Сумма:</span>{item.product.price}  </td>
                                    <td>
                                        <button onClick={() => deleteItem(item.product.id)} className="delete-btn-cart">Delete</button></td>
                                    <td><input min={1} onChange={(e) => handleChangeCount(e, item.product.id)}
                                        type="number" value={item.count} /></td>
                                    <td><span className="media-title"> Итого</span>{calcSubPrice(item)} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4 className="total-price">Total: {calcTotalPrice(cartData.products)}</h4>
                    <div className="btn-place-cart">
                        <Link to='/check'>
                            <button onClick={(e) => makeOrder()} className="pay-cart">
                                Оформить заказ
                        </button>
                        </Link></div>
                </div>

            ) : <h1> Ваша <AddShoppingCartIcon />Пуста</h1>}

        </div>
    )
}

export default Cart
