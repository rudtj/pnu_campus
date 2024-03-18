import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import MainPage from './pages/MainPage/index';
import ChattingPage from './pages/ChattingPage/index';
import RestaurantListPage from './pages/RestaurantListPage/index';
import BusSchedulePage from './pages/BusSchedulePage/index';
import LibraryReservationPage from './pages/LibraryReservationPage/index';
import MySeatPage from './pages/MySeatPage';
import { ReservationProvider } from './components/contexts/ReservationProvider';
import { TimeProvider } from './components/contexts/TimeProvider';


const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

const LibraryReservationProvider = () => {
  return (
    <ReservationProvider>
      <TimeProvider>
        <LibraryReservationPage />
      </TimeProvider>
    </ReservationProvider>
  );
};

const MySeatProvider = () => {
  return (
    <ReservationProvider>
      <TimeProvider>
        <MySeatPage />
      </TimeProvider>
    </ReservationProvider>
  );
};

function App() {
  return (
        <Router>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage />} />
                <Route path="chatting" element={<ChattingPage />} /> 
                <Route path="restaurant" element={<RestaurantListPage />} />
                <Route path="bus" element={<BusSchedulePage />} />
                <Route path="library" element={<LibraryReservationProvider />} />
                <Route path="myseat" element={<MySeatProvider />} />
              </Route>
          </Routes>
        </Router>
  );
}

export default App;

