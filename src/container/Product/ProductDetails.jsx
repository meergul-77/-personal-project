import React, { useContext, useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ProductDetails.css'
import { profileContext } from '../../contexts/ProfileContext';

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};
function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};
const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 30,
        // padding: 0,
        display: 'flex',
        justifyContent: 'space-between'
    },
    container1: {
        marginLeft: 0,
        padding: 10,
    },
}))
const ProductDetails = (props) => {
    const classes = useStyles();
    const { productToDetails, detailsTodo, ratingProduct, addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInLiked, checkProductInLiked } = useContext(profileContext)
    const [rating, setRating] = useState(0)
    useEffect(() => {
        detailsTodo(props.match.params.id)
    }, [])
    function handleRating(id, e) {
        console.log(id)
        console.log(e)
        ratingProduct(id, e)
    }
    return (
        <React.Fragment>
            <CssBaseline />
            {productToDetails != null ?
                <Container className={classes.container} >
                    <Container className={classes.container1} maxWidth="sm">
                        <div><img className='img_details' src={productToDetails.img} alt="" /></div>
                    </Container>
                    <Container className='detal' className={classes.container1}>
                        <div>
                            <p className='item_details1' >{productToDetails.title}</p>
                        </div>
                        <div>
                            <p className='item_details2' ><span className='span_details'>Цена:     </span>    {productToDetails.price} сом</p>
                        </div>
                        <div>
                            <p className='item_details3' ><span className='span_details'>Тип:     </span>    {productToDetails.type}</p>
                        </div>
                        <div>
                            <p className='item_details3' ><span className='span_details'>Подтив:     </span>    {productToDetails.subType}</p>
                        </div>
                        <div>
                            <p className='item_details3' ><span className='span_details'>Материал:     </span>    {productToDetails.material}</p>
                        </div>
                        <div>
                            <p className='item_details4'><span className='span_details'>Описание:     </span>    {productToDetails.description}</p>
                        </div>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating
                                name="customized-empty"
                                defaultValue={productToDetails.rating}
                                onChange={(e) => handleRating(productToDetails.id, e.target.value)}
                                precision={0.5}
                                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            />
                            <h4>Оцените качество продукции</h4>
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <IconButton onClick={() => addAndDeleteProductInCart(productToDetails)}
                            color={checkProductInCart(productToDetails.id) ? "secondary" : "primary"} 
                            style={{ fontSize: '1.3em' }} 
                            aria-label="add to shopping cart"
                            >
                                <AddShoppingCartIcon style={{ fontSize: 60 }} />
                            </IconButton>
                            <h4>{checkProductInCart(productToDetails.id) ? 'Добавлено в корзину' : "Недобавлено"}</h4>
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <IconButton onClick={() => addAndDeleteProductInLiked(productToDetails)}
                            color={checkProductInLiked(productToDetails.id) ? "secondary" : "primary"}
                            style={{ fontSize: '1.3em' }}
                            aria-label="add to shopping cart">
                                <FavoriteIcon style={{ fontSize: 60 }} />
                            </IconButton>
                            <h4>{checkProductInLiked(productToDetails.id) ? 'Добавлено в Избранное' : "Недобавлено"}</h4>
                        </Box>
                    </Container>
                </Container>
                : 'Loading'}
        </React.Fragment>
    );
};

export default ProductDetails;