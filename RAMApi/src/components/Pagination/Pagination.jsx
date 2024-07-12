import React from 'react'

function Pagination({ pageNumber, setPageNumber }) {

    let next = () => {
        console.log("next e bastı")
        setPageNumber(x => x + 1);        //x represents previouse page number
    }

    let prev = () => {
        console.log("prev e bastı")
        if (pageNumber === 1) { return; }
        setPageNumber(x => x - 1)
    }

    return (
        <div className='container d-flex justify-content-center gap-5 my-5  '>

            <button onClick={prev} class="btn btn-primary">Prev</button>
            <button onClick={next} class="btn btn-primary">Next</button>

        </div>
    )
}

export default Pagination