import React, { useState } from 'react';
import { X, MapPin, Clock, Users, DollarSign } from 'lucide-react';

interface CreateRideFormProps {
  onClose: () => void;
}

export function CreateRideForm({ onClose }: CreateRideFormProps) {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureTime: '',
    availableSeats: 1,
    suggestedPrice: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ride creation
    console.log('Creating ride:', formData);
    onClose();
  };

  const calculatePrice = () => {
    // Simple pricing calculation based on distance estimate
    const basePrice = 15; // Base price in dollars
    setFormData(prev => ({ ...prev, suggestedPrice: basePrice }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Create New Ride</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin size={16} className="inline mr-1" />
              Starting Location
            </label>
            <input
              type="text"
              value={formData.origin}
              onChange={(e) => setFormData(prev => ({ ...prev, origin: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter pickup location"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin size={16} className="inline mr-1" />
              Destination
            </label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter destination"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock size={16} className="inline mr-1" />
              Departure Time
            </label>
            <input
              type="datetime-local"
              value={formData.departureTime}
              onChange={(e) => setFormData(prev => ({ ...prev, departureTime: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users size={16} className="inline mr-1" />
              Available Seats
            </label>
            <select
              value={formData.availableSeats}
              onChange={(e) => setFormData(prev => ({ ...prev, availableSeats: parseInt(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value={1}>1 seat</option>
              <option value={2}>2 seats</option>
              <option value={3}>3 seats</option>
              <option value={4}>4 seats</option>
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                <DollarSign size={16} className="inline mr-1" />
                Price per Passenger
              </label>
              <button
                type="button"
                onClick={calculatePrice}
                className="text-xs text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Calculate
              </button>
            </div>
            <input
              type="number"
              value={formData.suggestedPrice}
              onChange={(e) => setFormData(prev => ({ ...prev, suggestedPrice: parseFloat(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Suggested: 50% of typical ride cost
            </p>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
            >
              Create Ride
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}