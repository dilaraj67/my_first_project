import { Link, useNavigate } from 'react-router-dom';
import { Coffee, User, LogOut, Crown } from 'lucide-react';
import useStore from '../store/useStore';

export default function Header() {
  const { user, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-primary-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
              CafeFinder
            </span>
          </Link>

          <nav className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-sm">
                  <User className="h-4 w-4 text-primary-600" />
                  <span className="text-primary-900 font-medium">{user.email}</span>
                  {user.subscriptionStatus === 'active' && (
                    <Crown className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
                {user.subscriptionStatus !== 'active' && (
                  <Link
                    to="/subscription"
                    className="btn-primary text-sm py-2 px-4 flex items-center space-x-1"
                  >
                    <Crown className="h-4 w-4" />
                    <span>Subscribe</span>
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="btn-secondary text-sm py-2 px-4 flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/auth" className="btn-primary text-sm py-2 px-4">
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
