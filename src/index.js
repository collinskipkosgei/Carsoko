import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/animations.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
