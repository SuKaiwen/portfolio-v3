import React from 'react';

import '../CSS/Global.css';

function About(props) {
    return (
        <div className = "main-container">
            <div className = "container row-container black">
                <div className = "landing-col-1">
                    <p>Hi, my name is</p>
                    <h1>Kevin Su</h1>
                    <h1>Welcome to my portfolio</h1>
                    <div className = "text-box">
                        <p>I am a Software Engineer from Sydney, Australia. I specialize in Front-End Development and Creating Digital Solutions.</p>
                    </div>
                    <div className = "row">
                        <button className = "btn"><i class="fas fa-arrow-right fa-2x"></i></button><p>Scroll to learn more </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;