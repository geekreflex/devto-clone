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
    </div>
  );
}

export default App;
