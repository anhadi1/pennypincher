
import './App.css';
import Home from './pages/Home/Home'
import Login from './pages/LogIn/Login'
import SignUp from './pages/SignUp/SignUp'
import { Routes, Route } from 'react-router-dom';
//import Header from './components/layout/Header/Header'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
