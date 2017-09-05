import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import Root from './components/Root';
import Home from './components/Home';
import Campuses from './components/Campuses';
import Students from './components/Students';
import Campus from './components/SingleCampus';
import Student from './components/SingleStudent';
// import StoryList from './components/Story/StoryList';
// import StoryDetail from './components/Story/StoryDetail';
import { fetchCampuses } from './reducers/schools';
import { fetchStudents } from './reducers/students';
// import { authorize } from './redux/login';


class Routes extends Component {

    componentDidMount () {
      this.props.fetchInitialData();
    }

    render () {

      return (
        <Router history={history}>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={Campuses} />
              <Route exact path="/students" component={Students} />
              <Route path ="/campuses/:id" component={Campus} />
              <Route path="/students/:id" component={Student} />
              {/* <Route path="/signup" component={Signup} />
              <Route exact path="/users" component={UserList} />
              <Route path="/users/:id" component={UserDetail} />
              <Route exact path="/stories" component={StoryList} />
              <Route path="/stories/:id" component={StoryDetail} /> */}
              {/* <Route component={Home} /> */}
            </Switch>

        </Router>
      );
    }
  }


  const mapProps = null;

  const mapDispatch = dispatch => ({
    fetchInitialData: () => {
      dispatch(fetchCampuses());
      dispatch(fetchStudents());
      // dispatch(authorize());
    }
  });

  export default connect(mapProps, mapDispatch)(Routes);
