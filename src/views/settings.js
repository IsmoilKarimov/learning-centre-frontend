import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/settings.scss'

const Settings = () =>{
    return(
        <>
            <div className="btitle">Sozlamalar</div>
            <div className="row">
                <div className="col-8">
                    <div className="settings">
                        <div className="settings__title">Akkaunt</div>
                        <p>Tizimga kirish uchun maxfiy kalit va emailni sozlash</p>
                        <div className="settings__line"></div>
                        <div className="settings__input">
                            <label htmlFor='email'>Email manzil</label>
                            <input type='email' id="email" placeholder="Email manzil..."/>
                        </div>
                        <div className="settings__line"></div>
                        <div className="settings__input">
                            <label htmlFor='pass'>Maxfiy kalit</label>
                            <input type='password' className="mb" id="pass" placeholder="Joriy maxfiy kalitni kiriting..."/>
                            <input type='password' className="mb" placeholder="Yangi maxfiy kalitni kiriting..."/>
                            <input type='password' placeholder="Qaytadan yangi maxfiy kalitni kiritng..."/>
                        </div>
                        <div className="settings__line"></div>
                        <button className="link save">Saqlash</button>
                    </div>
                </div>
                <div className="col-4">
                    <ul className="settings__menu">
                        <li>
                            <Link className="active" to='/'>Akkaunt</Link>
                        </li>
                        <li>
                            <Link to='/'>Shaxsiy sahifa</Link>
                        </li>
                        <li>
                            <Link to='/'>Yangiliklar</Link>
                        </li>
                        <li>
                            <Link to='/'>To'lovlar</Link>
                        </li>
                        <li>
                            <Link to='/'>Xabarlar</Link>
                        </li>
                        <li>
                            <Link to='/'>Tizimni tark etish</Link>
                        </li>
                    </ul>
                </div>
            </div>
        
        </>
    )
}
export default Settings