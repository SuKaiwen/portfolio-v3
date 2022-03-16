import React from 'react';

function Contact(props) {
    return (
        <div className = "about-container contact-container" id = "contact">
            <h1>Contact Me 👇</h1>
            <p>Thank you for making it all the way to the end! Feel free to contact me and I will get back to you!</p>
            <div className = "row">
                <a href="mailto:kevinsu@outlook.co.nz"><button className = "contact-btn">Come say Hello!</button></a>
                <a target="_blank" href="https://www.linkedin.com/in/kevin-su-618163191/"><button className = "contact-btn">Message on Linkedin!</button></a>
            </div>
        </div>
    );
}

export default Contact;