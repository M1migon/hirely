import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Header} from './components/forHeader/Header';
import { Register } from './components/forRegister/Register';
import { Login } from './components/forLogin/Login';
import { Post } from './components/forPost/Post';
import { Slider } from './components/forSlider/Slider';
import { MainPage } from './components/main';
import { SignUpOrLogin } from './components/forSignUpOrLogin/signUpOrLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/slider' element={<Slider></Slider>}></Route>
        <Route path='/post' element={<Post></Post>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
