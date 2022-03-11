import React from 'react';

import '../CSS/Global.css';
import '../CSS/Landing.css';

function Landing(props) {
    return (
        <div className = "main-container">
            <div className = "title-box">
                <p>Hi there! I'm Kevin Su.</p>
                <h1>A Software Engineer, Design and <i class="fas fa-cloud"></i> Cloud Enthusiast based in Sydney, Australia.</h1>
            </div>
            <div className = "text-box">
                <p>I'm a Software Engineer specialising in Front-End Development and building awesome user experiences. Check me out down below!</p>
            </div>
            <div className = "text-box">
                <p className = "landing-section"><i class="fas fa-envelope"></i> Kevinsu@outlook.co.nz</p>
                <p className = "landing-section"><i class="fab fa-github"></i> SuKaiwen</p>
                <p className = "landing-section"><i class="fab fa-linkedin"></i> Kevin Su</p>
                <p className = "landing-section"><i class="fas fa-file"></i> Resume</p>
                <p className = "landing-section"><i class="fas fa-code"></i> Featured Projects</p>
            </div>
        </div>
    );
}

export default Landing;