import React from 'react'

function FilterBTN({ name, index, items }) {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input" type="radio"
                    name={name}
                    id={`${name} - ${index}`}

                />


                <label className="btn btn-outline-primary" for={`${name} - ${index}`}>
                    {items}
                </label>


            </div>

        </>
    )
}

export default FilterBTN
