import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { getUserProfileAsync } from './features/userSlice';
import { PublicRoute } from './helpers/authRoute';
import Enter from './pages/Enter';
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuth) {
      dispatch(getUserProfileAsync());
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="enter"
          element={
            <PublicRoute auth={isAuth}>
              <Enter />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
