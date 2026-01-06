import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    onClose();
    navigate('/subscription');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="card p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-primary-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-primary-600" />
            </button>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-2xl inline-block mb-4">
                <Crown className="h-12 w-12 text-white" />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary-900 mb-4">
                Unlock More Cafes
              </h2>
              <p className="text-primary-600 mb-6">
                We found more cafes in your area! Subscribe to view all results and access detailed information.
              </p>

              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-primary-900">$0.99</span>
                  <span className="text-primary-600">/month</span>
                </div>
                <p className="text-sm text-primary-600">Cancel anytime</p>
              </div>

              <button onClick={handleSubscribe} className="btn-primary w-full mb-3">
                Subscribe Now
              </button>
              <button onClick={onClose} className="btn-secondary w-full">
                Maybe Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
