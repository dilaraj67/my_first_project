import { useState, useRef } from 'react';
import { MapPin, Wifi, Laptop, Search, Filter, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import useStore from '../store/useStore';
import { cafesApi } from '../lib/api';
import { SearchFilters } from '../types';
import CafeCard from '../components/CafeCard';
import CafeDetail from '../components/CafeDetail';
import SubscriptionModal from '../components/SubscriptionModal';

const libraries: ("places")[] = ["places"];

export default function HomePage() {
  const { cafes, setCafes, setSearchLocation, requiresSubscription, setRequiresSubscription, user } = useStore();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState({
    wifi: false,
    laptops: false,
    radius: 5,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<{ lat: number; lng: number } | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries,
  });

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setSearchLocation({ lat: latitude, lng: longitude });
        await searchCafes(latitude, longitude);
      },
      (error) => {
        toast.error('Unable to retrieve your location');
        console.error(error);
        setLoading(false);
      }
    );
  };

  const searchCafes = async (lat: number, lng: number) => {
    setLoading(true);
    try {
      const searchFilters: SearchFilters = {
        lat,
        lng,
        radius: filters.radius,
        wifi: filters.wifi || undefined,
        laptops: filters.laptops || undefined,
      };

      const result = await cafesApi.search(searchFilters);
      setCafes(result.cafes);
      setRequiresSubscription(result.requiresSubscription);

      if (result.requiresSubscription) {
        setShowSubscriptionModal(true);
      }

      toast.success(`Found ${result.total} cafes nearby`);
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to search cafes');
    } finally {
      setLoading(false);
    }
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      if (place.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setSelectedPlace({ lat, lng });
        setLocation(place.formatted_address || place.name || '');
      } else {
        toast.error('Please select a valid location from the dropdown');
      }
    }
  };

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const handleSearch = async () => {
    if (!location && !selectedPlace) {
      getCurrentLocation();
    } else if (selectedPlace) {
      await searchCafes(selectedPlace.lat, selectedPlace.lng);
    } else {
      toast.error('Please select a location from the dropdown');
    }
  };

  if (loadError) {
    return <div className="min-h-screen flex items-center justify-center">
      <p className="text-red-600">Error loading Google Maps. Please check your API key.</p>
    </div>;
  }

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">
      <p className="text-primary-600">Loading...</p>
    </div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-900 mb-6">
            Discover Your
            <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
              Perfect Workspace
            </span>
          </h1>
          <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
            Find the ideal cafe with reliable WiFi, laptop-friendly spaces, and the perfect ambiance for productivity.
          </p>

          {/* Search Bar */}
          <div className="card p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400 z-10 pointer-events-none" />
                <Autocomplete
                  onLoad={onLoad}
                  onPlaceChanged={onPlaceChanged}
                >
                  <input
                    type="text"
                    placeholder="Enter location or use current location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field pl-10"
                  />
                </Autocomplete>
              </div>
              <button
                onClick={handleSearch}
                disabled={loading}
                className="btn-primary flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <Search className="h-5 w-5" />
                <span>{loading ? 'Searching...' : 'Search Cafes'}</span>
              </button>
            </div>

            {/* Filters */}
            <div className="mt-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
              </button>

              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-primary-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.wifi}
                        onChange={(e) => setFilters({ ...filters, wifi: e.target.checked })}
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                      <Wifi className="h-4 w-4 text-primary-600" />
                      <span className="text-sm font-medium text-primary-900">Has WiFi</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.laptops}
                        onChange={(e) => setFilters({ ...filters, laptops: e.target.checked })}
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                      <Laptop className="h-4 w-4 text-primary-600" />
                      <span className="text-sm font-medium text-primary-900">Laptop Friendly</span>
                    </label>

                    <div>
                      <label className="text-sm font-medium text-primary-900 block mb-1">
                        Radius: {filters.radius}km
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={filters.radius}
                        onChange={(e) => setFilters({ ...filters, radius: parseInt(e.target.value) })}
                        className="w-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      {cafes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-display font-bold text-primary-900">
              Nearby Cafes
            </h2>
            {requiresSubscription && !user?.subscriptionStatus && (
              <div className="flex items-center space-x-2 text-sm text-primary-600">
                <Crown className="h-4 w-4" />
                <span>Subscribe to see all results</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>
        </section>
      )}

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <SubscriptionModal
          isOpen={showSubscriptionModal}
          onClose={() => setShowSubscriptionModal(false)}
        />
      )}

      <CafeDetail />
    </div>
  );
}
