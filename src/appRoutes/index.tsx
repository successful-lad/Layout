import { Switch, Redirect } from 'react-router';
import { Router } from 'react-router-dom';
import { history } from 'configureStore';
import routes from 'consts/routes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      {/* auth screen */}
      <PublicRoute exact path={routes.getAuth()} component={() => <div />} />
      {/* main screen */}
      <PrivateRoute exact path="" component={() => <div />} />
      <Redirect to={routes.getAuth()} />
      {/* </Route> */}
    </Switch>
  </Router>
);
export default AppRoutes;
