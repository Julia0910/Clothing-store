import React, { useState, useEffect } from "react";
import "./auth.css";
import { validator } from "../../utils/validator";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/users";
import TextFieldAuth from "../form/textFieldAuth";

const AuthForm = () => {
    const [data, setData] = useState({ name: "", email: "" });
    const dispath = useDispatch();
    const history = useHistory();
    const [disabled, setDisabled] = useState(false);
    const [errors, setErrors] = useState({});

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
        },
    };
    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/";
        setDisabled(true);

        dispath(login({ payload: data, redirect }));
    };

    return (
        <>
            <div className="style-blosk mb-3">
                <div className="style-label">
                    <h1>Авторизация</h1>
                </div>
                <div className="style-form">
                    <form onSubmit={handleSubmit}>
                        <TextFieldAuth
                            onChange={handleChange}
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            placeholder="email"
                            type="email"
                            id="email"
                        />
                        {errors && (
                            <div className="invalid-feedback ">
                                {errors.email}
                            </div>
                        )}
                        <button
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
                    <Link to="/personalAccount/register">
                        Зарегистрируйтесь
                    </Link>
                </span>
            </div>
        </>
    );
};

export default AuthForm;
