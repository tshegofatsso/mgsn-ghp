import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Noticeboard from "./pages/Noticeboard";
import Volunteer from "./pages/Volunteer";
import Register from "./pages/Register";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}