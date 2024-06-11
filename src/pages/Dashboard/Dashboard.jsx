import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import useModal from '../../services/hooks/useModal';

import './dashboard.scss';
import CBTable from '../../components/CBTable/CBTable';
import AddCitizen from '../../components/AddCitizen/AddCitizen';
import ViewCitizen from '../../components/ViewCitizen/ViewCitizen';
import useStore from '../../context/useStore';
import useGetCitizens from '../../services/Metamask/useGetCitizens';
import { toast } from 'react-toastify';
import useSubscribeRegisterEvent from '../../services/Metamask/useSubscribeRegisterEvent';

const Dashboard = () => {
    const [modalTitle, setModalTitle] = useState('');
    const { isOpen, open, close, modalContent } = useModal();

    const { web3, account } = useStore();

    const {
        loading: loadingCitizens,
        error,
        citizens
    } = useGetCitizens({
        web3
    });

    const { transactionsNewEvents } = useSubscribeRegisterEvent({ web3 });

    console.log(
        '🚀 ~ Dashboard ~ transactionsNewEvents:',
        transactionsNewEvents
    );

    if (!loadingCitizens && error) {
        toast.error(error);
    }

    const handleAddCitizen = () => {
        setModalTitle('Add Citizen');
        const tx = () => <AddCitizen web3={web3} account={account} />;
        open(tx());
    };

    const handleViewCitizen = (citizen) => {
        setModalTitle('Blockcity Citizen');
        const tx = (citizen) => <ViewCitizen web3={web3} citizen={citizen} />;
        open(tx(citizen));
    };

    return (
        <div className="dashboard-page">
            <div className="dashboar-container">
                <div className="dashboard-header">
                    <div className="dashboard-header-title">
                        <h1>BLOCKCITY TRACKER</h1>
                    </div>
                    <div className="dashboard-header-actions">
                        <button onClick={handleAddCitizen}>Add Citizen</button>
                    </div>
                </div>
                <div className="dashboard-body">
                    <CBTable
                        data={[...transactionsNewEvents, ...citizens]}
                        showDetail={handleViewCitizen}
                        loading={loadingCitizens}
                    />
                </div>
            </div>

            <Modal
                key={'modal-loader'}
                title={modalTitle}
                open={isOpen}
                onClose={close}
                content={modalContent}
                closeOnOverlay={false}
            />
        </div>
    );
};

export default Dashboard;
