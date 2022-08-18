import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/nav/Header';
import { getUserProfileAsync } from './features/userSlice';

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
    </div>
  );
}

export default App;
