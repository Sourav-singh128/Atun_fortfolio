import "./App.css";
import Header from "./layout/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ContactMe from "./pages/contactMe/contactMe";
import Gallery from "./pages/gallery/gallery";
import Experience from "./pages/experience/experience";
import Presentation from "./pages/presentation/presentation";
import Footer from "./layout/footer/footer";
import Publication from "./pages/publication/publication";
import EditorialVenture from "./pages/publication/editorialVenture/editorialVenture";
import TableWithHyphen from "./pages/about/tableWithHyphen";
import UpcomingEvents from "./pages/upcomingEvents/upcomingEvents";
import Education from "./pages/education/education";
import Collaborators from "./pages/publication/collaborators/collaborators";
import GalleryCloudinary from "./pages/gallery/galleryCloudinary";
import NestedRow from "./pages/about/nestedRow";
import RecordHolding from "./pages/about/recordHolding";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more/contact_me" element={<ContactMe />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/more/gallery" element={<GalleryCloudinary />} />
          {/* <Route path="/more/gallery" element={<Gallery />} /> */}
          {/* <Route path="/more/:name" element={<Gallery />} /> */}
          <Route
            path="publications/editorial_ventures"
            element={<EditorialVenture />}
          />
          <Route
            path="publications/international_collaborators"
            element={<Collaborators />}
          />
          <Route
            path="publications/national_collaborators"
            element={<Collaborators />}
          />
          <Route path="/publications/:name" element={<Publication />} />
          <Route path="about/scholarships" element={<NestedRow />} />
          <Route path="about/editor_&_reviewers" element={<NestedRow />} />
          <Route path="about/record_holding" element={<RecordHolding />} />
          <Route path="/about/education" element={<Education />} />
          {/* <Route path="about/editor_&_reviewer" element={<TableWithHyphen />} /> */}
          <Route path="about/scholarship" element={<TableWithHyphen />} />
          <Route path="about/patent" element={<TableWithHyphen />} />
          <Route path="/about/upcoming_events" element={<UpcomingEvents />} />
          <Route path="about/:value" element={<About />} />
          <Route path="/lecture_as_resource_person" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
