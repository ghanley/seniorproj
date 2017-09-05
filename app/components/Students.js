import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent, removeStudent} from '../reducers/students'
// import { addUser } from '../../redux/users';
import StudentListItem from './StudentListItem';

class Students extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      email: ''
    }

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({input: e.target.value})
  }
  handleEmail(e) {
    this.setState({email: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}><label className="col-xs-2 control-label">New Student</label>
            <input name="studentName" value={this.state.input} onChange={this.handleName}></input>
            <label className="col-xs-2 control-label">Email</label>
            <input name="studentEmail" value={this.state.email} onChange={this.handleEmail}></input>
            <input type="submit" value="Submit" />
        </form>
        {/* {this.props.campuses.map(campus => <CampusListItem campus={campus} key={campus.id} />)} */}
        {/* <NavLink to={`/students/${student.id}`} activeClassName="active">{student.name}</NavLink> */}
       {this.props.students.map(student => <StudentListItem key={student.id} student={student} />)}

      </div>
      )
    }

  handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      name: event.target.studentName.value,
      email: event.target.studentEmail.value
    }
    this.props.addStudent(newStudent)
    event.target.studentName.value ='';
    event.target.studentEmail.value ='';
  }

  }

  const mapState = ({ students }) => ({ students });

  const mapDispatch = { addStudent, removeStudent};

  export default connect(mapState, mapDispatch)(Students);
