import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import { getUserProfileAsync } from './features/userSlice';
import { ProtectedRoute, PublicRoute } from './helpers/authRoute';
import Enter from './pages/Enter';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import SignoutConfirm from './pages/SignoutConfirm';

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
      <PageWrap>
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
          <Route
            path="signout_confirm"
            element={
              <ProtectedRoute auth={isAuth}>
                <SignoutConfirm />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute auth={isAuth}>
                <NewPost />
              </ProtectedRoute>
            }
          />
        </Routes>
      </PageWrap>
      <Footer />
    </div>
  );
}

const PageWrap = styled.div``;

export default App;
