import './App.css';
import Assign from './components/assign';
import TODO from './components/REST/TODO';

function App() {
  localStorage.setItem("name","fnfudsj");
  return (
    <div>
    <Assign />
    <TODO />
    </div>
  );
}

export default App;
