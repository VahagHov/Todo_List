import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { Todos } from './pages/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element ={<Main />} />
          <Route  path='todos/:date' element = {<Todos />}/>
      </Routes>
    </div>
  );
}

export default App;
