import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Compare from "./components/Compare";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Login from "./components/Login";
import Quiz from "./components/Quiz";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
                <Route path="/compare" element={<Compare />} />
            </Routes>
        </>
    );
}

export default App