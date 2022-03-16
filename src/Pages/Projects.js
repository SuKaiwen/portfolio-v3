import React from 'react';

import tracker from "../Images/tracker.jpg";
import coinbase from "../Images/coinbase.jpg";
import movies from "../Images/movies.jpg";
import lis from "../Images/lis.jpg";

function Projects(props) {
    return (
        <div className = "main-container">
            <div className='projects-container'>
                <h1>PROJECTS</h1>
                <div className = "project-grid">
                    <div>
                        <div className = "image-container">
                            <img src = {tracker} alt = "tracker" />
                        </div>
                        <h2>💡 TRACKER</h2>
                        <p>Clone of a task delegation app similar to Jira. Functionalities include: making new users, tags, issues, dragging issues to another section and more...</p>
                        <div className = "row">
                            <a><i class="fab fa-github"></i> Github</a>
                            <a><i class="fas fa-wifi"></i> Live Site</a>
                        </div>
                    </div>
                    <div>
                    <div className = "image-container">
                            <img src = {coinbase} alt = "coinbase" />
                        </div>
                        <h2>💰 COINBASED</h2>
                        <p>Coinbased is a crypto currency price tracker application which users can view popular coins, search coins and coin metadata including real-time graphs.</p>
                        <div className = "row">
                            <a><i class="fab fa-github"></i> Github</a>
                            <a><i class="fas fa-wifi"></i> Live Site</a>
                        </div>
                    </div>
                    <div>
                    <div className = "image-container">
                            <img src = {movies} alt = "movies-app" />
                        </div>
                        <h2>🎬 MOVIEDB</h2>
                        <p>Movie app where users can view popular movies, search movies, search genre and view movie metadata such as actors, budget and production companies.</p>
                        <div className = "row">
                            <a><i class="fab fa-github"></i> Github</a>
                            <a><i class="fas fa-wifi"></i> Live Site</a>
                        </div>
                    </div>
                    <div>
                        <div className = "image-container">
                            <img src = {lis} alt = "LIS-solution" />
                        </div>
                        <h2>⚙️ VISUALISER</h2>
                        <p>An app that visualises the storage of a dynamic programming solution to the longest increasing subsequence problem.</p>
                        <div className = "row">
                            <a><i class="fab fa-github"></i> Github</a>
                            <a><i class="fas fa-wifi"></i> Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;