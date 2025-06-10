import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Header} from './components/forHeader/Header';
import { Register } from './components/forRegister/Register';
import { Login } from './components/forLogin/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
