import React from 'react';

const Input = ({name,label, error, ...rest}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                {...rest} 
                name={name}
                id={name}
                className="form-control"
            />
            {/*This expression means if errors is truthy (contains something)
            it will display the errors in the div, if it is falsy it will be ignored */}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;