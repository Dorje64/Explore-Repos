import React, { useState } from 'react';
import { Search, SearchResults, Menu } from './components';
import { searchRepo } from './api.js';

//Main page
function Main() {
  const [ results, setResults ] = useState([])
  const [ totalCount, setTotalCount ] = useState(0)

  const onSearch = (keyword) =>{
    searchRepo(keyword, '', '')
      .then( res => {
        setResults(res.data.items)
        setTotalCount(res.data.total_count)
      })
      .catch( err => {
        alert(err.message)
      })
  }

  return (
    <div>
      <Search onSearch={onSearch}/>
      <Menu />
      <SearchResults repos={results} totalCount={totalCount}/>
    </div>
  );
}

export default Main;
