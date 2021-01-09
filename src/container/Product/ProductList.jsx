import React, { useContext, useEffect, useState } from 'react';
import './ProductList.css';
import { Link, useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import ProductCard from './ProductCard'
import { profileContext } from '../../contexts/ProfileContext';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    media: {
        height: "25vh",
        // width: "50vh",
        paddingTop: '56.25%',
        backgroundSize: "cover"
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


const AdminList = () => {
    const classes = useStyles();
    const { products, getproductsData, totalCount, pageTask, } = useContext(profileContext)
    useEffect(() => {
        getproductsData()
    }, [])
    console.log(products)
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
    return (
        <>
            <div className="product-list" >
                {products.map(item => (
                    <ProductCard item={item} key={item.id} />
                    ))}
            </div>
            <Pagination onChange={(e, newpage) => pageTask(newpage)} page={parseInt(search.get("_page")) || 1} count={Math.ceil(totalCount / 3)} defaultPage={1} />
        </>
    );
};







export default AdminList;

