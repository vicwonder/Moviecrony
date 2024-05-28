import React from 'react'
import Header from '../header/Header'

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-image">
                <Header/>
                <div className="hero-content">
                    <div className="hero-item">
                        <h1>MOVIECRONY</h1>
                        <div className="item-paragraph">
                            <p>Anticipate your next movie with the best online recources</p>
                           
                        </div>
                        <div className="item-button">
                            <input type="button" value="Buy Ticket" />
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero
