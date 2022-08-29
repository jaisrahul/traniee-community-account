import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({name , value ,placeholder ,label , type ,  error ,info , onChange , disabled}) =>{

    return(
        <div className='form-group'>
        <input type={type} className={classnames('form-control form-control-lg' , {'is-invalid'  : error})} name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange} 
    disabled={disabled}
    /> 
    {info && <small className='form-text text-muted'>{info}</small>}
    {error && <div className='invalid-feedback'>{error}</div>}
    </div>
    );
}

TextFieldGroup.propTypes = {
    name : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    value :PropTypes.string.isRequired,
    info : PropTypes.string.isRequired,
    error : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    type : PropTypes.string.isRequired, 
    disabled : PropTypes.string
}

    TextFieldGroup.defaultProps = {
        type : 'text'
    }

export default TextFieldGroup;