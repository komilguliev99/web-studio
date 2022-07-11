import React, { FC } from 'react';
import './index.scss';

export const Header: FC<{}> = props => {
    return (
        <div className="Header">
            <div className="Header__logo"></div>
            <div className="Header__info">
                <p className="Header__numbers">+992 907 77 55 22</p>
                <button className="Header__call">Обсудить проект</button>
                <div className="Header__menu-toggle">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    );
};
