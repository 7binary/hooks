import React, { useState, useContext } from 'react';

interface UserInfo {
  name: string;
  setName: (name: string) => void;
}

const UserContext = React.createContext<UserInfo | null>(null) as React.Context<UserInfo>;

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [name, setName] = useState('Ann');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
