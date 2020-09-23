import React from 'react';
import c from './MobileBar.module.scss';
import { NavLink, useRouteMatch } from "react-router-dom";
import Justicon from "../../shared/JustIcon/Justicon";

function MobileBar() {
    const messageMatch = useRouteMatch("/inbox/:id");
    const style = messageMatch ? { display: 'none'} : {};

    return (
        <nav className={c.bar} style={style}>
            <div className={c.MobileBar}>
                <NavLink to={'/'} exact className={c.tab} activeClassName={c.tab__active}>
                    <Justicon icon="compass" className={c.icon}/>
                    <h2>Explore</h2>
                </NavLink>
                <NavLink to={'/tours'} className={c.tab} activeClassName={c.tab__active}>
                    <Justicon icon="search" className={c.icon}/>
                    <h2>Search</h2>
                </NavLink>
                <NavLink to={'/tourevents'} className={c.tab} activeClassName={c.tab__active}>
                    <Justicon icon="map" className={c.icon}/>
                    <h2>Tours</h2>
                </NavLink>
                <NavLink to={'/inbox'} className={c.tab} activeClassName={c.tab__active}>
                    <Justicon icon="inbox" className={c.icon}/>
                    <h2>Inbox</h2>
                </NavLink>
                <NavLink to={{pathname: '/me'}} className={c.tab} activeClassName={c.tab__active}>
                    <div className={c.photo}>
                        <img src="https://google.com/img.png" alt=""/>
                    </div>
                    <h2>Profile</h2>
                </NavLink>
            </div>
        </nav>
    );
}

export default MobileBar;
