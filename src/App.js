import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Evidences from './components/Evidences';
import Ghosts from './components/Ghosts';
import ExplicitEvidences from './components/ExplicitEvidences';
import './css/breakpoints.scss'

function App() {
  return (
    <div className="App">
        <Header />
        <Evidences />
        <Ghosts />
        <ExplicitEvidences />
    </div>
  );
}

export default App;
