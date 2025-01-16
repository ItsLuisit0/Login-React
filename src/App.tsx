import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Roles from './Dashbord/roles'; 
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route  index path='/login' element={<Login />} />
          <Route index path='/roles' element={<Roles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
