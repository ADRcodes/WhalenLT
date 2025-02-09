
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route 
        path="/profile" 
        element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
        }/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App