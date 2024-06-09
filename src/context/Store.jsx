import { createContext } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext(null);

function StoreProvider({ children }) {
    return <StoreContext.Provider value={null}>{children}</StoreContext.Provider>;
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default StoreProvider;
