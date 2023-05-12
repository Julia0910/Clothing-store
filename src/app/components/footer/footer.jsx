import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"
const Footer = () => {
  return (
    <>
    <hr/>
      <footer className="style-footer">
        <div className="style-block">
          <p>О НАС</p>
          <Link>Отзывы</Link>
          <br/>
          <Link>Контакты</Link>
          <br/>
          <Link>Магазины</Link>
        </div>
        <div className="style-block">
          <p>ЗАДАЙТЕ ВОПРОС</p>
          <Link>WHATSAPP</Link>
          <br/>
          <Link>TELEGRAM-КАНАЛ</Link>
          <br/>
          <Link>ЭЛ.ПОЧТА</Link>
        </div>
        <div className="style-block">
          <p>ПОКУПАТЕЛЯМ</p>
          <Link>ОПЛАТА И ДОСТАВКА</Link>
          <br/>
          <Link>РЕКВИЗИТЫ ОРГАНИЗАЦИИ</Link>
          <br/>
          <Link>ВОЗВРАТ</Link>
          <Link>ВОПРОС-ОТВЕТ</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
