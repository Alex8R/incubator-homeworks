import React from "react";
import {Switch, Route, Redirect} from "react-router";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior-plus",
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={"/"}
                       exact
                       render={() =>
                           <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR}
                       exact
                       render={() =>
                           <PreJunior/>}/>
                <Route path={PATH.JUNIOR}
                       exact
                       render={() =>
                           <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS}
                       exact
                       render={() =>
                           <JuniorPlus/>}/>
                <Route render={() =>
                    <Error404/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
