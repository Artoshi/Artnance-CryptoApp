import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import axios from 'axios'
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CoinPage from "./components/CoinPage";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [data,setData] = useState([])
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setData(res.data)
    })
    
  },[url])

  return (
    <AuthContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={data} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage/>}>
            <Route path=':coinId'/>
          </Route>
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </AuthContextProvider>
  );
};

export default App;
