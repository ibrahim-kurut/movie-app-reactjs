import React from 'react'
import './MoviesList.css'
import CradMovies from '../CardMovies/CardMovies'
import MyPagination from '../Pagination/MyPagination';
import NoDataComponent from '../NoDataComponent/NoDataComponent';
const MoviesList = ({ movies, getPage, pageCount }) => {
    return (
        <>
            <div className="d-flex flex-wrap  justify-content-center">
                {movies.length >= 1 ? (movies.map((mov) => {
                    return (<CradMovies key={mov.id} mov={mov} />)
                })) : <NoDataComponent />}
            </div>
            {movies.length >= 1 ? (<MyPagination getPage={getPage} pageCount={pageCount} />) : ('')}
        </>

    )
}

export default MoviesList