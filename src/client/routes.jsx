import React                        from 'react';
import {
  IndexRoute,
  Router,
  Route,
  browserHistory
}                                   from 'react-router';
import { ReduxAsyncConnect }        from 'redux-connect';
import App                          from './../client/components/App';
import Homepage                     from './../client/components/Homepage';
import Courses                       from './../client/components/Courses';
import { Profile }                  from './../client/components/User';
import Course                       from './../client/components/Course';

const Routes = (
  <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Homepage} />
      <Route path='/profile' component={Profile} />
      <Route path='/course/:name/:chapter/quizzes' component={Course.Quiz}/>
      <Route path='/course/:name/:chapter/assignments' component={Course.Assignment} />
      <Route path='/course/:name' component={Course.CourseHomepage}/>
      <Route path='/course/:name/:chapter/materials' component={Course.Material}/>
    </Route>
  </Router>
);

export default Routes;
