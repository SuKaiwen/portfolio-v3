import React from 'react';

function Nav(props) {
    return (
        <div className = "nav">
            <a href="#landing"><h1 className = "blue-box">KS <span className = "yellow-box">KEVIN SU</span></h1></a>
            <div className = "content">
                <a href="#about"><h1>ABOUT</h1></a>
                <a href="#experience"><h1>EXPERIENCE</h1></a>
                <a href="#projects"><h1>PROJECTS</h1></a>
            </div>
        </div>
    );
}

export default Nav;