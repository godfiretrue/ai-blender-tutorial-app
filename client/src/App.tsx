import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "./hooks/useProgress";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { TutorialDetailPage } from "./pages/TutorialDetailPage";
import { TopicsPage } from "./pages/TopicsPage";
import { CheatsPage } from "./pages/CheatsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { SearchPage } from "./pages/SearchPage";
import { DashboardPage } from "./pages/DashboardPage";

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="tutorials" element={<TutorialsPage />} />
            <Route path="tutorials/:slug" element={<TutorialDetailPage />} />
            <Route path="topics" element={<TopicsPage />} />
            <Route path="cheats" element={<CheatsPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}
