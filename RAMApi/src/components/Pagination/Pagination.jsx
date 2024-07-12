import React from 'react'
import ReactPagination from "react-paginate";

function Pagination({ pageNumber, setPageNumber, info }) {

    // let next = () => {
    //     console.log("next e bastı")
    //     setPageNumber(x => x + 1);        //x represents previouse page number
    // }

    // let prev = () => {
    //     console.log("prev e bastı")
    //     if (pageNumber === 1) { return; }
    //     setPageNumber(x => x - 1)
    // }

    return (
        // <div className='container d-flex justify-content-center gap-5 my-5  '>

        //     <button onClick={prev} class="btn btn-primary">Prev</button>
        //     <button onClick={next} class="btn btn-primary">Next</button>

        // </div>


        <ReactPagination
            className='pagination justify-content-center  gap-4 my-4'
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel="Next"
            previousLabel="Prev"
            nextClassName="btn btn-primary"
            previousClassName='btn btn-primary'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }}
            pageCount={info?.pages} />




    )
}

export default Pagination