import React from 'react';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure
} from 'react-instantsearch-dom';
import Hit from './components/Hit';

const App = () => {

  const searchClient = algoliasearch(
    'FARP9RXLRO',
    'b01c3df31b4ce1680f4dffa8d3b96ccf'
  );


  
  return (
    <div className="ais-InstantSearch">
      <h1>React InstantSearch e-commerce demo</h1>
      <InstantSearch indexName="pokedex" searchClient={searchClient}>
        <div className="left-panel">
          <ClearRefinements />
          <h2>Brands</h2>
          <RefinementList attribute="name" />
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
  
}

export default App;
