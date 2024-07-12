// import React from 'react'

function Cards({ results }) {

    let display;
    console.log(results);

    if (results) {
        display = results.map(x => {
            let { id, name, image } = x
            return (
                <div key={id} className="col-4">
                    {/* {name} */}
                    <div className="">
                        <img src={image} alt="" className="img-thumbnail" />
                    </div>
                </div>)
        });
    }
    else { display = "No Character Found:/" }

    return (< >{display}</>)
}

export default Cards