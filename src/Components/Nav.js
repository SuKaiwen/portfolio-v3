import React from 'react';

function Nav(props) {
    return (
        <div className = "nav">
            <h1 className = "blue-box">KS <span className = "yellow-box">KEVIN SU</span></h1>
            <div className = "content">
                <h1>ABOUT</h1>
                <h1>EXPERIENCE</h1>
                <h1>PROJECTS</h1>
            </div>
        </div>
    );
}

export default Nav;