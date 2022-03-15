import React from 'react';

function Experience(props) {
    return (
        <div className = "main-container">
            <div className='about-container'>
                <h1>EXPERIENCE</h1>
                <p>Where I have worked...</p>
                <div className = "row">
                    <button className = "btn">AQKA</button>
                    <button className = "btn">GPOS</button>
                </div>
                <h2>AKQA - Associate Frontend Developer</h2>
                <p className = "exp-title">Oct 2021 - Present</p>
                <p className = "exp-title">Digital Design and Communication Agency</p>
                <ul>
                    <li>
                        <p>Developed and maintained code for client websites</p>
                    </li>
                    <li>
                        <p>Performed testing to ensure cross-browser friendliness and mobile responsiveness</p>
                    </li>
                    <li>
                        <p>Assisted in configuring digital content management systems using Sitecore Content Hub</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;