import Home from './pages/Home/Home';
import NewReference from './pages/NewReference/NewReference';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';

import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Redirect from="/" to="/home" />
      <Route  path='/home' component={Home} />
      <Route  path='/home/:search' component={Home} />
      <Route  path='/newreference' component={NewReference} />
      <Route  path='/admin' component={Admin} />
      <Route  path='/login' component={Login} />
    </>
  );
}

export default App;
