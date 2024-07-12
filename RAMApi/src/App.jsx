import React, { useState, useEffect } from 'react'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';


function App() {
  let [pageNumber, setPageNumber] = useState(1);  //default page number 1


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;


  //api değiştiğinde bu render olur
  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json());
      console.log(data.result);
    })();


  }, [api]);


  return (
    <>
      <div className="App">

        <h1 className='text-center my-4'>
          <span className='text-primary'> Rick & Morty </span>
        </h1>

        <div className="container">

          <div className="row">

            <div className="col-3">
              <Filters />
            </div>

            <div className="col-8">

              <div className="row">
                <Cards />
                <Cards />
                <Cards />
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
