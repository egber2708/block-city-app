//import React from 'react';
import ReactDOM from 'react-dom/client';

import StoreProvider from '@/context/Store.jsx';

import '@styles/styles.scss';
import App from '@pages';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <App />
    </StoreProvider>
);
