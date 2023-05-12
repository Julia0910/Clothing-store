import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "./form/authForm";
import "./form/form.css";
import TextField from "./form/textField";

const PersonalAccount = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  
  return <>{isLogin ? <TextField /> : <AuthForm />}</>;
};

export default PersonalAccount;
