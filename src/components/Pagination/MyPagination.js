import React from 'react'
import './MyPagination.css'
// import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';


const MyPagination = ({ getPage, pageCount }) => {
    // const pageCount = pageCount
    const handlePageClick = (data) => {
        //console.log(data.selected + 1);
        getPage(data.selected + 1)
    }
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"

                containerClassName={"pagination justify-content-center p-3"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}

                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}

                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}

                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}

                activeClassName={"active"}
            />
        </>
    )
}

export default MyPagination