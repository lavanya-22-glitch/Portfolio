// src/hooks/useTheme.js
import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove the old class and add the new one
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    
    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}