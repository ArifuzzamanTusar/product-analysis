import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/global/Header/Header';
import Footer from './components/global/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Pages/Notfound/Notfound';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<Notfound></Notfound>} ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
