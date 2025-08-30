import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';

export function ActiveRides() {
  const rides = [
    {
      id: 1,
      route: 'Downtown → Airport',
      time: '2:30 PM',
      passengers: 2,
      available: 1,
      status: 'active'
    },
    {
      id: 2,
      route: 'University → Mall',
      time: '5:45 PM',
      passengers: 1,
      available: 2,
      status: 'scheduled'
    }
  ];

  if (rides.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin size={24} className="text-gray-400" />
        </div>
        <p className="text-gray-500">No active rides</p>
        <p className="text-sm text-gray-400">Create your first ride to start earning</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {rides.map((ride) => (
        <div key={ride.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium text-gray-900">{ride.route}</div>
            <div className={`px-2 py-1 text-xs rounded-full ${
              ride.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {ride.status}
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{ride.time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={14} />
              <span>{ride.passengers}/{ride.passengers + ride.available}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}