
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
import AllTrains from './components/Pages/Item/Train/AllTrains';
import UsersTable from './components/Pages/Item/Users/Userstables';
import AdminDashboard from './components/Pages/Item/Admin/AdminDashboard';
import ViewTrain from './components/Pages/Item/Train/ViewTrain';
import SearchTrain from './components/Pages/Item/Train/SearchTrain';
import UpdateTrainReservation from './components/Pages/Item/Train/UpdateTrain';
import TrainHistory from './components/Pages/Item/Train/TrainHistory';
import ReservationHistory from './components/Pages/Item/Reservation/ReservationHistory';
import ReserveTrain from './components/Pages/Item/Reservation/ReserveTrain';
import EditTraveller from './components/Pages/Item/Traveller/EditTraveller';
import TravellerProfile from './components/Pages/Item/Traveller/TravellerProfile';
import TableProfile from './components/Pages/Item/Traveller/TableProfile';
import AddTraveler from './components/Pages/Item/Traveller/AddTraveler';
import AddUser from './components/Pages/Item/Users/AddUser';
import EditUser from './components/Pages/Item/Users/EditUser';

const App = () => {
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
            <Route path="/alltrains" element={<AllTrains />} />
            <Route path="/trainhistory" element={<TrainHistory />} />
            <Route path="/trains/:id" element={<ViewTrain />} />
            <Route path="/searchtrain" element={<SearchTrain />} />
            <Route path="/updatetrain/:id" element={<UpdateTrainReservation />} />



            {/* Reservation */}
            <Route path="/addreservation" element={<AddReservation />} />
            <Route path="/editreservation/:id" element={<EditReservation />} />
            <Route path="/tablereser" element={<TableReser />} />
            <Route path="/reservarionhistory" element={<ReservationHistory />} />
            <Route path="/reservetrain" element={<ReserveTrain/>} />


            {/* User */}
            <Route path="/tableuser" element={<UsersTable />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/updateuser/:id" element={<EditUser />} />

            {/* Traveller */}
            <Route path="/addtraveler" element={<AddTraveler />} />
            <Route path="/edittravel/:nic" element={<EditTraveller />} />
            <Route path="/travellerprofile/:nic" element={<TravellerProfile />} />
            <Route path="/tableprofile" element={<TableProfile />} />


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
