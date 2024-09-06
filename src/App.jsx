import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/user_detail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the user detail page, with a dynamic ID */}
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
