import React, { useState } from 'react';
import { X, User, Shield, CreditCard, CheckCircle } from 'lucide-react';

interface OnboardingFlowProps {
  onClose: () => void;
}

export function OnboardingFlow({ onClose }: OnboardingFlowProps) {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'driver' | 'passenger' | null>(null);

  const steps = [
    { id: 1, title: 'Choose Your Role', icon: User },
    { id: 2, title: 'Personal Information', icon: User },
    { id: 3, title: 'Safety Verification', icon: Shield },
    { id: 4, title: 'Payment Setup', icon: CreditCard },
    { id: 5, title: 'Welcome!', icon: CheckCircle }
  ];

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Getting Started</h3>
            <p className="text-sm text-gray-600">Step {step} of {steps.length}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {steps.map((s, index) => (
                <div
                  key={s.id}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <s.icon size={16} />
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  How would you like to use Bike Pooler?
                </h4>
                <p className="text-gray-600">You can always switch between roles later</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setUserType('passenger')}
                  className={`w-full p-4 rounded-lg border-2 transition-colors ${
                    userType === 'passenger'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-left">
                    <div className="font-semibold mb-1">I want to find rides</div>
                    <div className="text-sm text-gray-600">
                      Save money on transportation and meet new people
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setUserType('driver')}
                  className={`w-full p-4 rounded-lg border-2 transition-colors ${
                    userType === 'driver'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-left">
                    <div className="font-semibold mb-1">I want to offer rides</div>
                    <div className="text-sm text-gray-600">
                      Earn money by sharing your daily commute
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="your.email@example.com"
                />
              </div>

              {userType === 'driver' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Information</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., 2020 Toyota Camry, Blue"
                  />
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Safety Verification</h4>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield size={20} className="text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-900 mb-1">Identity Verification</h5>
                    <p className="text-sm text-blue-700">
                      We require photo ID verification to ensure the safety of our community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-400 transition-colors">
                  <div className="text-center">
                    <div className="font-medium text-gray-700 mb-1">Upload Photo ID</div>
                    <div className="text-sm text-gray-500">Driver's license or passport</div>
                  </div>
                </button>

                {userType === 'driver' && (
                  <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-400 transition-colors">
                    <div className="text-center">
                      <div className="font-medium text-gray-700 mb-1">Vehicle Registration</div>
                      <div className="text-sm text-gray-500">Proof of vehicle ownership</div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Setup</h4>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <button className="w-full p-4 border border-gray-300 rounded-lg text-left hover:border-emerald-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span>Add Credit/Debit Card</span>
                      <span className="text-emerald-600">+</span>
                    </div>
                  </button>
                </div>

                {userType === 'driver' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payout Method</label>
                    <button className="w-full p-4 border border-gray-300 rounded-lg text-left hover:border-emerald-400 transition-colors">
                      <div className="flex items-center justify-between">
                        <span>Link Bank Account</span>
                        <span className="text-emerald-600">+</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield size={20} className="text-gray-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Secure Payments</h5>
                    <p className="text-sm text-gray-600">
                      All transactions are encrypted and processed securely through our payment partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} className="text-white" />
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Welcome to Bike Pooler!</h4>
                <p className="text-gray-600">
                  You're all set to start {userType === 'driver' ? 'offering rides' : 'finding rides'} and 
                  contributing to a more sustainable transportation future.
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h5 className="font-medium text-emerald-900 mb-2">What's Next?</h5>
                <ul className="text-sm text-emerald-700 space-y-1">
                  {userType === 'driver' ? (
                    <>
                      <li>• Create your first ride</li>
                      <li>• Set your preferred routes</li>
                      <li>• Start earning with every trip</li>
                    </>
                  ) : (
                    <>
                      <li>• Search for available rides</li>
                      <li>• Book your first trip</li>
                      <li>• Save money on every journey</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex space-x-3 mt-8">
            {step > 1 && step < 5 && (
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            
            {step < 5 ? (
              <button
                onClick={nextStep}
                disabled={step === 1 && !userType}
                className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                {step === 1 ? 'Continue' : 'Next'}
              </button>
            ) : (
              <button
                onClick={onClose}
                className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                Start Using Bike Pooler
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}