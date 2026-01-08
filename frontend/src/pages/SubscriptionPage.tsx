import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Check, Wifi, Laptop, MapPin, Star, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import { subscriptionApi } from '../lib/api';
import useStore from '../store/useStore';

interface SubscriptionPageProps {
  success?: boolean;
  cancelled?: boolean;
}

export default function SubscriptionPage({ success, cancelled }: SubscriptionPageProps) {
  const navigate = useNavigate();
  const { user } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (success) {
      toast.success('Subscription activated! Welcome to CafeFinder Premium!');
      setTimeout(() => navigate('/'), 2000);
    }
    if (cancelled) {
      toast.error('Subscription cancelled');
    }
  }, [success, cancelled, navigate]);

  const handleSubscribe = async () => {
    if (!user) {
      toast.error('Please sign in first');
      navigate('/auth');
      return;
    }

    setLoading(true);
    try {
      const { url } = await subscriptionApi.createCheckoutSession();
      window.location.href = url;
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to start checkout');
      setLoading(false);
    }
  };

  const features = [
    { icon: MapPin, text: 'Unlimited cafe searches' },
    { icon: Wifi, text: 'Detailed WiFi quality information' },
    { icon: Laptop, text: 'Laptop policy details for every cafe' },
    { icon: Clock, text: 'Full operating hours' },
    { icon: Star, text: 'Save favorite cafes' },
    { icon: Check, text: 'Priority customer support' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-2xl inline-block mb-4">
            <Crown className="h-16 w-16 text-white" />
          </div>
          <h1 className="font-display text-5xl font-bold text-primary-900 mb-4">
            Go Premium
          </h1>
          <p className="text-xl text-primary-600 mb-2">
            Unlock the full CafeFinder experience
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-bold text-primary-900">$0.99</span>
            <span className="text-primary-600">/month</span>
          </div>
        </div>

        <div className="card p-8 mb-6">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-6 text-center">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-primary-50"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-2 rounded-lg flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-primary-900 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={handleSubscribe}
            disabled={loading || user?.subscriptionStatus === 'active'}
            className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2"
          >
            <Crown className="h-6 w-6" />
            <span>
              {user?.subscriptionStatus === 'active'
                ? 'Already Subscribed'
                : loading
                ? 'Processing...'
                : 'Subscribe Now'}
            </span>
          </button>

          <p className="text-center text-sm text-primary-600 mt-4">
            Cancel anytime. No hidden fees.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    </div>
  );
}
