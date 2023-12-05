import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import UserContextProvider, { UserState } from '../context/userContext';
import Dashboard from './Pages/Dashboard';
import Login from './pages/Login';

axios.defaults.baseURL = 'http://localhost:7000/';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster position='top-right' toastOptions={{ duration: 5000 }} />
      <Routes>
        <Route
          path='/'
          element={
            <DashboardWrapper />
          }
        />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

function DashboardWrapper() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return userInfo ? <Dashboard /> : <Navigate to='/login' />;
}

export default App;
