import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css"
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
        <Router>  
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/auth" element={<Auth/>}></Route>
            </Routes>
          </div>
        </Router>
  );
}