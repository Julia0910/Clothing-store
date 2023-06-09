import React, { useEffect } from "react";
import DataAccount from "./dataAccount";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserData, loadUsersList } from "../../store/users";
import "./account.css";
const PersonalAccount = () => {
    const dispatch = useDispatch();
    const user = useSelector(getCurrentUserData());

    useEffect(() => {
        dispatch(loadUsersList());
    }, [dispatch]);

    return (
        <>
            <div className="contain">
                <div className="contain-img">
                    <img
                        className="image"
                        src="https://allweneed.ru/media/pages/my_coverjpg_L4fI7cH.jpg"
                        alt="NOT"
                    />
                </div>
                <p className="headers">{`Здраствуйте, ${user?.name}`} </p>
                <div>
                    <DataAccount />
                </div>
            </div>
        </>
    );
};

export default PersonalAccount;
