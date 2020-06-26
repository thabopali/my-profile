import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './styles.css'
import { CircularProgress } from '@material-ui/core'

type Props = {
    movies: any
    setMovies: any
    setTempMovies: any
}

type Movie = {
    imdbID: string
    title: string
    image: string
    year: string
}

const API_KEY = 'bf45066e'

const series = ['avengers', 'guardians of the galaxy', 'thor', 'pirates of the caribbean', 'harry portter']

const Movies: React.FC<Props> = props => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promises = series.map(series => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
                .then(res => res.json())
        })

        Promise.all(promises).then((movies: any) => {

            const updateMovies: Movie[] = movies.map((movie: any) => movie.Search).flat(2).map((movie: any) => ({
                title: movie.Title,
                year: movie.Year,
                image: movie.Poster,
                imdb: movie.imdbID
            }))

            props.setMovies(updateMovies)
            props.setTempMovies(updateMovies)

        })

    }, [])

    if (props.movies.length === 0) {
        return <div className="loader">
            <CircularProgress />
        </div>
    }

    return <div className="movies">
        {props.movies.map((movie: any) => {
            return <Movie
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                image={movie.Poster}
            />
        })}
    </div>
}

export default Movies