import React, { useState, useEffect } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const DetailsMovie = () => {
    const param = useParams();
    // console.log(param.id);

    const [movie, setMovie] = useState([])

    // ======================== get Movie Details ========================
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US`)
        // console.log(res.data)
        setMovie(res.data)
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return (
        <>
            <Card className="d-flex flex-row mt-5">
                <div className='w-50 me-3'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} />
                </div>
                <div>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>{movie.overview}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Link to="/">
                            <Button variant="primary">Home</Button>
                        </Link>
                        <a href={movie.homepage} target="_blank" className="mx-3">
                            <Button variant="primary">Show Movie</Button>
                        </a>
                    </Card.Body>
                </div>

            </Card>
        </>
    )
}

export default DetailsMovie