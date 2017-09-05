import React from 'react'
import { connect } from 'react-redux';
import StudentListItem from './StudentListItem'
import CampusListItem from './CampusListItem'

class SingleStudent extends React.Component {
  constructor(props) {
    super(props)
  }

///// RECEIVING CAMPUS AND STUDENTS STATE, NEED TO FILTER AND DUMP THEM OUT


render() {
  const studentId = this.props.match.params.id;
  const students = this.props.students;
  const currentStudent = students.filter(function(student) {

        return +student.id === +studentId
  })
  const campuses = this.props.campuses;
  const currentCampus = campuses.filter(function(campus) {
      return currentStudent[0] ? +campus.id === +currentStudent[0].campusId : false
  })
  return (currentStudent && currentCampus && <div>
    <h1>{currentStudent.map(student => <div><StudentListItem key={student.id} student={student} /> <CampusListItem key={student.campusId}  /> </div>)}
</h1>
    </div>
  )

}

}


const mapState = ({campuses, students}) => ({campuses, students});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleStudent);






