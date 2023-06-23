import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
        <Route path="/apartments/:id" element={<ApartmentDetails/>} />
        </Routes>
      </div>
      
      
    
    
  );
}

export default App;
