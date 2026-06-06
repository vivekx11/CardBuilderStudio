import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAppStore } from './store/appStore';
import LoadingScreen from './components/ui/LoadingScreen';

// Lazy-loaded pages
const LandingPage = lazy(() => import('./pages/Landing/LandingPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const SignupPage = lazy(() => import('./pages/Auth/SignupPage'));
const DashboardLayout = lazy(() => import('./pages/Dashboard/DashboardLayout'));
const DashboardHome = lazy(() => import('./pages/Dashboard/DashboardHome'));
const TemplatesPage = lazy(() => import('./pages/Dashboard/TemplatesPage'));
const MyDesignsPage = lazy(() => import('./pages/Dashboard/MyDesignsPage'));
const AIGeneratorPage = lazy(() => import('./pages/Dashboard/AIGeneratorPage'));
const QRGeneratorPage = lazy(() => import('./pages/Dashboard/QRGeneratorPage'));
const MockupsPage = lazy(() => import('./pages/Dashboard/MockupsPage'));
const OrdersPage = lazy(() => import('./pages/Dashboard/OrdersPage'));
const TeamPage = lazy(() => import('./pages/Dashboard/TeamPage'));
const AnalyticsPage = lazy(() => import('./pages/Dashboard/AnalyticsPage'));
const SettingsPage = lazy(() => import('./pages/Dashboard/SettingsPage'));
const EditorPage = lazy(() => import('./pages/Editor/EditorPage'));
const DigitalCardPage = lazy(() => import('./pages/DigitalCard/DigitalCardPage'));
const AdminLayout = lazy(() => import('./pages/Admin/AdminLayout'));
const AdminUsers = lazy(() => import('./pages/Admin/AdminUsers'));
const AdminTemplates = lazy(() => import('./pages/Admin/AdminTemplates'));
const AdminOrders = lazy(() => import('./pages/Admin/AdminOrders'));

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            border: '3px solid #000',
            borderRadius: '4px',
            boxShadow: '4px 4px 0px #000',
          },
        }}
      />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/card/:slug" element={<DigitalCardPage />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="designs" element={<MyDesignsPage />} />
            <Route path="ai-generator" element={<AIGeneratorPage />} />
            <Route path="qr-generator" element={<QRGeneratorPage />} />
            <Route path="mockups" element={<MockupsPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Editor */}
          <Route path="/editor/:designId?" element={<EditorPage />} />
          <Route path="/editor/template/:templateId" element={<EditorPage />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/users" replace />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="templates" element={<AdminTemplates />} />
            <Route path="orders" element={<AdminOrders />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
