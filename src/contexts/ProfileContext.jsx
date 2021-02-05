import React, {useReducer} from 'react';
import { AUTH_API, JSON_API } from '../helpers/constants';
import axios from 'axios';
import { calcTotalPrice } from '../helpers/CalcPrice';
import { calcSubPrice } from '../helpers/CalcPrice';
import { useHistory } from 'react-router-dom';

export const profileContext = React.createContext();
const INIT_STATE = {
    products: [],
    profile: {},
    page: 1,
    profToEdit: null,
    productToDetails: null,
    comment: [],
    totalCount: 0,
    productToEdit: null,
    productsCountInCart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).products.length : 0,
    productsCountInLiked: JSON.parse(localStorage.getItem('liked')) ? JSON.parse(localStorage.getItem('liked')).products.length : 0
};

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_CONTACTS_DATA":
            return { ...state, comment: action.payload }
        case "GET_PROFILE_PAGE":
            return {...state, profile: action.payload }
        case "EDIT_PROFILE":
            return { ...state, profToEdit: action.payload }
        case "CET_CONTACTS_DATA":
            return { ...state, products: action.payload }
        case "DETAILS_TODO":
            return { ...state, productToDetails: action.payload }
        case "ADD_AND_DELETE_PRODUCT_IN_CART":
            return { ...state, productsCountInCart: action.payload }
        case "GET_CART":
            return { ...state, cartData: action.payload }
        case "DELETE_ITEM":
            return { ...state, cartData: action.payload }
        case "ADD_AND_DELETE_PRODUCT_IN_LIKED":
            return { ...state, productsCountInLiked: action.payload }
        case "GET_LIKED":
            return { ...state, likeData: action.payload }
        default: return state
        case "SET_TOTAL_COUNT":
            return { ...state, totalCount: action.payload };
        case "EDIT_TODO":
            return { ...state, productToEdit: action.payload }
        case "CONTACTS_SET_PAGE":
            return { ...state, page: action.page }
        case "SET_TOTAL_COUNT":
                return { ...state, totalCount: action.payload };
    }
}

const ProfileContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const history = useHistory();
    const getreviewData = async () => {

        let { data } = await axios(`${JSON_API}/comment`)
        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data
        })  
    }

    const addTask = async (newTask) => {
        await axios.post(`${JSON_API}/comment`, newTask)
        getreviewData()
    }

    const deleteTask = async (id) => {
        await axios.delete(`${JSON_API}/comment/${id}`)
        getreviewData()
    }

    
    async function profilePage() {
        let  {data}  = await axios(`${JSON_API}/profile`)
        console.log(data);
        dispatch({
            type: "GET_PROFILE_PAGE",
            payload: data
        })
    }
    async function editProfile() {
        let { data } = await axios(`${JSON_API}/profile`)
        console.log(data)
        dispatch({
            type: "EDIT_PROFILE",
            payload: data
        })
    }
    const saveProf = async (newProf, history) => {
        console.log(newProf);
        try {
            await axios.patch(`${JSON_API}/profile`, newProf)
            history.push('/profile')
        } catch (error) {
            history.push('/error')
        }
    }








    const getproductsData = async () => {
        let params = new URLSearchParams(window.location.search);
        if (!params.get("_page")) params.set("_page", 1);
        if (!params.get("_limit")) params.set("_limit", 3);
        history.push("/list?" + params);
        let { data, headers } = await axios(`${JSON_API}/products?${params}`);
        dispatch({
            type: "SET_TOTAL_COUNT",
            payload: parseInt(headers["x-total-count"])
        })
        dispatch({
            type: "CET_CONTACTS_DATA",
            payload: data
        })
    }
    const pageTask = async (page) => {
        const search = new URLSearchParams(window.location.search);
        search.set("_page", page);
        search.set("_limit", 3);
        history.replace(window.location.pathname + "?" + search.toString());
        getproductsData()
    }
    const pageAdmin = async (page) => {
        const search = new URLSearchParams(window.location.search);
        search.set("_page", page);
        search.set("_limit", 3);
        history.replace(window.location.pathname + "?" + search.toString());
        getproductsAdmin()
    }
    const getproductsAdmin = async () => {
        let params = new URLSearchParams(window.location.search);
        if (!params.get("_page")) params.set("_page", 1);
        if (!params.get("_limit")) params.set("_limit", 3);
        history.push("/admin?" + params);
        let { data, headers } = await axios(`${JSON_API}/products?${params}`);
        dispatch({
            type: "SET_TOTAL_COUNT",
            payload: parseInt(headers["x-total-count"])
        })
        dispatch({
            type: "CET_CONTACTS_DATA",
            payload: data
        })
    }


    const addTaskAdmin = async (newTask) => {
        await axios.post(`${JSON_API}/products`, newTask)
        getproductsAdmin()
    }

    const deleteTaskAdmin = async (id) => {
        await axios.delete(`${JSON_API}/products/${id}`)
        getproductsAdmin()
    }

    const editTodo = async (id) => {
        let { data } = await axios(`${JSON_API}/products/${id}`)
        dispatch({
            type: "EDIT_TODO",
            payload: data
        })
    }
    const saveTask = async (newTask, history) => {
        try {
            await axios.patch(`${JSON_API}/products/${newTask.id}`, newTask)
            history.push('/admin')
        } catch (error) {
            history.push('/error')
        }
    }
    const getproductsDataRating = async (id) => {
        let { data, headers } = await axios(`${JSON_API}/products?${id}`);
        dispatch({
            type: "CET_CONTACTS_DATA",
            payload: data
        })
    }
    const detailsTodo = async (id) => {
        let { data } = await axios(`${JSON_API}/products/${id}`)
        dispatch({
            type: "DETAILS_TODO",
            payload: data
        })
    }
    function addAndDeleteProductInCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            };
        }
        let newProduct = {
            product: product,
            count: 1,
            subPrice: 0
        }

        newProduct.subPrice = calcSubPrice(newProduct)
        let newCart = cart.products.filter(item => item.product.id === product.id)
        if (newCart.length > 0) {
            cart.products = cart.products.filter(item => item.product.id !== product.id)
        } else {
            cart.products.push(newProduct)
        }
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch({
            type: "ADD_AND_DELETE_PRODUCT_IN_CART",
            payload: cart.products.length
        })

    }

    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(item => item.product.id === id)
        return newCart.length > 0 ? true : false
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }
    function changeCountProducts(count, id) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.map(item => {
            if (item.product.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    function makeOrder() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        console.log(cart)
    }

    async function ratingProduct(id, rating) {
        console.log(id,rating);
        await axios.patch(`${JSON_API}/products/${id}`, {rating: rating})
        getproductsDataRating()
    }

    function deleteItem(id) {
        console.log('ID', id);
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.filter(item => item.product.id !== id)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    function addAndDeleteProductInLiked(product) {
        let liked = JSON.parse(localStorage.getItem('liked'));
        if (!liked) {
            liked = {
                products: []
            };
        }
        let newProduct = {
            product: product
        }
        let newLiked = liked.products.filter(item => item.product.id === product.id)
        if (newLiked.length > 0) {
            liked.products = liked.products.filter(item => item.product.id !== product.id)
        } else {
            liked.products.push(newProduct)
        }
        liked.totalPrice = calcTotalPrice(liked.products)
        localStorage.setItem("liked", JSON.stringify(liked))
        dispatch({
            type: "ADD_AND_DELETE_PRODUCT_IN_LIKED",
            payload: liked.products.length
        })

    }

    function checkProductInLiked(id) {
        let liked = JSON.parse(localStorage.getItem('liked'));
        if (!liked) {
            liked = {
                products: [],
                totalPrice: 0
            }
        }
        let newLiked = liked.products.filter(item => item.product.id === id)
        return newLiked.length > 0 ? true : false

    }

    function getLiked() {
        let liked = JSON.parse(localStorage.getItem('liked'));
        dispatch({
            type: "GET_LIKED",
            payload: liked
        })
    }

    function deleteItemInLiked(id) {
        console.log('ID', id);
        let liked = JSON.parse(localStorage.getItem('liked'))
        liked.products = liked.products.filter(item => item.product.id !== id)
        localStorage.setItem("liked", JSON.stringify(liked))
        getLiked()
    }
    
    return (
        <profileContext.Provider value ={{
            products: state.products,
            comment: state.comment,
            profile: state.profile,
            profToEdit: state.profToEdit,
            productToEdit: state.productToEdit,
            productToDetails: state.productToDetails,
            productsCountInCart: state.productsCountInCart,
            productsCountInLiked: state.productsCountInLiked,
            cartData: state.cartData,
            likeData: state.likeData,
            page: state.page,
            totalCount: state.totalCount,
            addTask,
            addTaskAdmin,
            getproductsData,
            getreviewData,
            deleteTaskAdmin,
            profilePage,
            editProfile,
            getproductsAdmin,
            pageAdmin,
            deleteTask,
            editTodo,
            saveTask,
            pageTask,
            saveProf,
            // checkPage,
            deleteItemInLiked,
            getLiked,
            addAndDeleteProductInLiked,
            checkProductInLiked,
            getproductsDataRating,
            addAndDeleteProductInCart,
            checkProductInCart,
            detailsTodo,
            deleteItem,
            getCart,
            makeOrder,
            changeCountProducts,
            ratingProduct,
            getproductsData,
            pageTask,
        }}>
            {children}
        </profileContext.Provider>
    );
};

export default ProfileContextProvider;