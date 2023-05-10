import './App.css';
import logo from './img/logo.png';
import Login from './components/Form/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo}/>
      </header>
      <Login/>
    </div>
  );
}

export default App;
