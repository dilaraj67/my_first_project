import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import useStore from './store/useStore';
import { authApi } from './lib/api';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import SubscriptionPage from './pages/SubscriptionPage';
import Header from './components/Header';

function App() {
  const { token, setUser } = useStore();

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const user = await authApi.getCurrentUser();
          setUser(user);
        } catch (error) {
          console.error('Failed to load user:', error);
        }
      }
    };

    loadUser();
  }, [token, setUser]);

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/subscription/success" element={<SubscriptionPage success />} />
          <Route path="/subscription/cancel" element={<SubscriptionPage cancelled />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#43302b',
              border: '1px solid #e0cec7',
              padding: '16px',
              borderRadius: '12px',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
