import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/users";

const History = (name) => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <>
            <div className="contain-history">
                <div className="history" role="button">
                    <i className="bi bi-suit-heart"></i>
                    <Link className="link" to={"/favorites"}>
                        Избранное
                    </Link>
                </div>
                <div className="history" role="button">
                    <i className="bi bi-hdd-stack"></i>
                    <Link className="link" to={"/edit"}>
                        Мои данные
                    </Link>
                </div>
                <div className="history" role="button">
                    <i className="bi bi-star"></i>
                    <Link className="link" to={"/"}>
                        AWN
                    </Link>
                </div>
                <div className="history" role="button">
                    <i className="bi bi-person-gear"></i>
                    <button className="logOut" onClick={handleLogOut}>
                        Выйти
                    </button>
                </div>
            </div>
        </>
    );
};

export default History;
