import React from 'react'
import { connect } from 'react-redux';
import StudentListItem from './StudentListItem'

class SingleCampus extends React.Component {
  constructor(props) {
    super(props)


  }


///// RECEIVING CAMPUS AND STUDENTS STATE, NEED TO FILTER AND DUMP THEM OUT


render() {
  const campusId = this.props.match.params.id;
  const students = this.props.students
  const filterStudents = students.filter(function(student) {

    return +student.campusId === +campusId
  })

  // console.log(students[0].name)
  return filterStudents && <div>
       {filterStudents.map(student => <StudentListItem key={student.id} student={student} />)}
       </div>
}

}


const mapState = ({campuses, students}) => ({campuses, students});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleCampus);
{/* <h1 key={student.id}><h2>{student.name}</h2><h2>{student.email}</h2></h1>) */}
