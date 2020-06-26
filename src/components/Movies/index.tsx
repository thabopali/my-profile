import React, { useEffect, useState } from 'react'

const API_KEY = 'bf45066e'

const series = ['avengers', 'guardians of the galaxy', 'thor', 'pirates of the caribbean', 'harry portter']

const Movies: React.FC = props => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
     const promises = series.map(series => {
            fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
                .then(res => res.json())
        })


    Promise.all(promises).then((movies: any) =>  {
        setMovies(movies)
    })

}, [])
    return null
}

export default Movies