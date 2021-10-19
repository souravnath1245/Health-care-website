import React from 'react';
import './Page.css';
import banner4 from '../images/banner/banner-5.jpg'

const About = () => {
    return (
        <div className="aboutSection container">
            <div className="headerSection text-center">
                <h1>About</h1>
            </div>
            <div className="aboutDiv row justify-content-center align-items-center">
                <div className="col-lg-6 col-sm-10 mx-auto image py-4">
                    <img src={banner4} alt="" />
                </div>
                <div className="col-lg-6 col-sm-8 mx-auto aboutContent py-4">
                    <h2 className="my-3">About Our Hospital</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum quia, laudantium itaque blanditiis maiores modi voluptatibus molestias quasi incidunt ab, alias ullam, aperiam commodi atque quae laboriosam a cumque magni ipsa quos? Non rerum similique ad? Voluptates, consectetur veritatis fuga eius esse consequuntur fugit? Modi sunt natus eligendi dolore, eveniet saepe, porro blanditiis ratione facere fugit libero autem nisi nobis beatae laborum odit fuga necessitatibus suscipit veritatis id voluptatem. Alias eaque sed ducimus fugiat nisi eos odit optio magnam odio iure amet doloribus veniam laboriosam illum delectus labore quam quod, qui quidem, obcaecati sequi quia assumenda. Facere, deleniti consequuntur?</p>
                    < ul type='selected'>
                        <li>Browse Our Website</li>
                        <li>Choose Service</li>
                        <li>Send Message</li>
                    </ ul>
                
                </div>
                
            </div>
        </div>
    );
};

export default About;