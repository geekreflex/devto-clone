import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const config = {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    };
    const { data } = await axios.get(
      `http://localhost:8400/api/users/profile`,
      config
    );
    console.log(data);
    // fetch('http://localhost:8400/api/users/profile', {
    //   method: 'get',
    //   credentials: 'include',
    // })
    //   .then((res) => res.json)
    //   .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <button
        onClick={() =>
          (window.location.href = 'http://localhost:8400/auth/github')
        }
      >
        Login with github
      </button>
    </div>
  );
}

export default App;
