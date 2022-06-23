import { createContext, useState } from "react";
import { DarkTheme, Theme } from "../themes";

type ThemeContextProps = {
    theme: Theme;
    setTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:any) => {
    const [state, setState] = useState<Theme>(DarkTheme);

    const setTheme = () => {

    };

    return (
        <ThemeContext.Provider value={{
            theme: state,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
};