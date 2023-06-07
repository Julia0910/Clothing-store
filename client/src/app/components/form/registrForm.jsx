import React, { useState, useEffect } from "react";
import "./form.css";
import { validator } from "../../utils/validator";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";

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
    const [errors, setErrors] = useState({});

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(set(data));
    //     setDisabled(true);
    //     history.push("/personalAccount");
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = { ...data };
        dispatch(signUp(newData));
        setDisabled(true);
        history.push("/personalAccount");
    };

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен некорректно",
            },
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения",
            },
            min: {
                message: "Имя должено состаять миниму из 3 символов",
                value: 3,
            },
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
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
                        {errors && (
                            <div className="invalid-feedback ">
                                {errors.name}
                            </div>
                        )}
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
                        <span className="card-header">
                            Введите дату рождения
                        </span>
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
                        <span className="card-header">
                            Введите электронную почту
                        </span>
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
                        {errors && (
                            <div className="invalid-feedback ">
                                {errors.email}
                            </div>
                        )}
                        <button
                            className="btn btn-secondary"
                            disabled={disabled}
                        >
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
