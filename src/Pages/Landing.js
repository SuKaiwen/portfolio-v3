import React from 'react';

import me from '../Images/me.jpg';

function Landing(props) {
    return (
        <div className = "main-container">
            <div className = "landing-grid">
                <div>
                </div>
                <div>
                    <h1>KEVIN SU</h1>
                    <h2>Software Engineer | Front-End Developer</h2>
                    <button className = "btn">RESUME</button>
                    <h3>SCROLL TO CONTINUE</h3>
                </div>
                <div className = "right">
                    <p>LINKEDIN <i class="fab fa-linkedin"></i></p>
                    <p>GITHUB <i class="fab fa-github"></i></p>
                    <p>EMAIL <i class="fas fa-envelope"></i></p>
                    <p>PROJECTS <i class="fas fa-code"></i></p>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Landing;