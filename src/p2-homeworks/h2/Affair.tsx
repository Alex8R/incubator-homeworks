import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => props.deleteAffairCallback(id);

    return (
        <div>
            {props.affair.name}
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    );
}

export default Affair;
