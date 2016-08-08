import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Provider } from 'react-redux';
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
    tags: {
        git_commit: 'asdoghshodig',
        userLevel: 'editor'
    }
}).install();

Raven.captureMessage('Something bad happened!');
Raven.showReportDialog();

// import react router deps
import router from './components/Router';



render(router, document.getElementById('root'));