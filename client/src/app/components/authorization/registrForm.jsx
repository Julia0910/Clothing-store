import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./auth.css";
import { validator } from "../../utils/validator";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp, getAuthErrors, getIsLoggedIn } from "../../store/users";
import TextFieldAuth from "../form/textFieldAuth";

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
    const authError = useSelector(getAuthErrors());
    const isLogin = useSelector(getIsLoggedIn());

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = { ...data };
        dispatch(signUp(newData));
    };

    useEffect(() => {
        if (isLogin) history.push("/personalAccount");
    }, [isLogin, history])

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const validatorConfig = useMemo(() => ({
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
        },
        surname: {
            isRequired: {
                message: "Фамилия обязательно для заполнения",
            },
        },
    }), []);

    const validate = useCallback(() => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }, [setErrors, validatorConfig, data]);

    useEffect(() => {
        validate();
    }, [data, validate]);

    return (
        <>
            <div className="style-blosk">
                <div>
                    <h1>Регистрация</h1>
                </div>
                <div className="style-form ">
                    <form onSubmit={handleSubmit}>
                        <TextFieldAuth
                            onChange={handleChange}
                            label="Имя"
                            name="name"
                            value={data.name}
                            placeholder="name"
                            type="name"
                            id="name"
                            error={errors.name}
                        />
                        <TextFieldAuth
                            onChange={handleChange}
                            label="Фамилия"
                            name="surname"
                            value={data.surname}
                            placeholder="surname"
                            type="surname"
                            id="surname"
                            error={errors.surname}
                        />
                        <TextFieldAuth
                            onChange={handleChange}
                            label="Дата рождения"
                            name="date"
                            min="1970-01-01"
                            max="2023-01-01"
                            value={data.date}
                            placeholder="дата рождения"
                            type="date"
                            id="date"
                        />
                        <TextFieldAuth
                            onChange={handleChange}
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            placeholder="email"
                            type="email"
                            id="email"
                            error={errors.email}
                        />
                        <button
                            className="btn btn-secondary"
                            disabled={disabled}
                        >
                            Зарегистрироваться
                        </button>
                    </form>
                    {authError ? <span>Не валидный email</span> : ""}
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
