import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "././pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Freelancers from "./pages/Freelancers/Freelancers";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Faqs from "./pages/Faqs/Faqs";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import AtmemlyG from "./pages/AtmemlyG/AtmemlyG";
import Contactus from "./pages/ContactUs/Contactus";
import Programming from "./pages/Programming/Programming";
import GraphicD from "./pages/GraphicD/GrapgicD";
import Blogging from "./pages/Blogging/Blogging";
import Marketing from "./pages/Marketing/Marketing";
import CreateA from "./pages/CreateA/CreateA";
import Login from "./pages/LogIn/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/atmemly" element={<AtmemlyG />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/graphicdesign" element={<GraphicD />} />
          <Route path="/blogging" element={<Blogging />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/createa" element={<CreateA />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
