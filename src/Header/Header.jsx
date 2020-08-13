import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import s from './header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">

                    <Navbar.Brand >V Крутые сайты для творческих людей</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className={s.links}>
                        <nav className={s.nav}>
                            <div><NavLink to='/main' activeClassName={s.active} className={s.links} >Главная</NavLink></div>
                            < div><NavLink to='portfolio' activeClassName={s.active} className={s.links}>Партфолио</NavLink></div>
                            <div><NavLink to='/contacts' activeClassName={s.active} className={s.links} > Контакты</NavLink></div>
                        </nav>

                    </Navbar.Collapse>
                </div>
            </Navbar>

            </>
    )




}
export default  Header