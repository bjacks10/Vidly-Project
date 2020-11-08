import React from 'react';

const SearchBox = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="query"
            //my-3 is margin on the y axis of 3
            className="form-control my-3"
            placeholder="Search..."
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
      );
};
 
export default SearchBox;