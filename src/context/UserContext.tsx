import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'driver' | 'passenger';
  verified: boolean;
  rating: number;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isDriver: boolean;
  isPassenger: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    type: 'passenger',
    verified: true,
    rating: 4.8
  });

  const value: UserContextType = {
    user,
    setUser,
    isDriver: user?.type === 'driver',
    isPassenger: user?.type === 'passenger'
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}