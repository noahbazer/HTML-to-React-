import React from 'react';
import { createRoot } from 'react-dom';
import { App } from './App.tsx';


const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);