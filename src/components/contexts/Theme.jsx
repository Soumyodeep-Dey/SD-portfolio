import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create ThemeContext directly here
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        // Apply the theme mode to the document root
        document.documentElement.classList.toggle('dark', themeMode === 'dark');
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);

    useEffect(() => {
        const favicon = document.getElementById('favicon');
        favicon.href = themeMode === 'dark' ? '/public/Images/dark-icon.jpg' : '/public/Images/light-icon.jpg';
    }, [themeMode]);

    const lightTheme = () => setThemeMode('light');
    const darkTheme = () => setThemeMode('dark');

    return (
        <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
