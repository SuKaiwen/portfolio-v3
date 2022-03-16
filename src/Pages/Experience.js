import React from 'react';

function Experience(props) {
    return (
        <div className = "main-container">
            <div className='about-container exp-container'>
                <div className="exp-top-section">
                    <div className = "exp-card">
                        <div>
                            <h1>AKQA</h1>
                            <h2>Digital Design and Communication Agency</h2>
                        </div>
                        <div>
                            <p>Oct 2021 - Present</p>
                            <h2>Associate Front-End Developer</h2>
                            <ul>
                                <li>
                                    <p>Developed and maintained code for client websites</p>
                                </li>
                                <li>
                                    <p>Implemented UI designer's mockups for various website interfaces</p>
                                </li>
                                <li>
                                    <p>Performed testing to ensure cross-browser friendliness and mobile responsiveness</p>
                                </li>
                                <li>
                                    <p>Assisted in configuring digital content management systems using Sitecore Content Hub</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className = "exp-card">
                        <div>
                            <h1>GPOS</h1>
                            <h2>Cloud Based Point of Sales Company</h2>
                        </div>
                        <div>
                            <p>Dec 2019 - Feb 2020</p>
                            <h2>Front-End Developer Intern</h2>
                            <ul>
                                <li>
                                    <p>Developed templates using React and Ant Design</p>
                                </li>
                                <li>
                                    <p>Refactored the website's code from vanilla HTML into a React Application</p>
                                </li>
                                <li>
                                    <p>Wrote extensive integration and unit tests for the templates</p>
                                </li>
                                <li>
                                    <p>Engaged with Agile Methodologies. Improved presentation skills via presenting the product to the team</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br id = "projects" />
        </div>
    );
}

export default Experience;