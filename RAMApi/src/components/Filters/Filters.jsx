import React from 'react'
import Gender from "../Filters/Category/Gender"
import Species from "../Filters/Category/Species"
import Status from "../Filters/Category/Status"


function Filters({ setSpecies, setGender, setStatus, setPageNumber }) {

    let clear = () => {
        setSpecies("")
        setGender("")
        setStatus("")
        setPageNumber("")
        window.location.reload(false);
    }

    return (
        <div className="col-3" >

            <div className="text-center fw-bols fs-4 mb-4">Filters</div>

            <div
                onClick={clear}
                style={{ cursor: "pointer" }}
                className="text-center text-primary text-decoration-underline">Clear Filters</div>




            <div className="accordion" id="accordionExample">

                <Status setPageNumber={setPageNumber} setStatus={setStatus} />
                <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
                <Gender setPageNumber={setPageNumber} setGender={setGender} />

            </div>

        </div>
    )
}

export default Filters
