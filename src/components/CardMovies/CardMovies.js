import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const CardMovies = ({ mov }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="m-2">
                <Card.Img variant="top" style={{ height: '20rem' }} src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} />
                <Card.Body>
                    <Card.Title>
                        <h6>{mov.original_title}</h6>
                    </Card.Title>
                    <Card.Text>
                        <p>Release Date : {mov.release_date}</p>
                        <p>Popularity : {mov.popularity}</p>
                        <p>Evaluation : {mov.vote_average}</p>
                    </Card.Text>
                    <Link to={`/movie/${mov.id}`}>
                        <Button variant="primary">Details Movie</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardMovies


// `https://image.tmdb.org/t/p/w500/`