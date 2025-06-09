import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PromptPage from './pages/PromptPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prompts/:id" element={<PromptPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
