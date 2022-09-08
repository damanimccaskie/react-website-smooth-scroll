import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>
    </Router>
  );
}

export default App;
