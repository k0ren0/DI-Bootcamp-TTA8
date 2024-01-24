import './App.css'; // Assuming you have an App.css file for styles
import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext"; // Adjust the path if necessary

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = theme;
  }, [theme]); // This effect runs when the theme changes

  return (
    <div className={`App`}>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
      {/* Other components here */}
    </div>
  );
}

export default App;
