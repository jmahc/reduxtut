import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import router from './components/Router';


render(router, document.getElementById('root'));