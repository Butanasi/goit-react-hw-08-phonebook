import { Routs } from './const';
import { Switch } from 'react-router-dom';
import { Header } from './Components/Header';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors, useTokenRefreshQuery } from './redux/auth';
import { Loader } from './Components/Loader';
import { PublicPage } from './Views/PublicPage';
import { PrivatPage } from './Views/PrivatPage';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "HomePage" */),
);
const RegisterPage = lazy(() =>
  import('./Views/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
const LoginPage = lazy(() =>
  import('./Views/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const ContactsPage = lazy(() =>
  import('./Views/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(authSelectors.getToken);
  const { isLoading } = useTokenRefreshQuery(token, {
    skip: token === null || isLoggedIn,
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicPage exact path={Routs.HOME}>
                <HomePage />
              </PublicPage>

              <PublicPage exact path={Routs.REGISTER} restricted>
                <RegisterPage />
              </PublicPage>

              <PublicPage
                exact
                path={Routs.LOGIN}
                redirectTo={Routs.CONTACTS}
                restricted
              >
                <LoginPage />
              </PublicPage>

              <PrivatPage path={Routs.CONTACTS} redirectTo={Routs.LOGIN}>
                <ContactsPage />
              </PrivatPage>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
