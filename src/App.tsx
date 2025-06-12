import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import PromptsIndexPage from './pages/PromptsIndexPage';
import PromptDetailPage from './pages/PromptDetailPage';
import AuditPage from './pages/AuditPage';
import CreatePage from './pages/CreatePage';
import DebugPage from './pages/DebugPage';
import PrivacyPage from './pages/PrivacyPage';
import AccessibilityPage from './pages/AccessibilityPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="prompts" element={<PromptsIndexPage />} />
          <Route path="prompts/:id" element={<PromptDetailPage />} />
          <Route path="audit" element={<AuditPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="debug" element={<DebugPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
