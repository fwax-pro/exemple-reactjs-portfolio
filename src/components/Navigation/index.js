import React from "react";
import {
  Link
} from "react-router-dom";

import {
    ABOUT,
    EXPERIENCE,
    EDUCATION
} from '../../constants/routes';

import portraitImg from './portrait_640.jpg';

import './navigation.css';

const Navigation = () => (
    <nav className="navbar">
        <div className="portrait">
            <img className="img-responsive" src={portraitImg} />
        </div>
        <ul className="menu">
            <li className="fade-in-up">
                <Link to={ABOUT}>about</Link>
            </li>
            <li className="fade-in-up">
                <Link to={EDUCATION}>education</Link>
            </li>
            <li className="fade-in-up">
                <Link to={EXPERIENCE}>experience</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;