import React from 'react';
import ConnectWallet from './components/ConnectWallet';
import RegisterDataset from './components/RegisterDataset';
import DatasetList from './components/DatasetList';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Atmos Data Registry</h1>
                <ConnectWallet />
            </header>
            <main>
                <RegisterDataset />
                <DatasetList />
            </main>
        </div>
    );
}

export default App;
