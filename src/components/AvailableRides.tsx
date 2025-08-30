import React from 'react';
import { Clock, Users, Star, DollarSign } from 'lucide-react';

export function AvailableRides() {
  const rides = [
    {
      id: 1,
      driver: 'Sarah M.',
      rating: 4.9,
      route: 'Downtown → Airport',
      time: '2:30 PM',
      price: 12,
      available: 2,
      verified: true
    },
    {
      id: 2,
      driver: 'Mike R.',
      rating: 4.7,
      route: 'University → Mall',
      time: '5:45 PM',
      price: 8,
      available: 1,
      verified: true
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Rides</h3>
      
      {rides.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No rides available</p>
          <p className="text-sm text-gray-400">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="space-y-4">
          {rides.map((ride) => (
            <div key={ride.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-emerald-700">
                      {ride.driver.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{ride.driver}</span>
                      {ride.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{ride.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-emerald-600 font-bold">
                    <DollarSign size={16} />
                    <span>{ride.price}</span>
                  </div>
                  <div className="text-xs text-gray-500">per person</div>
                </div>
              </div>

              <div className="mb-3">
                <div className="font-medium text-gray-900 mb-1">{ride.route}</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{ride.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{ride.available} seats available</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-colors">
                Book This Ride
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}