import logo from './logo.png';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div>
      <header className="head">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="judul">
          Zilla Showroom
        </h2>
      </header>
      <body>
      <Home/>
      </body>
    </div>
  );
}

export default App;
