import React from 'react';
import { Bell, Shield, User } from 'lucide-react';

interface HeaderProps {
  onEmergency: () => void;
  onProfile: () => void;
}

export function Header({ onEmergency, onProfile }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">BP</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Bike Pooler</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Bell size={20} />
          </button>
          
          <button 
            onClick={onEmergency}
            className="p-2 text-red-600 hover:text-red-800 transition-colors"
            title="Emergency Alert"
          >
            <Shield size={20} />
          </button>
          
          <button 
            onClick={onProfile}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}