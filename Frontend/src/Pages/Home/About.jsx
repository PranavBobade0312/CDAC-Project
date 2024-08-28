import React from 'react';
import './About.css'; // Import custom CSS for additional styling

const AboutPage = () => {
    return (
        <div className="container about-page">
            <header className="text-center my-5">
                <h1 className="display-4">About Us</h1>
                <p className="lead">Explore our story, meet our team, and learn about our values.</p>
            </header>

            <section className="history my-5">
                <h2 className="section-title">Our History</h2>
                <p className="lead">
                    Established in 2019, our restaurant has grown from a small local eatery to a renowned dining destination. 
                    Our founder, Pranav Bobade, envisioned a place where people could enjoy exceptional meals in a warm and inviting atmosphere. 
                    Over the years, we have expanded our menu to include a diverse range of dishes while staying true to our roots of quality and tradition.
                </p>
                <p>
                    We take pride in our culinary heritage and strive to create dishes that delight and satisfy our guests. 
                    Our commitment to excellence has earned us numerous awards and a loyal following. 
                    Whether you're celebrating a special occasion or just enjoying a night out, our team is dedicated to making your dining experience memorable.
                </p>
            </section>

            <section className="team my-5">
                <h2 className="section-title">Meet Our Team</h2>
                <p className="lead">
                    Our team is the heart of our restaurant. Each member brings a unique set of skills and passion for delivering exceptional service.
                    Here’s a little about the key members who make our restaurant special:
                </p>
                <ul>
                    <li><strong>Pranav Bobade</strong> - Head Chef: With over 5 years of experience, John leads our kitchen with creativity and expertise, ensuring every dish is prepared to perfection.</li>
                    <li><strong>Avadhut Sakhare</strong> - Restaurant Manager: Jane ensures that our front-of-house operations run smoothly, providing an exceptional dining experience for every guest.</li>
                    <li><strong>Aditya Marathe</strong> - Pastry Chef: Emily’s desserts are a highlight of our menu, known for their exquisite flavors and artistic presentation.</li>
                </ul>
            </section>

            <section className="values my-5">
                <h2 className="section-title">Our Values</h2>
                <p className="lead">
                    At our restaurant, we believe in a set of core values that guide everything we do:
                </p>
                <ul className="list-unstyled">
                    <li><strong>Quality</strong>: We use the freshest ingredients and time-tested techniques to create dishes that exceed expectations.</li>
                    <li><strong>Customer Focus</strong>: Our guests are at the center of everything we do. We strive to provide attentive, personalized service that makes every visit special.</li>
                    <li><strong>Innovation</strong>: We are constantly evolving our menu and practices to offer new and exciting experiences while honoring our culinary traditions.</li>
                    <li><strong>Sustainability</strong>: We are committed to environmental responsibility, including sustainable sourcing and reducing waste.</li>
                    <li><strong>Community</strong>: We actively support local businesses and engage in community initiatives to give back and build strong relationships.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutPage;
