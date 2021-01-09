import React, { useContext, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { profileContext } from '../../../contexts/ProfileContext'

const Wish = () => {
    const { getLiked, likeData, deleteItemInLiked, addAndDeleteProductInCart, checkProductInCart } = useContext(profileContext)
    useEffect(() => {
        getLiked()
    }, [])
    return (
        <div className="cart">
            {likeData !== undefined ? (
                <div>
                    {console.log(likeData)}
                    <table className="cart-table">
                        <thead>
                            <tr className="tr-title">
                                <th>image</th>
                                <th>title</th>
                                <th>price</th>
                                <th>delete</th>
                                <th>Add to Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {likeData.products.map(item => (
                                <tr key={item.product.id} className="tr-info">
                                    <td><img style={{ width: "80px" }} src={item.product.img} /></td>
                                    <td>{item.product.title}</td>
                                    <td>{item.product.price}</td>
                                    <td>
                                        <button onClick={() => deleteItemInLiked(item.product.id)} className="delete-btn-cart">Delete</button></td>
                                    <td>
                                        <IconButton onClick={() => addAndDeleteProductInCart(item)} color={checkProductInCart(item.id) ? "secondary" : "primary"} style={{ fontSize: '1.3em' }} aria-label="add to shopping cart">
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            ) : ('NULL')}

        </div>
    );
};

export default Wish;