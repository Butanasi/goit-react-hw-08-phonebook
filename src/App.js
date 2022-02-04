import { Routs } from './const';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './Views/PrivatRoute';
import { Header } from './Components/Header';
import style from './App.module.scss';
import { lazy, Suspense } from 'react';
import { Loader } from './Components/Loader';
import { PublicRoute } from './Views/PublicRoute';
import { useSelector } from 'react-redux';
import { authSelectors } from './redux/auth';

const HomePage = lazy(() => import('./Views/HomePage'));
const RegisterPage = lazy(() => import('./Views/RegisterPage'));
const LoginPage = lazy(() => import('./Views/LoginPage'));
const ContactsPage = lazy(() => import('./Views/ContactsPage'));

function App() {
  const isRefresh = useSelector(authSelectors.getIsRefresh);
  return (
    !isRefresh && (
      <div className={style.container}>
        <Header />
        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path={Routs.HOME}>
              <HomePage />
            </PublicRoute>
            <PublicRoute
              path={Routs.REGISTER}
              redirectTo={Routs.CONTACTS}
              restricted
            >
              <RegisterPage />
            </PublicRoute>
            <PublicRoute
              path={Routs.LOGIN}
              redirectTo={Routs.CONTACTS}
              restricted
            >
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path={Routs.CONTACTS} redirectTo={Routs.LOGIN}>
              <ContactsPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </div>
    )
  );
}

export default App;
