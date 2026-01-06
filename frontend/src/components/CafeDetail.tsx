import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Globe, Wifi, Laptop, Clock, Users, Volume2, Zap, Star } from 'lucide-react';
import useStore from '../store/useStore';

export default function CafeDetail() {
  const { selectedCafe, setSelectedCafe } = useStore();

  if (!selectedCafe) return null;

  const getDayName = (index: number) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[index];
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedCafe(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100">
            {selectedCafe.image_url ? (
              <img src={selectedCafe.image_url} alt={selectedCafe.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-8xl">☕</div>
            )}
            <button
              onClick={() => setSelectedCafe(null)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="h-6 w-6 text-primary-900" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-display text-3xl font-bold text-primary-900">{selectedCafe.name}</h2>
              {selectedCafe.rating && (
                <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-primary-900">{selectedCafe.rating.toFixed(1)}</span>
                  {selectedCafe.total_reviews && (
                    <span className="text-sm text-primary-600">({selectedCafe.total_reviews})</span>
                  )}
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-start space-x-2 text-primary-700">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{selectedCafe.address}</span>
              </div>
              {selectedCafe.phone && (
                <div className="flex items-center space-x-2 text-primary-700">
                  <Phone className="h-5 w-5" />
                  <a href={`tel:${selectedCafe.phone}`} className="hover:text-primary-900">
                    {selectedCafe.phone}
                  </a>
                </div>
              )}
              {selectedCafe.website && (
                <div className="flex items-center space-x-2 text-primary-700">
                  <Globe className="h-5 w-5" />
                  <a
                    href={selectedCafe.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-900 underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className={`card p-4 ${selectedCafe.has_wifi ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <Wifi className={`h-6 w-6 mb-2 ${selectedCafe.has_wifi ? 'text-green-600' : 'text-red-600'}`} />
                <div className="font-medium text-primary-900">WiFi</div>
                <div className="text-sm text-primary-600">
                  {selectedCafe.has_wifi ? (selectedCafe.wifi_quality || 'Available') : 'Not Available'}
                </div>
              </div>

              <div className={`card p-4 ${selectedCafe.allows_laptops ? 'border-blue-200 bg-blue-50' : 'border-red-200 bg-red-50'}`}>
                <Laptop className={`h-6 w-6 mb-2 ${selectedCafe.allows_laptops ? 'text-blue-600' : 'text-red-600'}`} />
                <div className="font-medium text-primary-900">Laptops</div>
                <div className="text-sm text-primary-600">
                  {selectedCafe.allows_laptops ? 'Allowed' : 'Not Allowed'}
                </div>
              </div>

              {selectedCafe.power_outlets !== null && (
                <div className={`card p-4 ${selectedCafe.power_outlets ? 'border-yellow-200 bg-yellow-50' : ''}`}>
                  <Zap className="h-6 w-6 mb-2 text-yellow-600" />
                  <div className="font-medium text-primary-900">Power Outlets</div>
                  <div className="text-sm text-primary-600">
                    {selectedCafe.power_outlets ? 'Available' : 'Limited'}
                  </div>
                </div>
              )}

              {selectedCafe.noise_level && (
                <div className="card p-4">
                  <Volume2 className="h-6 w-6 mb-2 text-primary-600" />
                  <div className="font-medium text-primary-900">Noise Level</div>
                  <div className="text-sm text-primary-600 capitalize">{selectedCafe.noise_level}</div>
                </div>
              )}

              {selectedCafe.seating_capacity && (
                <div className="card p-4">
                  <Users className="h-6 w-6 mb-2 text-primary-600" />
                  <div className="font-medium text-primary-900">Seating</div>
                  <div className="text-sm text-primary-600">{selectedCafe.seating_capacity} seats</div>
                </div>
              )}

              {selectedCafe.price_range && (
                <div className="card p-4">
                  <div className="text-2xl mb-2">{selectedCafe.price_range}</div>
                  <div className="font-medium text-primary-900">Price Range</div>
                  <div className="text-sm text-primary-600">Average cost</div>
                </div>
              )}
            </div>

            {/* Operating Hours */}
            {selectedCafe.operating_hours && (
              <div className="card p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <h3 className="font-display text-xl font-bold text-primary-900">Operating Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(selectedCafe.operating_hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between py-2 border-b border-primary-100 last:border-0">
                      <span className="font-medium text-primary-900 capitalize">{day}</span>
                      <span className="text-primary-600">
                        {hours.closed
                          ? 'Closed'
                          : `${formatTime(hours.open)} - ${formatTime(hours.close)}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Info */}
            {selectedCafe.laptop_policy && (
              <div className="card p-6 bg-blue-50 border-blue-200">
                <h3 className="font-display text-lg font-bold text-primary-900 mb-2">Laptop Policy</h3>
                <p className="text-primary-700">{selectedCafe.laptop_policy}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
