import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hook/useCart';
import { useAuth } from '../../hook/useAuth';

export default function Header() {
    const {user, logout} = useAuth();

    const { cart } = useCart();

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    E-Bookstore!
                </Link>
                <nav>
                    <ul>
                        {
                            user ? (
                                <li className={classes.menu_container}>
                                    <Link to="/profile">{user.name}</Link>
                                    <div className={classes.menu}>
                                        <Link to="/profile">Profile</Link>
                                        <Link to="/orders">Orders</Link>
                                        <a onClick={logout}>Logout</a>
                                    </div>
                                </li>
                            ) : (
                                <Link to="/login">Login</Link>
                            )
                        }

                        <li>
                            <Link to="/cart">
                                Cart
                                {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}