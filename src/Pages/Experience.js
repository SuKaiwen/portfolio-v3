import React from 'react';

import '../CSS/Global.css';
import '../CSS/Landing.css';

function Experience(props) {
    return (
        <div className = "main-container">
            <div className = "title-box">
                <h1>Experience</h1>
                <div className = "row-just">
                    <p className = "landing-section"><i class="fas fa-code"></i> Front-End Developer - AKQA</p>
                    <p>Oct 2021 - Present</p>
                </div>
                <p>Digital Communications and Design Agency - Sydney, Australia</p>
                <ul>
                    <li>Developed and maintained code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.</li>
                    <li>Performed testing to ensure cross-browser friendliness and mobile responsiveness.</li>
                    <li>Assisted in configuring digital asset management systems using Sitecore Content Hub.</li>
                </ul>
            </div>
            <div className = "title-box">
                <hr />
                <div className = "row-just">
                    <p className = "landing-section"><i class="fas fa-code"></i> Front-End Intern - GPOS</p>
                    <p>Dec 2019 - 2020</p>
                </div>
                <p>Cloud Based Point of Sales Company - Auckland, NZ</p>
                <ul>
                    <li>Developed templates using React and Ant Design.</li>
                    <li>Refactored the website's code from vanilla HTML into a React Application.</li>
                    <li>Wrote extensive integration and unit tests for the templates.</li>
                    <li>Engaged with Agile Methodologies. Improved presentation skills via presenting the product to the team.</li>
                </ul>
            </div>
            <div className = "title-box">
                <hr />
                <div className = "row-just">
                    <p className = "landing-section"><i class="fas fa-cog"></i> QA Intern - GPOS</p>
                    <p>Dec 2018 - 2019</p>
                </div>
                <ul>
                    <li>Performed black box and unit testing on a cloud based software application using Postman and manually testing the application itself.</li>
                    <li>Created and designed an advertising form for the company.</li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;