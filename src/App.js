import './App.css';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { UserDashBord } from './pages/private-route/UserDashBord';
import PageNotFaund from './pages/PageNotFaund';
import PrivateRoute from './coponents/PrivateRoute';
import UserProfile from './pages/private-route/UserProfile';

function App() {
  return (
   <>
   <BrowserRouter>   
   <Routes>
    <Route  path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path='/private' element={<PrivateRoute/>}>
    <Route path='userProfile' element={<UserProfile/>}>

    </Route>
    <Route path="user" element={<UserDashBord/>} />
    </Route>
    <Route path="*" element={<PageNotFaund/>} />


    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
