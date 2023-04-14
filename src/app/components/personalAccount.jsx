import React, { useState } from "react";
import TextField from "./form/textField";

const PersonalAccount = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <div>
      <div>
        <h1>Авторизация</h1>
      </div>
      <div>
        <form>
          <TextField
            label="Электронная почта"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            label="Пароль"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <button type="button" onClick={console.log("dsg")}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalAccount;
