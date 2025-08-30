import React, { useState } from 'react';
import { RideSearch } from './RideSearch';
import { AvailableRides } from './AvailableRides';
import { BookingHistory } from './BookingHistory';
import { Search } from 'lucide-react';

export function PassengerDashboard() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Find a Ride</h2>
        <p className="text-gray-600">Travel smart, save money, make connections</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <button
          onClick={() => setShowSearch(true)}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
        >
          <Search size={20} />
          <span className="font-medium">Search for Rides</span>
        </button>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Bike Pooler?</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span>Save 50% on transportation costs</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Reduce carbon footprint</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span>Meet like-minded commuters</span>
          </li>
        </ul>
      </div>

      <AvailableRides />
      <BookingHistory />

      {showSearch && (
        <RideSearch onClose={() => setShowSearch(false)} />
      )}
    </div>
  );
}