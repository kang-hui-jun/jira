"use client";

import React, { ReactNode, createContext, useState } from "react";

type User = {
  id: number;
};

export const AuthContext = createContext<
  { user: User | null; setUser: (user: User | null) => void } | undefined
>(undefined);

const AppStore = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({id: 1});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppStore;

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
