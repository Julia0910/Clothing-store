import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/users";

const DataAccount = (name) => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <>
            <div className="contain-history">
                <div className="history" role="button">
                    <i className="bi bi-suit-heart"></i>
                    <span className="link">
                        Избранное
                    </span>
                </div>
                <div className="history" role="button">
                    <i className="bi bi-hdd-stack"></i>
                    <span className="link" to={"/edit"}>
                        Мои данные
                    </span>
                </div>
                <div className="history" role="button">
                    <i className="bi bi-star"></i>
                    <Link className="link" to={"/"}>
                        AWN
                    </Link>
                </div>
                <div className="history" role="button">
                    <i className="bi bi-person-gear"></i>
                    <span className="link" onClick={handleLogOut}>
                        Выйти
                    </span>
                </div>
            </div>
        </>
    );
};

export default DataAccount;
