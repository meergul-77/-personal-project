import React, { useContext, useEffect, useState } from 'react';
import { fade, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import CssBaseline from '@material-ui/core/CssBaseline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from '../../../img/logo.png'
import { Link } from 'react-router-dom'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import NavbarMenuType from './NavbarMenuType';
import './Navbar.css'
import { profileContext } from '../../../contexts/ProfileContext';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        color:'inherit'
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        width:'50px',
        // position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'inherit'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        color:'inherit',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    root: {
        display: 'flex',
        padding: '0px'
    },
}));
const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const Navbar = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const { productsCountInCart, productsCountInLiked } = useContext(profileContext);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link to='/admin'>
                <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
            </Link>
            <Link to='/profile'>

                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            </Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            color="inherit"
        >
            <MenuItem>
                <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                    <IconButton aria-label="add to shopping cart">
                        <Badge badgeContent={productsCountInCart} color="secondary">
                            <AddShoppingCartIcon color="inherit" />
                        </Badge >
                        <p>Корзина</p>
                    </IconButton>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to='/wish' className='nav-links' onClick={closeMobileMenu}>
                    <IconButton>
                        <Badge badgeContent={productsCountInLiked} color="secondary">
                            <FavoriteIcon />
                        </Badge >
                        <p>Избранное</p>
                    </IconButton>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle style={{color:'#fff'}} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow} className={classes.root}>
            <CssBaseline />
            <div style={{ backgroundColor: 'rgb(37, 37, 43)', color: 'inherit', width: '100%', display: 'flex', justifyContent: 'space-between' }}
                position="fixed"
            >
                <div style={{ zIndex: '10', color:'inherit' }}><NavbarMenuType /></div>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to='/'>
                            <img src={logo} alt="" style={{ width: '150px', height: '60px' }} />
                        </Link>
                    </Typography>

                    <div className="search-nav">
                        <Link to="/search" className="link" >
                            <div className={classes.searchIcon}>
                            <SearchIcon style={{color: 'white'}}/>
                        </div>
                        </Link>
                    </div>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link to='/signin' className='nav-links' onClick={closeMobileMenu} >
                            <IconButton aria-label="add to shopping cart">
                                    <Typography style={{color:'white'}}>Войти</Typography>
                            </IconButton>
                        </Link>
                        <Link to='/cart' className='nav-links' onClick={closeMobileMenu} >
                            <IconButton color="inherit" aria-label="add to shopping cart">
                                <Badge badgeContent={productsCountInCart} color="secondary">
                                    <AddShoppingCartIcon style={{color:'#fff'}} />
                                </Badge >
                            </IconButton>
                        </Link>
                        <Link to='/wish' className='nav-links' onClick={closeMobileMenu} >
                            <IconButton color="inherit">
                                <Badge badgeContent={productsCountInLiked} color="secondary">
                                    <FavoriteIcon style={{color:'#fff'}} />
                                </Badge >
                            </IconButton>
                        </Link>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle style={{color:'#fff'}} />
                        </IconButton>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </div >
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
export default Navbar;