import React from 'react'

function InputGroup({ total, name, setID }) {
    console.log([...Array(total).keys()])
    return (
        <div class="input-group mb-3">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select
                onChange={e => setID(e.target.value)}
                class="form-select" id={name}>
                <option value='1' selected>Choose...</option>

                {[...Array(total).keys()].map(x => {
                    return (
                        <option value={x + 1}>
                            {name} - {x + 1}
                        </option>
                    )
                })}

            </select>
        </div>

    )
}

export default InputGroup