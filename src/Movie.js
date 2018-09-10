import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    componentDidMount() {
        fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
        .then(data => data.json)
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>Hello this is a movie.</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return <img src="//img1.thelist.com/img/gallery/things-in-the-hunger-games-you-only-notice-as-an-adult/intro-1506715272.jpg" />
    }
}

export default Movie