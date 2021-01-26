import React from "react";
import { Link } from "react-router-dom";
import {PATH} from "./Routes";
import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.aside}>
            <Link to={PATH.PRE_JUNIOR}>Pre Junior</Link>
            <Link to={PATH.JUNIOR}>Junior</Link>
            <Link to={PATH.JUNIOR_PLUS}>Junior Plus</Link>
        </div>
    );
}

export default Header;
