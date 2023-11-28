import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState,useEffect } from "react";
import axios from "axios"
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData } from "./redux/rootSlice";

function App() {
  const { loading, portfolioData, } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();

  const getPortfolioData = async()=>{
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data')
      dispatch(SetPortfolioData(response.data))
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
  getPortfolioData()
  },[])

useEffect(()=>{
console.log(portfolioData)
},[portfolioData])

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
