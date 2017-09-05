import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent, removeStudent} from '../reducers/students'


class StudentListItem extends React.Component {

  constructor(props){
    super(props)
  }

render() {
  const {student} = this.props;

  return(

    <div className="indyStudents">
        <NavLink to={`/students/${student.id}`} activeClassName="active">{student.name}
        {student.email}
        </NavLink>
        <button
            className="btn btn-default btn-xs"
            onClick={ () => this.props.removeStudent(student.id) }>
            <span className="glyphicon glyphicon-remove" />
        </button>
      </div>
  )
  }

}

const mapState = ({ students}) => ({ students});

const mapDispatch = { removeStudent };

export default connect(mapState, mapDispatch)(StudentListItem);
