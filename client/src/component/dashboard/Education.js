import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { deleteEducation } from "../../actions/profileActions";

const Education = (props) =>{

    const onEduDel = (id) =>{
      props.deleteEducation(id);
      console.log(id);
    }
    

    return(
        <>
                    {props.edu.map(edu =>{
                      return(
                        <tr>
                      <td>{edu.school}</td>
                      <td>{edu.degree}</td>
                      <td>{edu.from} {edu.to}</td>
                      <td>
                        <button className="btn btn-danger" onClick={edu => onEduDel(edu._id)}>Delete</button>
                      </td>
                    </tr>
                      )
                    })}
              </>
    );
}

Education.propTypes = {
  deleteEducation : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  profile : state.profile
})

export default connect(mapStateToProps , {deleteEducation}) (Education);