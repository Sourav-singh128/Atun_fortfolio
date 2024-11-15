import "./App.css";
import Header from "./layout/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ContactMe from "./pages/contactMe/contactMe";
import Gallery from "./pages/gallery/gallery";
import Industry from "./pages/industry/industry";
import Presentation from "./pages/presentation/presentation";
import Footer from "./layout/footer/footer";
import Publication from "./pages/publication/publication";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_me" element={<ContactMe />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/industry_visit" element={<Industry />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/more/:name" element={<Gallery />} />
          <Route path="/publication/:name" element={<Publication />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
