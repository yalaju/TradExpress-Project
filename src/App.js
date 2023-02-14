import logo from './logo.svg';
import './App.css';

import{ BrowserRouter,Routes, Route} from "react-router-dom"
import Navbar1 from './Components/Navbar1';
import Landingpag from './pages/Landingpag';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Getstarted2 from './pages/Getstarted2';
import Getstarted1 from './pages/Getstarted1';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Email from './pages/Email';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({rate:[]})
  useEffect(()=>{
    let fetchData = async(url)=>{
    let respound = await fetch(url)
    let newData = await respound.json()
    setData({...data,rate:newData.data})
    console.log(newData.data);
    }
    fetchData('https://api.coinlore.net/api/tickers/?start=0&limit=5')
  },[])
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Landingpag rates={data.rate} />}/>
        <Route path='/getstarted1' element={<Getstarted1/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/getstarted2' element={<Getstarted2/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/email' element={<Email/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
