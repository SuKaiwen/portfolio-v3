import React from 'react';

import '../CSS/Global.css';
import '../CSS/Landing.css';

function Experience(props) {
    return (
        <div className = "container row-container black">
            <div className = "landing-col-1">
                <h1>03. Experience</h1>
                <div className = "text-box">
                    <p><i class="fas fa-signature"></i> Kevin Su</p>
                    <p><i class="fas fa-graduation-cap"></i> Bachelor of Software Engineering Honours</p>
                    <p>Front-End Developer / Software Engineer / Chess Enthusiast</p>
                    <hr />
                    <p>During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic things has grown to be a passion of mine.</p>
                    <p>After dabbling in various engineering topics in my first year of university, I have grown to love web development (both front end and back end) and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                </div>
                <div className = "row">
                    <button className = "btn"><i class="fas fa-arrow-right fa-2x"></i></button><p>Scroll to learn more </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;