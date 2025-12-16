import React from 'react';
import ConnectWallet from './ConnectWallet';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Atmos Data Registry</h1>
            <ConnectWallet />
        </header>
    );
};

export default Header;
