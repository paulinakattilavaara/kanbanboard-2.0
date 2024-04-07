import { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {

    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

    const changeBackgroundColor = (color) => {
      setBackgroundColor(color);
    };

    return (
        <BackgroundContext.Provider value={{ backgroundColor, changeBackgroundColor }}>
          {children}
        </BackgroundContext.Provider>
      );
    };
    
    export default BackgroundContext;