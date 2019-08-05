import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from './Components/Navigation';
import AwesomeComponent from './Components/Preloader';
import { AnimatedSwitch } from 'react-router-transition';
import './Components/Animation/animation.css';
import { bounceTransition, mapStyles } from './Components/Animation/Animation';

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
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="anim-wrapper"
      >
        <Route exact path="/" component={AsyncHome} />
        <Route path="/about" component={AsyncAbout} />
        <Route path="/pets/:id" component={AsyncPetPages} />
        <Route path="/pets" component={AsyncPets} />
        <Redirect to="/" />
      </AnimatedSwitch>
    </Suspense>
  </>
);

export default App;
