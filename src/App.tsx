import { initializeApp } from 'firebase/app';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Home } from './Component/pages/Home';
import Login from './Component/pages/Login';
import { config } from './Component/scripts/config';
import { NavigationRoute } from './Component/scripts/RouteLog';

initializeApp(config.firebaseConfig);

function App() {
  return (
  <>
<BrowserRouter>
    <Routes>
      <Route element={
          <Login />
      } path='/'/>
      <Route element={
      <NavigationRoute>
        <Home/>
      </NavigationRoute> 
      } path='home'/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
