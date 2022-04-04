import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Review from './components/Reviews/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Review' element={<Review></Review>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
