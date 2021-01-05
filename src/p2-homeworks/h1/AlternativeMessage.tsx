import React from "react";
import style from "./AlternativeMessage.module.css";
import {AlternativeMessageType} from "./HW1";
import avatar from "./assets/img/avatar-mock.png"

function AlternativeMessage(props: AlternativeMessageType) {
    return (
        <div>
            <div className={style.message}>
                <div className={style.messageCard}>
                    <img className={style.avatar} src={props.avatar || avatar} alt="avatar" />
                    <div>
                        <div className={style.name}>{props.name}</div>
                        <div className={style.messageText}>{props.message}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlternativeMessage;
