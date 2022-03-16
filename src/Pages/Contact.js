import React from 'react';

function Contact(props) {
    return (
        <div className = "about-container">
            <h1>Contact Me 👇</h1>
            <p>Thank you for making it all the way to the end! Feel free to contact me and I will get back to you!</p>
            <div className = "row">
                <button className = "contact-btn">Come say Hello!</button>
                <button className = "contact-btn">Message on Linkedin!</button>
            </div>
        </div>
    );
}

export default Contact;