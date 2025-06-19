import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Header} from './components/forHeader/Header';
import { Register } from './components/forRegister/Register';
import { Login } from './components/forLogin/Login';
import { EmptyLayout } from './components/forLayout/EmptyLayout';
import { MainPageOut } from './components/forLayout/MainPage';
import { MainPageIn } from './components/forLayout/MainPage';
import { MainContentOut } from './components/forOultets/MainContent';
import { MainContentIn } from './components/forOultets/MainContent';

function App() {
  return (
    

    <BrowserRouter>
      <Routes>

        <Route element={<EmptyLayout/>}>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Route>

        <Route element={<MainPageOut/>}>
            <Route path='/' element={<MainContentOut></MainContentOut>}></Route>
        </Route>

        <Route element={<MainPageIn/>}>
            <Route path='/in' element={<MainContentIn></MainContentIn>}></Route>
        </Route>


      </Routes>     
     </BrowserRouter>
  );
}

export default App;