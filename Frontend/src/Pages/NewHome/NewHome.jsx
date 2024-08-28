import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import restaurantImage from '../../assets/restaurant.jpg'; // Main restaurant image
import menuImage1 from '../../assets/menu1.jpg'; // Menu image 1
import menuImage2 from '../../assets/menu2.jpg'; // Menu image 2
import menuImage3 from '../../assets/menu3.jpg'; // Menu image 3
import menuImage4 from '../../assets/menu4.jpg'; 
import menuImage5 from '../../assets/menu5.jpg'; 
import menuImage6 from '../../assets/menu6.jpg'; 
import menuImage7 from '../../assets/menu7.jpg';
import menuImage8 from '../../assets/menu8.jpg';


const NewHome = () => {


    return (
        <div className="home-container">
            <h1 className="mb-4">Welcome to Our Restaurant</h1>
            <img src={restaurantImage} alt="Restaurant" className="img-fluid" />

            <section className="about-us">
                <h2>About Us</h2>
                <p>Welcome to <strong>[Restaurant Name]</strong>, where culinary excellence meets warm hospitality. Established in <strong>[Year]</strong>, we pride ourselves on serving the finest <strong>[Cuisine Type]</strong> dishes in a cozy and inviting atmosphere.</p>
                <p>Our mission is to deliver an unforgettable dining experience with every meal. We use only the freshest ingredients sourced locally to craft delicious and authentic dishes. Our talented chefs bring passion and creativity to every plate, ensuring that each visit is a memorable one.</p>
                <p>At <strong>[Restaurant Name]</strong>, we believe in the importance of community and family. Our friendly staff is dedicated to making you feel at home, and we strive to create a dining experience that brings people together.</p>
                <p>Thank you for choosing <strong>[Restaurant Name]</strong>. We look forward to serving you and sharing our love for great food with you.</p>
            </section>
            <section className="mb-4">
                <h2>Our Menus</h2>
                <div className="menu-cards">
                    <div className="card">
                        <img src={menuImage1} alt="Menu 1" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Veg Thali's</h3>
                            <p className="card-text">A veg thali is a traditional Indian platter featuring a variety of vegetarian dishes, including curries, rice, bread, and accompaniments. It offers a diverse and balanced meal with rich flavors and textures.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={menuImage2} alt="Menu 2" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Fast Food</h3>
                            <p className="card-text">Fast food is a quick and convenient meal option, typically featuring items like burgers, fries, and sandwiches. It's known for its speedy preparation, affordability, and wide appeal.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={menuImage3} alt="Menu 3" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Special Veg Dishes</h3>
                            <p className="card-text">Special veg dishes are culinary delights crafted from fresh vegetables, aromatic spices, and innovative recipes. These dishes offer a healthy yet delicious dining experience, perfect for both traditional and modern palates.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={menuImage4} alt="Menu 4" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Chinese</h3>
                            <p className="card-text">
                            Special Chinese cuisine offers a tantalizing array of flavors with dishes like Peking duck, dim sum, and kung pao chicken. It combines fresh ingredients with aromatic spices and traditional cooking techniques for an unforgettable dining experience.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={menuImage5} alt="Menu 5" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Italian</h3>
                            <p className="card-text">
                            Italian food is renowned for its rich flavors and simplicity, featuring dishes like pasta, pizza, and risotto. It's characterized by fresh ingredients, aromatic herbs, and traditional cooking techniques.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={menuImage6} alt="Menu 6" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Breakfast</h3>
                            <p className="card-text">Start your day right with a delightful breakfast featuring freshly baked pastries, hearty omelets, and refreshing fruit salads. Enjoy a perfect blend of flavors and nutrition to energize your morning.</p>
                        </div>
                    </div>
                     <div className="card">
                        <img src={menuImage7} alt="Menu 7" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Non veg Dishes</h3>
                            <p className="card-text">Special non-veg dishes offer a delectable array of flavors, featuring succulent meats like chicken, lamb, and seafood, cooked with aromatic spices and herbs. These dishes, ranging from spicy curries to savory grills, provide a gourmet experience that delights the senses.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={menuImage8} alt="Menu 8" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Cold Drinks</h3>
                            <p className="card-text">Special cold drinks offer a refreshing twist with unique flavors, vibrant colors, and creative presentations. They include exotic mocktails, smoothies, and chilled beverages perfect for any occasion.</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="contact-us mt-5">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </section>

        </div>
    );
};

export default NewHome;
