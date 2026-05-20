import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./Header";
import Home from "./Home";
import Ourstory from "./Ourstory";
import Recipes from "./Recipes";
import Blogs from "./Blogs";
import Contactus from "./Contactus";
import Innerrecipes from "./Innerrecipes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/innerrecipes/:id" element={<Innerrecipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
