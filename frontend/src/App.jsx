import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Test from "./components/Test";


function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Test text={"Főoldal"} />} />
          <Route path="/" element={<Test text={"Főoldal"} />} />
          <Route path="/jarmuveink" element={<Test text={"Járműveink"} />} />
          <Route path="/arazas" element={<Test text={"Árazás"} />} />
          <Route path="/gyik" element={<Test text={"GYIK"} />} />
          <Route path="/contact" element={<Test text={"Kapcsolat"} />} />
          <Route path="/about" element={<Test text={"Rólunk"} />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  )
}

export default App
