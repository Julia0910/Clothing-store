import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <>
    <hr/>
      <footer className="style-footer">
        <div className="style-block">
          <p>О НАС</p>
          <p role={"button"}>Отзывы</p>
          <br/>
          <p role={"button"}>Контакты</p>
          <br/>
          <p role={"button"}>Магазины</p>
        </div>
        <div className="style-block">
          <p>ЗАДАЙТЕ ВОПРОС</p>
          <p role={"button"}>WHATSAPP</p>
          <br/>
          <p role={"button"}>TELEGRAM-КАНАЛ</p>
          <br/>
          <p role={"button"}>ЭЛ.ПОЧТА</p>
        </div>
        <div className="style-block">
          <p>ПОКУПАТЕЛЯМ</p>
          <p role={"button"}>ОПЛАТА И ДОСТАВКА</p>
          <br/>
          <p role={"button"}>РЕКВИЗИТЫ ОРГАНИЗАЦИИ</p>
          <br/>
          <p role={"button"}>ВОЗВРАТ</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
