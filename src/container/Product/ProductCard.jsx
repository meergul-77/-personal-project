import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import './ProductCard.css'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { profileContext } from '../../contexts/ProfileContext';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
        textAlign: 'center',
        paddingLeft: '60px',
    },
    media: {
        height: "25vh",
        paddingTop: '56.25%',
        backgroundSize: "contain"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function ProductCarditem({ item }) {
    const [value, setValue] = useState(`${item.rating}`);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();

    const { addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInLiked, checkProductInLiked } = useContext(profileContext)
    return (
        <div className="product-card" >
            <Card >
                <CardHeader
                    title={<Typography variant="h5" align="center">{item.title}</Typography>}
                /><Link to={`/details/` + item.id}>
                    <CardMedia
                        className={classes.media}
                        image={item.img}
                    /></Link>
                <CardActions style={{ justifyContent: "space-around", display: 'block' }}>
                    <Typography variant="h6">
                        {item.price} сом
                    </Typography>
                    <div className={classes.root}>
                        <Rating
                            precision={1}
                            name="read-only"
                             value={item.rating}
                              readOnly
                        />
                    </div >

                    <IconButton onClick={() => addAndDeleteProductInCart(item)} color={checkProductInCart(item.id) ? "secondary" : "primary"} style={{ fontSize: '1.3em' }} aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton onClick={() => addAndDeleteProductInLiked(item)} color={checkProductInLiked(item.id) ? "secondary" : "primary"} style={{ fontSize: '1.3em' }} aria-label="add to shopping cart">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>

        </div>
    );
}