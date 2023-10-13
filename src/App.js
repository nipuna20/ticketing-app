
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './shared/Header';
import Footer from './shared/Footer';
import Login from './components/Pages/Auth/Login';
import SignUp from './components/Pages/Auth/SignUp';
import AddReservation from './components/Pages/Item/Reservation/AddReservation';
import EditReservation from './components/Pages/Item/Reservation/EditReservation';
import TableReser from './components/Pages/Item/Reservation/TableReser';
import AddTrain from './components/Pages/Item/Train/AddTrain';
import TrainTable from './components/Pages/Item/Train/TrainTable';
import UsersTable from './components/Pages/Item/Users/Userstables';
import AdminDashboard from './components/Pages/Item/Admin/AdminDashboard';
import TableProfile from './components/Pages/Item/Traveller/TableProfile';
import TravellerProfile from './components/Pages/Item/Traveller/TravellerProfile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="">
        <div>
          <Routes>
            {/* booking */}
            <Route path="/" element={<Home />} />

            {/* Train */}
            <Route path="/addtrain" element={<AddTrain />} />
            <Route path="/tabletrain" element={<TrainTable />} />


            {/* Reservation */}
            <Route path="/addreservation" element={<AddReservation />} />
            <Route path="/editreservation" element={<EditReservation />} />
            <Route path="/tablereser" element={<TableReser />} />

            {/* User */}
            <Route path="/tableuser" element={<UsersTable />} />

            {/* Traveller */}
            <Route path="/ptable" element={<TableProfile />} />
            <Route path="/traprofile" element={<TravellerProfile />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />


            {/* Admin */}
            <Route path="/admindash" element={<AdminDashboard />} />

          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
