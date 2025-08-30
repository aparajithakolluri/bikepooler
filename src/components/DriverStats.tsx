import React from 'react';
import { TrendingUp, Star, DollarSign, Users } from 'lucide-react';

export function DriverStats() {
  const stats = [
    { label: 'Total Earnings', value: '$284', icon: DollarSign, color: 'text-green-600' },
    { label: 'Completed Rides', value: '23', icon: Users, color: 'text-blue-600' },
    { label: 'Rating', value: '4.8', icon: Star, color: 'text-yellow-600' },
    { label: 'This Month', value: '+12%', icon: TrendingUp, color: 'text-emerald-600' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}