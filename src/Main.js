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


  const onSearch = (keyword) =>{
    searchRepo(keyword, sort, order)
      .then( res => {
        setKeyword(keyword)
        setResults(res.data.items)
        setTotalCount(res.data.total_count)
      })
      .catch( err => {
        alert(err.message)
      })
  }

  const prevPage = () => {

    if(page === 1)
     return;

    searchRepo(keyword,sort, order, page - 1 )
      .then( res=>{
        setPage(page - 1)
        setResults(res.data.items)
      })
      .catch( err => {
        alert(err.message)
      })
  }

  const nextPage = () =>{
 
    if(page * 30 >= totalCount)
     return;

    searchRepo(keyword, sort, order, page + 1 )
      .then( res=>{
        setPage(page + 1)
        setResults(res.data.items)
      })
      .catch( err => {
        alert(err.message)
      })
  }

  return (
    <div>
      <Search onSearch={onSearch}/>
      {results.length > 0 && <Menu nextPage={nextPage} prevPage={prevPage} page={page}/> }
      <SearchResults repos={results} totalCount={totalCount}/>
    </div>
  );
}

export default Main;
