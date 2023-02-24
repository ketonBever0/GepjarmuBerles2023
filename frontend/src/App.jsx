import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
// import Test from "./components/Test";
import Main from "./components/Main"
import Catalog from "./components/Catalog"
import Faq from "./components/Faq"
import AboutUs from "./components/AboutUs"
import Footer from './components/Footer';
import Contact from './components/Contact';
import { JarmuProvider } from './components/context/JarmuContext';
import { FilterFormProvider } from './components/context/FilterFormContext';
import VehicleAddForm from './components/VehicleAddForm';
import Login from './components/Login';
import Register from './components/Register'
import { KosarProvider } from './components/context/KosarContext';
import CartContainer from './components/kosar/CartContainer';
import VehicleUpdateForm from './components/VehicleUpdateForm';
import Checkout from './components/kosar/Checkout';
import { UserProvider } from './components/context/UserContext';



function App() {
  return (
    <div className="container-fluid">
      <JarmuProvider>
        <FilterFormProvider>
          <KosarProvider>
            <UserProvider>

              <Router>
                <Header />
                <Routes>
                  <Route path="*" element={<Main />} />
                  <Route path="/" element={<Main />} />
                  <Route path="/katalogus" element={<Catalog />} />
                  <Route path="/gyik" element={<Faq />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/addvehicle" element={<VehicleAddForm />} />
                  <Route path="/updatevehicle" element={<VehicleUpdateForm />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
                <CartContainer />
              </Router>

              <Toaster />
            </UserProvider>
          </KosarProvider>
        </FilterFormProvider>
      </JarmuProvider>
    </div>
  )
}

export default App
