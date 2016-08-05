import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
<Router history={browserHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
    </Route>
</Router>
)

export default router;