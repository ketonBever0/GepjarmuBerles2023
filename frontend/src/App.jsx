import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
// import Test from "./components/Test";
import Main from "./components/Main"
import Catalog from "./components/Catalog"
import Faq from "./components/Faq"
import AboutUs from "./components/AboutUs"


function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/katalogus" element={<Catalog />} />
          <Route path="/gyik" element={<Faq />} />
          {/* <Route path="/contact" element={ } /> */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  )
}

export default App
