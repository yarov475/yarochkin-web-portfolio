import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import s from './main.module.css'
import {NavLink} from "react-router-dom";
const Main = () => {
    return (
        <>
        <div className="container">
            <div>
<h1>Я делаю сайты</h1>
                <p>Если ты хочешь сделать новый шаг и донести свое творчество<br/> до людей мой сайт тебе поможет</p>
                <p>Я кондидат философии художник и музыкант, <br/>
                если мы друг другу понарвимся то я с любовью сделаю сайт который запомнят.<br/>
                </p>
                <p>Я тебя пойму помогу собраться с мыслями: ты получишь не просто сайт - ты лучшие поймешь себя свое творчество и коружение</p>
                <br/><br/>
                <p>тебе не придется заморачиваться над сложными техническими вещами. первые три месяца я веду сайт вместе с продвижением соверешенно бесплатно</p>


                <h2> Продукция</h2>
                <ul>
                    <li> Сайты -Визитки</li>
                    <li> SPA</li>
                    <li> SEO</li>
                    <li> SMM</li>
                </ul>
                <br/> <br/> <br/>

                <h3>Навыки</h3>
                <ul>
                    <li> React.js</li>
                    <li> Materialdesign io</li>
                    <li> Bootstrap</li>
                    <li> JS CSS PHP</li>
                    <li> SEO</li>
                    <li> SMM</li>

                </ul>

            </div>
        </div>


            </>
    )
}
export default  Main;