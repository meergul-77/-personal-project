import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './container/Signin/Signin';
import Signup from './container/Signup/Signup';
import Slide from './container/Home/Slide/Slide';
import Navbar from './container/Header/Navbar/Navbar'
import Footer from './container/Footer/Footer';
import AuthContextProvider from './contexts/AuthContext';
import { history } from './helpers/history'
// import AddProduct from './container/AdminPanel/AddProduct';
import ProductContextProvider from './contexts/ProductContext';
import AdminPanel from './container/AdminPanel/AdminPanel';
import EditProduct from './container/AdminPanel/EditProduct';
import ProductList from './container/Product/ProductList';
import ProductDetails from './container/Product/ProductDetails';
import Cart from './container/Header/Cart/Cart';
import Wish from './container/Header/Wish/Wish';
import Checkout from './container/Home/payment/Checkout';
import Profile from './container/Profile/Profile';
import EditProfile from './container/Profile/EditProfile';
import ProfileContextProvider from './contexts/ProfileContext';
import ParentReview from './container/Review/ParentReview'
import CreditCard from './container/CreditCard/PaymentCard/CreditCard';
import SearchPage from './container/SearchPage/SearchPage';

const Routes = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <AuthContextProvider>
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/signin' component={Signin} />
                </AuthContextProvider>
            </Switch>
            <Switch>
                <ProfileContextProvider>
                    <Navbar />
                    <Route exact path='/' component={Slide} />
                    <Route exact path='/admin' component={AdminPanel} />
                    <Route exact path='/edit' component={EditProduct} />
                    <Route exact path='/list' component={ProductList} />
                    <Route exact path='/details:id' component={ProductDetails} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/makeorder" component={CreditCard} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/wish" component={Wish} />
                    <Route exact path="/check" component={Checkout} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/review' component={ParentReview} />
                    <Route exact path="/edit_profile" component={EditProfile} />
                </ProfileContextProvider>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;