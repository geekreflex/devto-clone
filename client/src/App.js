function App() {
  return (
    <div className="App">
      <button
        onClick={() =>
          (window.location.href = 'http://localhost:8400/auth/github')
        }
      >
        Login with github
      </button>
      <button
        onClick={() =>
          (window.location.href = 'http://localhost:8400/auth/google')
        }
      >
        Login with google
      </button>
    </div>
  );
}

export default App;
