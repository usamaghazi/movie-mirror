import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSelector } from 'react-redux';


const StatusBarController = () => {
  const { isDark } = useSelector((state: any) => state.theme);
  
  return (
    <StatusBar 
      style={isDark ? 'light' : 'dark'} 
    />
  );
}

export default StatusBarController