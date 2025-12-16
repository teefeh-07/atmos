import React from 'react';
import ConnectWallet from './components/ConnectWallet';
import RegisterDataset from './components/RegisterDataset';

function App() {
    return (
        <div className="app-container" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Atmos Data Registry</h1>
                <ConnectWallet />
            </header>
            <p>Welcome to the Atmos decentralized data registry.</p>
            <RegisterDataset />
        </div>
    );
}

export default App;
