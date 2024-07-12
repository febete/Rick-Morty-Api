import React, { useState, useEffect } from 'react'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
// import Search from './components/Search/Search';


function App() {
  let [pageNumber, setPageNumber] = useState(1);  //default page number 1
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;   //info pagination için, results Cards için
  let [search, setSearch] = useState("");

  console.log("page number = " + pageNumber);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;


  //api değiştiğinde bu render olur
  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);

      // console.log(data.result);
    })();


  }, [api]);


  return (
    <>
      <div className="App">

        <h1 className='text-center my-4'>
          <span className='text-primary'> Rick & Morty </span>
        </h1>

        <Search setPageNumber={setPageNumber} setSearch={setSearch} />

        <div className="container">

          <div className="row">


            <Filters />


            <div className="col-8">

              <div className="row">

                <Cards results={results} />

              </div>

            </div>

          </div>

        </div>

        <div className="div"> <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} /> </div>

      </div>
    </>
  )
}

export default App
