
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
// import { productContext } from '../../../contexts/ProductsContext';
import './SearchProductList.css'
import { profileContext } from '../../../contexts/ProfileContext';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const CountryList = ({countryList=[]}) => {
    const { addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInLiked, checkProductInLiked, ratingProduct,  getproductsData} = useContext(profileContext)

    return (
        <>
        {countryList.map((item,index)=>{
            if(item) {
                return(
                    <div className="product-card" key={item.id}>
                    <Card >
                        
                        <CardHeader
                            title={<Typography variant="h5" align="center">{item.title}</Typography>}
                        />
                        <div className="img-block">
                        <Link to={`/details/` + item.id}>
                        <img src={item.img} alt="" />
                        </Link>
                        </div>
                        <CardActions style={{ justifyContent: "space-around" }}>
                            <Typography variant="h6">
                                {item.price} сом
                            </Typography>
         
                            <IconButton onClick={() => addAndDeleteProductInCart(item)}
                            color={checkProductInCart(item.id) ? "secondary" : "primary"} 
                            style={{ fontSize: '1.3em' }} 
                            aria-label="add to shopping cart"
                            >
                                <AddShoppingCartIcon />
                            </IconButton>
     
                            <IconButton onClick={() => addAndDeleteProductInLiked(item)}
                            color={checkProductInLiked(item.id) ? "secondary" : "primary"}
                            style={{ fontSize: '1.3em' }}
                            aria-label="add to shopping cart">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </div>
                )
            }
            return null
        })}
        </>
    );
};

export default CountryList;