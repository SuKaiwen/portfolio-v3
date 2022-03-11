import React from 'react';

function Landing(props) {
    return (
        <div className = "main-container">
            <div className = "title-box">
                <p>Hi there! I'm Kevin Su.</p>
                <h1>A Software Engineer, Design and <i class="fas fa-cloud"></i> Cloud Enthusiast based in Sydney, Australia.</h1>
            </div>
            <div className = "landing-grid">
                <div className = "logo-container">
                    <div className='circle'></div>
                    <div className='sq-1'></div>
                    <div className='sq-2'></div>
                </div>
                <div>
                    <p>I'm a Software Engineer specialising in Front-End Development and building awesome user experiences. Check me out down below!</p>
                    <p className = "landing-section"><i class="fas fa-envelope"></i> Kevinsu@outlook.co.nz</p>
                    <p className = "landing-section"><i class="fab fa-github"></i> SuKaiwen</p>
                    <p className = "landing-section"><i class="fab fa-linkedin"></i> Kevin Su</p>
                    <p className = "landing-section"><i class="fas fa-file"></i> Resume</p>
                    <p className = "landing-section"><i class="fas fa-code"></i> Featured Projects</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;