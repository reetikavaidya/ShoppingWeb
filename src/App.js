import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Register from './login/Register';
import Login from './login/Login';
import UserLists from './components/UserLists';
import Checkout from './pages/Checkout';
import OrderConform from './pages/OrderConform';
import { useState } from 'react';
import Filterdata from './components/Filterdata';
import Productdetails from './pages/Productdetails';



function App() {
  const [order,setOrder]=useState(null)
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/user' element={<UserLists/>}></Route>
      <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}></Route>
      <Route path='/orderconform' element={<OrderConform order={order}/>}></Route>
      <Route path='/filter-data' element={<Filterdata/>}></Route>
      <Route path='/product/:id' element={<Productdetails/>}></Route>

     </Routes>
     <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;
