import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  UserOutlined,
  DeleteOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

const NavigationPanel = () => {
  const history = useHistory();

  const handleHomClick = () => {
    history.push("/");
  };
  return (
    <>
      <div className="navigation-bar">
        <span onClick={handleHomClick}>All the most beautiful</span>
        <div>
          <Link to={"/catalog"}>
            <UnorderedListOutlined />
            Каталог
          </Link>
          <span>
            <SearchOutlined />
            Поиск
          </span>
          <Divider type="vertical" />
          <Link to={"/personalAccount"}>
            <UserOutlined />
            Личный кабинет
          </Link>
          <Divider type="vertical" />
          <Link to={"/shoppingCart"}>
            <DeleteOutlined />
            Корзина
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationPanel;
