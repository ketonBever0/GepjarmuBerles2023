import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
// import Test from "./components/Test";
import Main from "./components/Main"
import Catalog from "./components/Catalog"
import Faq from "./components/Faq"
import AboutUs from "./components/AboutUs"
import Footer from './components/Footer';
import Contact from './components/Contact';
import { JarmuProvider } from './components/context/jarmuContext';
import { FilterFormProvider } from './components/context/FilterFormContext';


function App() {
  return (
    <div className="container-fluid">
      <JarmuProvider>
        <FilterFormProvider>
        
          <Router>
            <Header />
            <Routes>
              <Route path="*" element={<Main />} />
              <Route path="/" element={<Main />} />
              <Route path="/katalogus" element={<Catalog />} />
              <Route path="/gyik" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer />
          </Router>


          <Toaster />

        </FilterFormProvider>
      </JarmuProvider>
    </div>
  )
}

export default App
