import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParam, _] = useSearchParams();

  return <div>Search - {searchParam.get('q')} </div>;
};

export default Search;
