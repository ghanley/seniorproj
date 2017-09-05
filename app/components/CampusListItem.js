import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, removeCampus} from '../reducers/schools'

class CampusListItem extends React.Component {

  constructor(props){
    super(props)
  }

render() {
  const {campus} = this.props;
  return(

    <div className="indyCampuses">
        <NavLink to={`/campuses/${campus.id}`} activeClassName="active">{campus.name}
           <img className="media-object" src={campus.image} alt="image" />
        </NavLink>
        <button
            className="btn btn-default btn-xs"
            onClick={ () => this.props.removeCampus(campus.id) }>
            <span className="glyphicon glyphicon-remove" />
        </button>
      </div>
  )
  }

}

const mapState = ({ campuses}) => ({ campuses});

const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(CampusListItem);
