import { FC, ReactElement } from 'react';
import { Route } from 'react-router-dom';
// import { getToken } from 'helpers/token';
// import useRoute from 'hooks/api/useRoute';
// import routes from 'consts/routes';
// import getUrlParams from 'helpers/getUrlParams';
// import Layout from '../components/layout';
import Layout from 'components/Layout';

interface IPrivateRoute {
  component: () => ReactElement;
  exact?: boolean;
  // computedMatch?: object;
  path: string;
  // url?: string;
  // location?: any;
}
const PrivateRoute: FC<IPrivateRoute> = ({ component: Component, ...rest }: any) => (
  // const { setRoute } = useRoute();

  // useMemo(() => {
  //   setRoute({ route: rest.location.pathname });
  // }, [setRoute, rest.location]);

  // if (getToken() === null) {
  //   return <Redirect to={routes.getAuth()} />;
  // }
  <>
    <Layout>
      {/* // @ts-ignore */}
      <Route {...rest} render={(props) => <Component {...props} />} />
    </Layout>
  </>
);
export default PrivateRoute;
