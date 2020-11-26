import { createContext, useState } from "react";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [cartCounter, setCartCounter] = useState(0);
  return (
    <HeaderContext.Provider
      value={{
        cartCounter,
        setCartCounter,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderProvider };
