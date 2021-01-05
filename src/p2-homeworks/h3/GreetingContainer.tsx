import React, {useState, ChangeEvent} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [totalUsers, setTotalUsers] = useState<number>(0);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(error) setError("");
        setName(e.target.value);
    };
    const addUser = () => {
        if(name.length < 1) return setError('please, type your name');
        if(name.length >= 1 && name.length < 3) return setError('please, type your full name')
        if(name.length > 15) return setError('your name is too long')
        setError('');
        addUserCallback(name);
        setTotalUsers(totalUsers + 1);
        setName("");
        alert(`Hello, ${name}!`);
    };


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
