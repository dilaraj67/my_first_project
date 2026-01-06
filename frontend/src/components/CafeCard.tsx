import { motion } from 'framer-motion';
import { Wifi, Laptop, MapPin, Star, WifiOff, LaptopMinimal, Crown } from 'lucide-react';
import { Cafe } from '../types';
import useStore from '../store/useStore';

interface CafeCardProps {
  cafe: Cafe;
}

export default function CafeCard({ cafe }: CafeCardProps) {
  const { setSelectedCafe, user } = useStore();

  const hasSubscription = user?.subscriptionStatus === 'active';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="card p-6 cursor-pointer relative overflow-hidden group"
      onClick={() => hasSubscription && setSelectedCafe(cafe)}
    >
      {/* Premium Badge */}
      {!hasSubscription && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
            <Crown className="h-3 w-3" />
            <span>Premium</span>
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-4 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
        {cafe.image_url ? (
          <img
            src={cafe.image_url}
            alt={cafe.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl">☕</div>
          </div>
        )}
        {!hasSubscription && (
          <div className="absolute inset-0 bg-primary-900/30 backdrop-blur-sm flex items-center justify-center">
            <div className="text-white text-center">
              <Crown className="h-12 w-12 mx-auto mb-2" />
              <p className="font-medium">Subscribe to view details</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={!hasSubscription ? 'filter blur-sm' : ''}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-xl font-bold text-primary-900 line-clamp-1">
            {cafe.name}
          </h3>
          {cafe.rating && (
            <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-primary-900">{cafe.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <div className="flex items-start space-x-2 text-sm text-primary-600 mb-4">
          <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span className="line-clamp-2">{cafe.address}</span>
        </div>

        {cafe.distance && (
          <div className="text-sm text-primary-500 mb-3">
            {cafe.distance.toFixed(1)} km away
          </div>
        )}

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cafe.has_wifi !== null && (
            <div className={`badge ${cafe.has_wifi ? 'badge-success' : 'bg-red-100 text-red-800'}`}>
              {cafe.has_wifi ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
              {cafe.has_wifi ? 'WiFi' : 'No WiFi'}
            </div>
          )}
          {cafe.allows_laptops !== null && (
            <div className={`badge ${cafe.allows_laptops ? 'badge-info' : 'bg-red-100 text-red-800'}`}>
              <Laptop className="h-3 w-3 mr-1" />
              {cafe.allows_laptops ? 'Laptop OK' : 'No Laptops'}
            </div>
          )}
          {cafe.power_outlets && (
            <div className="badge badge-warning">
              ⚡ Outlets
            </div>
          )}
          {cafe.price_range && (
            <div className="badge bg-primary-100 text-primary-800">
              {cafe.price_range}
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="text-xs text-primary-500 space-y-1">
          {cafe.noise_level && (
            <div>Noise Level: <span className="font-medium capitalize">{cafe.noise_level}</span></div>
          )}
          {cafe.coffee_quality && (
            <div>Coffee: <span className="font-medium capitalize">{cafe.coffee_quality}</span></div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
