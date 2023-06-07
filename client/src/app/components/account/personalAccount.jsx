import React from "react";
import History from "./history";
import "./account.css";
const PersonalAccount = () => {
    return (
        <>
            <div className="contain">
                <div className="contain-img">
                    <img className="image" src="https://allweneed.ru/media/pages/my_coverjpg_L4fI7cH.jpg" alt="NOT" />
                </div>
                <p className="headers">{`Здраствуйте, Юлия`} </p>              
                    <div>
                      <History/>
                    </div>
            </div>
        </>
    );
    };

export default PersonalAccount;
