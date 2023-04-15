import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Routing from './Components/Routes/routes';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
