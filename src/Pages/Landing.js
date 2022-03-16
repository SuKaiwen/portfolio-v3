import React from 'react';

import me from '../Images/me.jpg';

function Landing(props) {
    return (
        <div className = "main-container" id = 'landing'>
            <div className = "landing-grid">
                <div></div>
                <div>
                    <h1>👋 Hey there! I’m Kevin, a Software Engineer based in Sydney, Australia. I enjoy implementing cool ideas and taking on new challenges.</h1>
                    <h2>Software Engineer | Front-End Developer</h2>
                    <button className = "btn">RESUME</button>
                    <h3>SCROLL TO CONTINUE</h3>
                </div>
                <div className = "center">
                    <img src = {me} alt = "me" />
                </div>
                <div className = "right">
                    <a target="_blank" href = "https://www.linkedin.com/in/kevin-su-618163191/"><p>LINKEDIN <i class="fab fa-linkedin"></i></p></a>
                    <a target="_blank" href = "https://github.com/SuKaiwen"><p>GITHUB <i class="fab fa-github"></i></p></a>
                    <a target="_blank" href = "mailto:kevinsu@outlook.co.nz"><p>EMAIL <i class="fas fa-envelope"></i></p></a>
                    <a href = "#projects"><p>PROJECTS <i class="fas fa-code"></i></p></a>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Landing;