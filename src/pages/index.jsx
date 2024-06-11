import { useState } from 'react';
import './index.scss';
import HomePage from './Home/HomePage';
import Navbar from '../components/Navbar/Navbar';
import useStore from '../context/useStore';
import Dashboard from './Dashboard/Dashboard';
import Loader from '../components/Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [loading, setLoading] = useState(false);

    const { isConnected, connectWallet, disconnectWallet } = useStore();

    const handleConnection = async () => {
        if (isConnected) return await disconnectWallet();
        setLoading(true);
        const { error } = await connectWallet();
        setLoading(false);
        if (error) return console.log(error);
        return console.log('Wallet Connected');
    };

    const getPage = (connected) => {
        if (connected) return <Dashboard />;
        return <HomePage onConnect={handleConnection} />;
    };

    if (loading) return <Loader message="Conneting Wallet" />;

    return (
        <div className="app-page">
            <Navbar onDisconnect={handleConnection} />
            <div className="page-container">{getPage(isConnected)}</div>
            <ToastContainer />
        </div>
    );
}

export default App;
