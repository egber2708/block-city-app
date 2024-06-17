import { useState } from 'react';

import { Modal } from '@global';
import { CBTable } from '@sections';
import { AddCitizen } from '@sections';
import { ViewCitizen } from '@sections';

import useStore from '@/context/useStore';
import useGetCitizens from '@services/Metamask/useGetCitizens';
import useSubscribeRegisterEvent from '@services/Metamask/useSubscribeRegisterEvent';
import useModal from '@services/hooks/useModal';
import useErrorAlert from '@services/hooks/useErrorAlert';

import './dashboard.scss';

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

    const { errorDialog } = useErrorAlert();

    if (!loadingCitizens && error) {
        errorDialog(error, error);
    }

    const handleAddCitizen = () => {
        setModalTitle('Add Citizen');
        const tx = () => <AddCitizen web3={web3} account={account} actionCompleate={close} />;
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
