import React, { Component } from 'react'
import card1 from '../../resources/images/card1.png'
import card2 from '../../resources/images/card2.png'
import MovieCard from '../card/MovieCard'
 class Upcoming extends Component {
    render() {
        return (
            <div className="upcoming-container">
                <h2>Upcoming Movies</h2>
                <div className="cards">
                    <MovieCard img={card1}/>
                    <MovieCard img={card2}/>
                    <MovieCard img={card1}/>
                    <MovieCard img={card2}/>
                    <MovieCard img={card1}/>
                </div>
                
            </div>
        )
    }
}

export default Upcoming