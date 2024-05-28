import React, { Component } from 'react'

 class MovieCard extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="movie-card">
                    <div className="movie-card-img">
                        <img src={this.props.img} alt="card img" id="card-img" />

                    </div>
                    <div className="movie-card-name">
                        <p>Black Widows</p>

                    </div>
                    <div className="movie-card-date">
                        <p>09-07-2021</p>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default MovieCard
