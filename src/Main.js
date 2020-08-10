import React, { useState } from 'react';
import { Search, SearchResults, Menu } from './components';
import { searchRepo } from './api.js';

//Main page
function Main() {
  const [ results, setResults ] = useState([])
  const [ totalCount, setTotalCount ] = useState(0)
  const [ keyword, setKeyword ] = useState('')
  const [ page, setPage ] = useState(1)
  const [ sort, setSort] = useState('stars')
  const [ order, setOrder ] = useState('desc')
  const [ loading, setLoading ] = useState(false)
  const [ noData, setNoData ] = useState(false)

  const getRepos = () =>{
    if(loading === true)
      return;

    setLoading(true)
    setNoData(false)
    searchRepo(keyword, sort, order, page)
    .then( res => {
      setResults(res.data.items)
      setLoading(false)

      if(res.data.items.length == 0 )
        setNoData(true)
    })
    .catch( err =>{
      setLoading(false)
      alert(err.message)
    })
  }


  const onSearch = (keyword) =>{
    setLoading(true)
    setNoData(false)
    searchRepo(keyword, sort, order)
      .then( res => {
        setLoading(false)
        setKeyword(keyword)
        setResults(res.data.items)
        setTotalCount(res.data.total_count)

        if(res.data.items.length == 0 )
         setNoData(true)
      })
      .catch( err => {
        setLoading(false)
        alert(err.message)
      })
    }

  const prevPage = () => {
    if(page === 1)
     return;

    setPage(page-1)
    getRepos()
  }

  const nextPage = () =>{
    if(page * 30 >= totalCount)
     return;

    setPage(page+1)
    getRepos()
  }

  const changeSort = (event) => {
    setSort(event.target.value)
    getRepos()
  }

  const changeOrder = (event) => {
    setOrder(event.target.value)
    getRepos()
  }

  return (
    <div>
      <Search onSearch={onSearch}/>

      {results.length > 0 && 
        <Menu nextPage={nextPage} prevPage={prevPage} page={page} totalCount={totalCount} changeOrder={changeOrder} changeSort={changeSort}/>
      }

      { loading === true && 
        <Loading></Loading>
      }

      { noData === true &&
        <Nodata></Nodata>
      }

      { loading === false &&
        <SearchResults repos={results} totalCount={totalCount}/>
      }
    </div>
  );
}

function Loading(){
  return(
    <div className="mt-5 text-center">
      <div className="spinner-grow" style={{width: '5rem', height: '5rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>)
}

function Nodata(){
  return (
    <div className="mt-5 text-center">
      <h1 style={{ color: 'grey'}}> No match data found. </h1>
    </div>
  )
}

export default Main;
