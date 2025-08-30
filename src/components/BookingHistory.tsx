import React from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

export function BookingHistory() {
  const bookings = [
    {
      id: 1,
      driver: 'John D.',
      route: 'Home → Office',
      date: 'Today',
      price: 10,
      status: 'completed',
      rating: 5
    },
    {
      id: 2,
      driver: 'Lisa K.',
      route: 'Mall → University',
      date: 'Yesterday',
      price: 7,
      status: 'completed',
      rating: 4
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Rides</h3>
      
      {bookings.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock size={24} className="text-gray-400" />
          </div>
          <p className="text-gray-500">No ride history</p>
        </div>
      ) : (
        <div className="space-y-3">
          {bookings.map((booking) => (
            <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-gray-900">{booking.route}</div>
                <div className="text-emerald-600 font-semibold">${booking.price}</div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>with {booking.driver}</span>
                  <span>•</span>
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span>{booking.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}