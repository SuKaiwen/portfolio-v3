import React from 'react';

import stars from '../Images/stars2.jpg';

function About(props) {
    return (
        <div className = "main-container">
            <div className='about-container'>
                <h1>ABOUT ME</h1>
                <h2><i class="fas fa-graduation-cap"></i> BEHons Software Engineering | The University of Sydney</h2>
                <p>Hi there! I'm Kevin, a software engineer from Sydney, Australia. During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic things has grown to be a passion of mine. After dabbling in various engineering topics in my first year of university, I have grown to love web development (both front end and back end) and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                <h2>Somethings I can do include:</h2>
                <div className = "row">
                    <button className = "tag">HTML</button>
                    <button className = "tag">CSS</button>
                    <button className = "tag">JS</button>
                    <button className = "tag">Python</button>
                    <button className = "tag">Java</button>
                    <button className = "tag">React</button>
                    <button className = "tag">jQuery</button>
                    <button className = "tag">Bootstrap</button>
                    <button className = "tag">Version Control</button>
                    <button className = "tag">Responsive Design</button>
                    
                </div>
            </div>
            
        </div>
    );
}

export default About;