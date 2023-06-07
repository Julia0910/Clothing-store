import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "../components/form/authForm";
// import AdminPanel from "../components/adminPanel/AdminPanel";
import PersonalAccount from "../components/account/personalAccount";
import "../components/form/form.css";

const Account = () => {
    const isLogin = useSelector((state) => state.users.isLoggedIn);

    return <>{isLogin ? <PersonalAccount /> : <AuthForm />}</>;
};

export default Account;
