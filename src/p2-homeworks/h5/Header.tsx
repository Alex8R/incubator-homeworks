import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const toggleMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className={s.menuWrapper}>
            <div className={s.burgerMenu}
                 onClick={toggleMenu}>
                &#9776;
            </div>
            <div className={`${s.containerMenuLinks} ${activeMenu && s.activeMenu}`}>
                <NavLink to={PATH.PRE_JUNIOR}
                         activeClassName={s.active} className={s.menuLinks}>
                    Pre
                    Junior
                </NavLink>
                <NavLink to={PATH.JUNIOR}
                         activeClassName={s.active}
                         className={s.menuLinks}>
                    Junior
                </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         activeClassName={s.active}
                         className={s.menuLinks}>
                    Junior
                    +
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
