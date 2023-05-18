import React, { useState } from "react";
import "./form.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "../../../store/slices/auth";

const state = {
  name: "",
  surname: "",
  date: "",
  email: "",
};
const RegistrForm = () => {
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

  return (
    <>
      <div className="style-blosk">
        <div>
          <h1>Регистрация</h1>
        </div>
        <div className="style-form ">
          <form onSubmit={handleSubmit}>
            <span className="card-header">Введите имя</span>
            <div className="style-input-div">
              <input
                className="style-input"
                type="name"
                id="name"
                name="name"
                value={data.name}
                placeholder="имя"
                onChange={handleChange}
              />
            </div>
            <span className="card-header">Введите фамилию</span>
            <div className="style-input-div">
              <input
                className="style-input"
                type="surname"
                id="surname"
                name="surname"
                value={data.surname}
                placeholder="фамилия"
                onChange={handleChange}
              />
            </div>
            <span className="card-header">Введите дату рождения</span>
            <div className="style-input-div">
              <input
                className="style-input"
                type="date"
                min="1970-01-01"
                max="2023-01-01"
                id="date"
                name="date"
                value={data.date}
                placeholder="дата рождения"
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
            <button className="btn btn-secondary" disabled={disabled}>
              Зарегистрироваться
            </button>
          </form>
        </div>
        <span>
          Если у Вас уже есть личный кабинет,{" "}
          <Link to="/personalAccount">Войдите</Link>
        </span>
      </div>
    </>
  );
};

export default RegistrForm;
