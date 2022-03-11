import React from 'react';

import '../CSS/Global.css';
import me from '../Images/me.jpg';

function About(props) {
    return (
        <div className = "main-container">
            <div className = "title-box">
                <h1>About me</h1>
                <p className = "landing-section"><i class="fas fa-graduation-cap"></i> BEHons Software Engineering - The University of Sydney</p>
                <p>During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic things has grown to be a passion of mine.
                    After dabbling in various engineering topics in my first year of university, I have grown to love web development and is always hungry to learn new things. 
                    I like to code things from scratch and bring life to awesome ideas.</p>
            </div>
            <div className = "title-box">
                <h2>Some stuff I can do...</h2>
                <div className = "wrapper">
                    <div>
                        <i class="fab fa-react"></i>
                        <p>React</p>
                    </div>
                    <div>
                        <i class="fab fa-js"></i>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <i class="fab fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <div>
                        <i class="fab fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                    <div>
                        <i class="fab fa-python"></i>
                        <p>Python</p>
                    </div>
                    <div>
                        <i class="fab fa-github-square"></i>
                        <p>Version Control</p>
                    </div>
                    <div>
                        <i class="fas fa-window-restore"></i>
                        <p>API/RESTful</p>
                    </div>
                    <div>
                        <i class="fas fa-marker"></i>
                        <p>Responsive Design</p>
                    </div>
                </div>
            </div>
            <div className = "title-box">
                <h2>I am studying for...</h2>
                <div className = "wrapper">
                    <div>
                        <i class="fas fa-cloud"></i>
                        <p>AWS Practitioner</p>
                    </div>
                    <div>
                        <i class="fas fa-cloud"></i>
                        <p>AWS Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;