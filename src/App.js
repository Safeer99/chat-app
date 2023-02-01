import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />

    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
