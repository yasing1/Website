import React, { Component } from 'react'
import '../assets/css/Header2.css'

export default class Header2 extends Component
{
    render()
    {
        return (
            <div>
                <ul className = "Items">
                    <li>
                        <a>
                        Anasayfa
                        </a>
                    </li>

                    <li className="DropDownMenu">
                        <div className="DropDownButton">
                            <p>
                                Hakkımızda
                            </p>
                        </div>
                        <div className="DropDownContent">
                            <a>Polatrans Kimdir?</a>
                            <a>Neden Polotrans?</a>
                            <a>Vizyon ve Misyon</a>
                            <a>Test4</a>
                            <a>Test5</a>
                        </div>
                    </li>

                    <li className="DropDownMenu">
                        <div className="DropDownButton">
                           <p> Destinasyonlar</p> 
                        </div>
                        <div className="DropDownContent">
                            <a>Test1</a>
                            <a>Test2</a>
                            <a>Test3</a>
                        </div>
                    </li>

                    <li>
                        <a>
                            Hizmetlerimiz
                        </a>
                    </li>

                    <li>
                        <a>
                            İletişim

                        </a>
                    </li>


                </ul>
            </div>
        )

    }   
}