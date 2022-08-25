import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, generatePath } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import { getPostsAsync, getTagsAsync } from './features/postSlice';
import { getUserProfileAsync } from './features/userSlice';
import GlobalComp from './GlobalComp';
import { ProtectedRoute, PublicRoute } from './helpers/authRoute';
import Enter from './pages/Enter';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Settings from './pages/Settings';
import SignoutConfirm from './pages/SignoutConfirm';
import DynamicProfile from './pages/DynamicProfile';
import Customization from './pages/Customization';
import Profile from './pages/Profile';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuth) {
      dispatch(getUserProfileAsync());
    }
  }, []);

  useEffect(() => {
    dispatch(getPostsAsync());
    dispatch(getTagsAsync());
  }, []);

  useEffect(() => {
    if (location.pathname === '/new') {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [location]);

  return (
    <div>
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
          <Route
            path="settings"
            element={
              <ProtectedRoute auth={isAuth}>
                <Settings />
              </ProtectedRoute>
            }
          >
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="customization" index element={<Customization />} />
          </Route>
          <Route path="/:username" element={<DynamicProfile />} />
          <Route path="*" element={'Not found'} />
        </Routes>
      </PageWrap>
      <GlobalComp />
      <Footer />
    </div>
  );
}

const PageWrap = styled.div`
  margin-top: 56px;
  padding-top: 20px;
`;

export default App;
