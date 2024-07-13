import React from 'react'

function FilterBTN({ name, index, items }) {
    return (
        <>
            {/* Hide the radio button */}
            {/* Whenever our input is checked */}
            <style jsx>
                {`               
                .x:checked + label{
                    background-color: #0b5ed7;
                    color:white;
                }

                    input[type = "radio"]{
                    display:none;
                    }
                `}

            </style>

            <div className="form-check">
                <input
                    className="form-check-input x" type="radio"
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
