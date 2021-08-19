import { FC, ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { getToken } from 'helpers/token';
import routes from 'consts/routes';

interface IPublicRoute {
  component: () => ReactElement;
  exact?: boolean;
  // computedMatch?: object;
  path: string;
  // url?: string;
}

const PublicRoute: FC<IPublicRoute> = ({ component: Component, ...rest }: any) => {
  // if (getToken() === null) {
  //   return <Route {...rest} render={(props) => <Component {...props} />} />;
  // }
  if (true) {
    // @ts-ignore
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to={routes.getBase()} />;
};

export default PublicRoute;
