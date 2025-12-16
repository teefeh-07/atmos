import React from 'react';
import Header from './components/Header';
import RegisterDataset from './components/RegisterDataset';
import DatasetList from './components/DatasetList';

function App() {
    return (
        <div className="app-container" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <Header />
            <p>Welcome to the Atmos decentralized data registry.</p>
            <RegisterDataset />
            <DatasetList />
        </div>
    );
}

export default App;
