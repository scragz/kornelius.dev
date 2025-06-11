import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PromptPage from './pages/PromptPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="prompts/:id" element={<PromptPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
