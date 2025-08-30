import React, { useState } from 'react';
import { X, MapPin, Search, Filter } from 'lucide-react';

interface RideSearchProps {
  onClose: () => void;
}

export function RideSearch({ onClose }: RideSearchProps) {
  const [searchData, setSearchData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: 1
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for rides:', searchData);
    // Handle search logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Search Rides</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSearch} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin size={16} className="inline mr-1" />
              Pickup Location
            </label>
            <input
              type="text"
              value={searchData.pickup}
              onChange={(e) => setSearchData(prev => ({ ...prev, pickup: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Where are you leaving from?"
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
              value={searchData.destination}
              onChange={(e) => setSearchData(prev => ({ ...prev, destination: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Where are you going?"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={searchData.date}
                onChange={(e) => setSearchData(prev => ({ ...prev, date: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="time"
                value={searchData.time}
                onChange={(e) => setSearchData(prev => ({ ...prev, time: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Passengers
            </label>
            <select
              value={searchData.passengers}
              onChange={(e) => setSearchData(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value={1}>1 passenger</option>
              <option value={2}>2 passengers</option>
              <option value={3}>3 passengers</option>
              <option value={4}>4 passengers</option>
            </select>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}