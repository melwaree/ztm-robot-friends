import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div>
        <input 
            className='pa3 ma4 ba bg-light-gray code br-pill'
            type='search' 
            placeholder='Search robot'
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;