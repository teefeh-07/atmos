import React, { useState } from 'react';
import { openContractCall } from '@stacks/connect';
import { uintCV, intCV, stringUtf8CV, stringAsciiCV, boolCV, PostConditionMode } from '@stacks/transactions';

const RegisterDataset = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [coords, setCoords] = useState({ altMin: 0, altMax: 0, lat: 0, long: 0 });

    const handleCoordChange = (field, value) => {
        setCoords(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const functionArgs = [
            stringUtf8CV(name),
            stringUtf8CV(description),
            stringUtf8CV("sensor-data"), // hardcoded for now
            uintCV(1625000000), // dummy date
            uintCV(coords.altMin),
            uintCV(coords.altMax),
            intCV(coords.lat),
            intCV(coords.long),
            stringAsciiCV("QmHash..."), // dummy hash
            boolCV(true)
        ];

        const options = {
            contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
            contractName: 'atmos',
            functionName: 'register-dataset',
            functionArgs,
            network: 'devnet', // or testnet
            postConditionMode: PostConditionMode.Allow,
            onFinish: (data) => {
                console.log('Transaction ID:', data.txId);
            },
        };

        openContractCall(options);
    };

    return (
        <div className="register-dataset">
            <h2>Register Dataset</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={100}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={500}
                    />
                </div>
                <div className="form-group">
                    <label>Altitude Min:</label>
                    <input type="number" value={coords.altMin} onChange={(e) => handleCoordChange('altMin', parseInt(e.target.value))} />
                </div>
                <div className="form-group">
                    <label>Altitude Max:</label>
                    <input type="number" value={coords.altMax} onChange={(e) => handleCoordChange('altMax', parseInt(e.target.value))} />
                </div>
                <div className="form-group">
                    <label>Latitude:</label>
                    <input type="number" value={coords.lat} onChange={(e) => handleCoordChange('lat', parseInt(e.target.value))} />
                </div>
                <div className="form-group">
                    <label>Longitude:</label>
                    <input type="number" value={coords.long} onChange={(e) => handleCoordChange('long', parseInt(e.target.value))} />
                </div>
                {/* Form fields */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterDataset;
