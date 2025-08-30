import React, { useState, useEffect } from 'react';
import { X, Shield, Phone, MapPin, Clock } from 'lucide-react';

interface EmergencyAlertProps {
  onClose: () => void;
}

export function EmergencyAlert({ onClose }: EmergencyAlertProps) {
  const [alertSent, setAlertSent] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (!alertSent && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      sendEmergencyAlert();
    }
  }, [countdown, alertSent]);

  const sendEmergencyAlert = () => {
    setAlertSent(true);
    // Simulate emergency alert being sent
    console.log('Emergency alert sent with location and ride details');
  };

  const cancelAlert = () => {
    setCountdown(10);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-red-900 bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="bg-red-500 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield size={24} />
              <h3 className="text-xl font-bold">Emergency Alert</h3>
            </div>
            {!alertSent && (
              <button
                onClick={cancelAlert}
                className="p-2 text-red-100 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        <div className="p-6">
          {!alertSent ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-red-600">{countdown}</span>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Emergency alert will be sent in {countdown} seconds
                </h4>
                <p className="text-sm text-gray-600">
                  Your location, ride details, and emergency contacts will be notified immediately.
                </p>
              </div>

              <button
                onClick={cancelAlert}
                className="w-full py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel Alert
              </button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Shield size={32} className="text-green-600" />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Alert Sent Successfully</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Emergency services and your contacts have been notified with your current location.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin size={16} className="text-gray-500" />
                  <span className="text-gray-700">Location: 123 Main St, City</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-gray-700">Time: {new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={16} className="text-gray-500" />
                  <span className="text-gray-700">Emergency Services: Contacted</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
                  Call 911
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}