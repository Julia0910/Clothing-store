import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loadUsersList, getCurrentUserData, getIsLoggedIn } from "../store/users";

const NavigationPanel = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(getCurrentUserData());
    const isLoggedIn = useSelector(getIsLoggedIn())

    useEffect(() => {
        if(isLoggedIn) dispatch(loadUsersList());
    }, [ isLoggedIn, dispatch ]);

    const handleHomClick = () => {
        history.push("/");
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary text-bg-secondary p-3 ">
                <div className="container-fluid navigation-bar">
                    <span className="nav-link active" onClick={handleHomClick}>
                        All the most beautiful
                    </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to={"/catalog"}
                                >
                                    Каталог
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={"/personalAccount"}
                                >
                                    Личный кабинет
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/shoppingCart"}>
                                    Корзина
                                </Link>
                            </li>
                            {user?.role?.includes("admin") && <li className="nav-item">
                                <Link className="nav-link" to={"/adminPanel"}>
                                    Панель администратора
                                </Link>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavigationPanel;
