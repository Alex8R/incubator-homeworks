import React from "react";
import style from "./Message.module.css"
import {MessageDataType} from "./HW1";

function Message(props: MessageDataType) {
    return (
        <div>
            <div className={style.message}>
                <img className={style.avatar} src={props.avatar} alt="avatar" />
                <div className={style.messageCard}>
                    <div className={style.messageBody}>
                        <div className={style.name}>{props.name}</div>
                        <div className={style.messageText}>{props.message}</div>
                    </div>
                    <div className={style.messageTime}>{props.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;
