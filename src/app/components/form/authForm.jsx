import React, { useState } from "react";
import "./form.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "../../../store/slices/auth";

const state = {
  name: "",
  email: "",
};
const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(set(data));
    setDisabled(true);
    history.push("/personalAccount");
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClisck = () => {
    console.log("click");
  };

  return (
    <>
      <div className="style-blosk">
        <div className="style-label">
          <h1>Авторизация</h1>
        </div>
        <div className="style-form">
          <form onSubmit={handleSubmit}>
            <span className="card-header">Введите имя</span>
            <div className="style-input-div">
              <input
                className="style-input"
                type="name"
                id="name"
                name="name"
                value={data.name}
                placeholder="name"
                onChange={handleChange}
              />
            </div>
            <span className="card-header">Введите электронную почту</span>
            <div className="style-input-div">
              <input
                className="style-input"
                type="email"
                id="email"
                name="email"
                value={data.email}
                placeholder="email"
                onChange={handleChange}
              />
            </div>
            <button
              onClick={handleClisck}
              className="btn btn-secondary"
              disabled={disabled}
              type="submit"
            >
              Войти
            </button>
          </form>
        </div>
        <span>
          Если у Вас еще нет личного кабинета,{" "}
          <Link to="/personalAccount/register">Зарегистрируйтесь</Link>
        </span>
      </div>
    </>
  );
};

export default AuthForm;
