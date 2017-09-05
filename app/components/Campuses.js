import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, removeCampus} from '../reducers/schools'
// import { addUser } from '../../redux/users';
import CampusListItem from './CampusListItem';

class Campuses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEvent(e) {
    this.setState({input: e.target.value})
  }
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}><label className="col-xs-2 control-label">New Campus</label>
            <input name="campusName" value={this.state.input} onChange={this.handleEvent}></input>
            <input type="submit" value="Submit" />
        </form>
       {this.props.campuses.map(campus => <CampusListItem campus={campus} key={campus.id} />)}


      </div>
      )
    }

  handleSubmit(event) {
    event.preventDefault();
    const newCampus = {
      name: event.target.campusName.value
    }
    this.props.addCampus(newCampus)
    event.target.campusName.value ='';

  }

  }

  const mapState = ({ campuses }) => ({ campuses });

  const mapDispatch = { addCampus, removeCampus};

  export default connect(mapState, mapDispatch)(Campuses);
