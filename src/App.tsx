import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="/dashboard" element={ <Dashboard /> }>
                    <Route index element={ <Home /> } />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;