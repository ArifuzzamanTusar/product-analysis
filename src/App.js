import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/global/Header/Header';
import Footer from './components/global/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Pages/Notfound/Notfound';
import Home from './components/Pages/Home/Home';
import Review from './components/Pages/Reviews/Review';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Blogs from './components/Pages/Blogs/Blogs';
import About from './components/Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='*' element={<Notfound></Notfound>} ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
