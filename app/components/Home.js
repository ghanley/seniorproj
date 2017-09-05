import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


const Home = () => (
  <div className="home">
      <div className="topLeft">
        <h1> <NavLink to="/campuses" activeClassName="active">Campuses</NavLink></h1>
        <h1><small>a fake application for collaborative authoring</small></h1>
      </div>

      <div className="topRight">
        <h1> <NavLink to="/students" activeClassName="active">Students</NavLink></h1>



      </div>


  </div>

);

export default Home;
