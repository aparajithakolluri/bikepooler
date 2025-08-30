import React, { useState } from 'react';
import { CreateRideForm } from './CreateRideForm';
import { ActiveRides } from './ActiveRides';
import { DriverStats } from './DriverStats';
import { Plus } from 'lucide-react';

export function DriverDashboard() {
  const [showCreateRide, setShowCreateRide] = useState(false);

  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Driver Dashboard</h2>
        <p className="text-gray-600">Create rides and earn while helping the community</p>
      </div>

      <DriverStats />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Your Rides</h3>
          <button
            onClick={() => setShowCreateRide(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus size={18} />
            <span>Create Ride</span>
          </button>
        </div>
        
        <ActiveRides />
      </div>

      {showCreateRide && (
        <CreateRideForm onClose={() => setShowCreateRide(false)} />
      )}
    </div>
  );
}