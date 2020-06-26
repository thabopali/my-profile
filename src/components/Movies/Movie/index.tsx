import React from 'react'
import './styles.css'

type Props = {
    title: string
    image: string
    year: string
}

const Movie: React.FC<Props> = props => {
    return <div className="movie">
        <h2>{props.title}</h2>
        <img src={props.image} />
        <h3>{props.year}</h3>
    </div>
}

export default Movie