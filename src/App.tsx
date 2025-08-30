import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { DriverDashboard } from './components/DriverDashboard';
import { PassengerDashboard } from './components/PassengerDashboard';
import { OnboardingFlow } from './components/OnboardingFlow';
import { EmergencyAlert } from './components/EmergencyAlert';
import { UserProvider } from './context/UserContext';

function App() {
  const [activeTab, setActiveTab] = useState<'driver' | 'passenger'>('passenger');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [emergencyActive, setEmergencyActive] = useState(false);

  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          onEmergency={() => setEmergencyActive(true)}
          onProfile={() => setShowOnboarding(true)}
        />
        
        <main className="pb-20">
          {activeTab === 'driver' ? (
            <DriverDashboard />
          ) : (
            <PassengerDashboard />
          )}
        </main>

        <Navigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {showOnboarding && (
          <OnboardingFlow onClose={() => setShowOnboarding(false)} />
        )}

        {emergencyActive && (
          <EmergencyAlert onClose={() => setEmergencyActive(false)} />
        )}
      </div>
    </UserProvider>
  );
}

export default App;