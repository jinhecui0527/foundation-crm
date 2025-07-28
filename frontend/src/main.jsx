import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import CompliancePage from './pages/CompliancePage.jsx';
import FinancePage from './pages/FinancePage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AssistantPage from './pages/AssistantPage.jsx';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import DonorsPage from './pages/DonorsPage.jsx';
import DonationsPage from './pages/DonationsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CampaignsPage from './pages/CampaignsPage.jsx';
import CommunicationsPage from './pages/CommunicationsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/donors" element={<DonorsPage />} />
      <Route path="/donations" element={<DonationsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/campaigns" element={<CampaignsPage />} />
      <Route path="/communications" element={<CommunicationsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/合规审查" element={<CompliancePage />} />
      <Route path="/财务管理" element={<FinancePage />} />
      <Route path="/智能助手" element={<AssistantPage />} />
      <Route path="/仪表盘" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);