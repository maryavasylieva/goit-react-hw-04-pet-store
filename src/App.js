import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import AwesomeComponent from './Components/Preloader';
import './Components/Animation/animation.css';

const AsyncHome = lazy(
  () => import('./Pages/Home') /* webpackChunkName: "home-page" */,
);
const AsyncAbout = lazy(
  () => import('./Pages/About') /* webpackChunkName: "about-page" */,
);
const AsyncPetPages = lazy(
  () => import('./Pages/PetPages') /* webpackChunkName: "pet-pages" */,
);
const AsyncPets = lazy(
  () => import('./Pages/Pets') /* webpackChunkName: "pets-page" */,
);

const App = () => (
  <>
    <Navigation />
    <Suspense
      fallback={
        <div>
          <AwesomeComponent />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/about" component={AsyncAbout} />
        <Route path="/pets/:id" component={AsyncPetPages} />
        <Route path="/pets" component={AsyncPets} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
