// import React from 'react'

function Cards({ results }) {

    let display;
    console.log(results);

    if (results) {
        display = results.map(x => {
            return (<div className="col-4"> CHARACTER</div>)
        });
    }
    else { display = "No Character Found:/" }

    return (< >{display}</>)
}

export default Cards