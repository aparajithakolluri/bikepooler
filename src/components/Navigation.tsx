import React from 'react';
import { Car, Users } from 'lucide-react';

interface NavigationProps {
  activeTab: 'driver' | 'passenger';
  onTabChange: (tab: 'driver' | 'passenger') => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4">
        <div className="flex">
          <button
            onClick={() => onTabChange('passenger')}
            className={`flex-1 py-4 px-6 flex flex-col items-center space-y-1 transition-colors ${
              activeTab === 'passenger'
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Users size={24} />
            <span className="text-xs font-medium">Find Ride</span>
          </button>
          
          <button
            onClick={() => onTabChange('driver')}
            className={`flex-1 py-4 px-6 flex flex-col items-center space-y-1 transition-colors ${
              activeTab === 'driver'
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Car size={24} />
            <span className="text-xs font-medium">Offer Ride</span>
          </button>
        </div>
      </div>
    </nav>
  );
}