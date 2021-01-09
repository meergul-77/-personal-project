import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

function Footer() {
    return (
        <div>
            <div className='footer-container'>
                {/* <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Adventure of amazing style
                    </p>
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.
                    </p>
                   

                </section> */}
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/list'>Гостинная</Link>
                            <Link to='/list'>Спальня</Link>
                            <Link to='/list'>Столовая</Link>
                            <Link to='/list'>Ванная комната</Link>
                            <Link to='/list'>Посуда</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/profile'>Email</Link>
                            <Link to='/profile'>Profile</Link>
                            <Link to='/list'>Products</Link>
                        </div>
                    </div>

                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/review' className='social-logo'>
                                Оставить отзыв
                            </Link>
                        </div>
                        <div>
                            <Link to='/'>
                                <img className='website-rights' src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook"
                                to='/facebook.com'
                                target='_blank'
                                aria-label='Facebook'>
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                            <Link
                                className='social-icon-link instagram'
                                to='/instagram.com'
                                target='_blank'
                                aria-label='Instagram'>
                                <i className='fab fa-instagram'></i>
                            </Link>
                            <Link
                                className='social-icon-link twitter'
                                to='/twitter.com'
                                target='_blank'
                                aria-label='Twitter'>
                                <i className='fab fa-twitter'></i>
                            </Link>
                            <Link
                                className='social-icon-link pinterest'
                                to='/pinterest.com'
                                target='_blank'
                                aria-label='Pinterest'>
                                <i className='fab fa-pinterest'></i>
                            </Link>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer