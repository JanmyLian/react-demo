import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent />
        <FunctionalComponent />
      </header>
    </div>
  );
}

export default App;
