import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/DashBoard/Dashboard';
import MyAppointments from './Pages/DashBoard/MyAppointments';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';


function App() {
  return (
    <div className="mx-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>

        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointments />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }></Route>
        </Route>

        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
