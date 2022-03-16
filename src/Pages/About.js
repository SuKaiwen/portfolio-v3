import React from 'react';

function About(props) {
    return (
        <div className = "main-container">
            <div className='about-container'>
                <div className = "about-top-section">
                    <div className = "about-grid">
                        <div>
                            <h2><i class="fas fa-graduation-cap"></i> EDUCATION</h2>
                            <p>BEHons Software Engineering | The University of Sydney</p>
                        </div>
                        <div>
                            <h2><i class="fas fa-location-arrow"></i> LOCATION</h2>
                            <p>Sydney, Australia</p>
                        </div>
                        <div>
                            <h2><i class="fas fa-check"></i> SPECIALTIES</h2>
                            <p>Front-end Frameworks, Responsive Design, Innovative Problem Solving</p>
                        </div>
                    </div>
                </div>
                <div className = "about-grid">
                    <div>
                        <h1 className = "bold">💡 Always learning and testing out new languages and frameworks to add to my tech stack.</h1>
                    </div>
                    <div>
                        <p>During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic and unique things has grown to be a passion of mine.</p>
                        <p>After dabbling in various engineering topics in my first year of university, I have grown to love web development (both front end and back end) and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                        <p>I have developed several front-end applications as well as assisted in the creation and maintenance of websites for multi-million dollar clients.</p>
                    </div>
                    <div>
                        <h2>Somethings I can do include...</h2>
                        <ul>
                            <li>HTML, CSS, JS</li>
                            <li>Java, Python</li>
                            <li>React, Vue</li>
                            <li>Bootstrap, SaSS, Tailwind CSS</li>
                            <li>Version Control</li>
                            <li>Responsive Design</li>
                        </ul>
                        <br />
                        <h2>I am currently learning...</h2>
                        <ul>
                            <li>AWS Cloud Services</li>
                            <li>Design Applications e.g. Figma</li>
                        </ul>
                    </div>
                </div>
                <p>WORK EXPERIENCE - WHERE I HAVE WORKED</p>
            </div>
        </div>
    );
}

export default About;