import React from "react";
import { deleteExperience } from "../../actions/profileActions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const Experience = (props) =>{

  const onExpDel = (id) =>{

    props.deleteExperience(id);
  }

    return(
        <>
            {props.exp.map(exp =>{

              // const from = new Date(exp.from);
              // const to = new Date(exp.to);
              return(
                <tr>
              <td>{exp.company}</td>
              <td>{exp.title}</td>
              <td>{exp.from} - {exp.to}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onExpDel(exp._id)}>Delete</button>
              </td>
            </tr>
              )
            })}
      </>
    )
}


Experience.propTypes = {
  deleteExperience : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  profile : state.profile
})

export default connect(mapStateToProps , {deleteExperience}) (Experience);