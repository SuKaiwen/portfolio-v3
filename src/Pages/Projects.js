import React from 'react';

import tracker from "../Images/tracker.jpg";

function Projects(props) {
    return (
        <div className = "main-container">
            <div className = "title-box">
                <h1>Projects</h1>
                <div className = "project-card">
                    <div className = "project-image">
                        <img src = {tracker} alt = "tracker_img" />
                    </div>
                    <div className = "project-info">
                        <h1>01. Tracker</h1>
                        <p>Clone of a task delegation app similar to Jira. Functionalities include: making new users, tags, issues, dragging issues to another section and more...</p>
                        <ul>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>Data-Structures</li>
                            <li>BeautifulDnD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;