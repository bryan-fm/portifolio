import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import DeckPage from './pages/DeckPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "linear-gradient(to bottom right,rgb(45, 85, 131),rgb(129, 168, 197))", padding: "20px" }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<DeckPage />} />
          <Route
            path="*"
            element={<Navigate to="/" replace={true} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
