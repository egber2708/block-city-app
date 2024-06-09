import { useState } from 'react';
import './index.scss';
import HomePage from './Home/HomePage';

function App() {
    const [displayRoute, setDisplayRoute] = useState('home');

    return (
        <div className="app-page">
            <h1 style={{ position: 'fixed', top: '0', zIndex: '2', width: '100%', background: 'blue' }}>Hello World</h1>
            <div className="page-container">
                <HomePage />
            </div>
        </div>
    );
}

export default App;
