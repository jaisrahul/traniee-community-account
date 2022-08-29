import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({name , value ,placeholder , error ,info , onChange}) =>{

    return(
        <div className='form-group'>
        <textarea className={classnames('form-control form-control-lg' , {'is-invalid'  : error})} name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange} /> 
    {info && <small className='form-text text-muted'>{info}</small>}
    {error && <div className='invalid-feedback'>{error}</div>}
    </div>
    );
}

TextAreaFieldGroup.propTypes = {
    name : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    value :PropTypes.string.isRequired,
    info : PropTypes.string.isRequired,
    error : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    options : PropTypes.array.isRequired
}

export default TextAreaFieldGroup;