import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

export type MessageDataType = {
    avatar: string
    name: string
    message:string
    time: string
}

export type AlternativeMessageType = {
    avatar: string
    name: string
    message: string
}
const messageData: MessageDataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};
const altMessageData: AlternativeMessageType = {
    avatar: '',
    name: 'Alex',
    message: 'hi there!'
}
function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage avatar={altMessageData.avatar} name={altMessageData.name} message={altMessageData.message}/>
            <hr/>
        </div>
    );
}

export default HW1;
