import useStore from '@/context/useStore';

import { Navbar } from '@sections';

import Dashboard from '@pages/Dashboard/Dashboard';
import HomePage from '@pages/Home/HomePage';

import './index.scss';

function App() {
    const { isConnected } = useStore();

    const getPageRoute = (connected) => {
        if (connected) return <Dashboard />;
        return <HomePage />;
    };

    return (
        <div className="app-page">
            <Navbar />
            <div className="page-container">{getPageRoute(isConnected)}</div>
        </div>
    );
}

export default App;
