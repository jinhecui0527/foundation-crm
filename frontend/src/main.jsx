import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import Dashboard from './pages/Dashboard.jsx';
import LoginPage from './pages/LoginPage';
import AssistantPage from './pages/AssistantPage.jsx';
import ExpandDeptPage from './pages/ExpandDeptPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/智能助手" element={<AssistantPage />} />
      <Route path="/仪表盘" element={<Dashboard />} />
      <Route path="/ExpandDeptPage" element={<ExpandDeptPage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
