import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PromptPage from './pages/PromptPage';
import AuditPage from './pages/AuditPage';
import CreatePage from './pages/CreatePage';
import DebugPage from './pages/DebugPage';
import PrivacyPage from './pages/PrivacyPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="prompts/:id" element={<PromptPage />} />
          <Route path="audit" element={<AuditPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="debug" element={<DebugPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
