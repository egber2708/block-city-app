import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import './navbar.scss';
import useStore from '../../context/useStore';

function Navbar({ onDisconnect }) {
    const { isConnected } = useStore();

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <label>Blockcity</label>
            </div>
            <div
                className={`navbar-seccion ${
                    isConnected ? '' : 'hiden-navbar'
                }`}
                onClick={onDisconnect}
            >
                x
            </div>
        </div>
    );
}

Navbar.propTypes = {
    onDisconnect: PropTypes.func.isRequired
};

export default Navbar;
