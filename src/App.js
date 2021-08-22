import Home from './pages/Home/Home';
import NewReference from './pages/NewReference/NewReference';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';

import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Redirect from="/" to="/home" />
      <Route exact path='/home' component={Home} />
      <Route exact path='/home/:search' component={Home} />
      <Route exact path='/newreference' component={NewReference} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/login' component={Login} />
    </>
  );
}

export default App;
