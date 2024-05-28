import React, { Component } from 'react'
import Actors from './Actors'
import Trending from './Trending'
import Upcoming from './Upcoming'

export class Movies extends Component {
    render() {
        return (
            <div className="movies-container">
               <Upcoming/>
               <Trending/>
               <Actors/>
                
            </div>
        )
    }
}

export default Movies
