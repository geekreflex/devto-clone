import GithubAuthLogin from './components/auth/GithubAuthLogin';
import GoogleAuthLogin from './components/auth/GoogleAuthLogin';

function App() {
  return (
    <div className="App">
      <GithubAuthLogin />
      <GoogleAuthLogin />
    </div>
  );
}

export default App;
