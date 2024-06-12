import logo from '@assets/logo.png';
import PropTypes from 'prop-types';
import useStore from '@/context/useStore';

import metamaskIcon from '@assets/metamaskIcon.png';
import useHandleConnection from '@/services/hooks/useHandleConnection';

import './navbar.scss';

const DisconnectButton = ({ onClick }) => (
    <div className="disconnect-button" onClick={onClick}>
        <img src={metamaskIcon} alt="logo" />
        <label>Disconnect</label>
    </div>
);

DisconnectButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

function Navbar() {
    const { isConnected } = useStore();

    const { handleConnection } = useHandleConnection();

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <label>Blockcity</label>
            </div>

            <div className="navbar-seccion">
                {isConnected && <DisconnectButton onClick={handleConnection} />}
            </div>
        </div>
    );
}

export default Navbar;
