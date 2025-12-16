import React, { useState } from 'react';
import { openContractCall } from '@stacks/connect';
import { stringUtf8CV, uintCV, intCV, boolCV, stringAsciiCV } from '@stacks/transactions';
import { userSession } from './ConnectWallet';

const RegisterDataset = () => {
    const [name, setName] = useState('');
    const [descripton, setDescription] = useState('');
    const [dataType, setDataType] = useState('');
    const [minAlt, setMinAlt] = useState(0);
    const [maxAlt, setMaxAlt] = useState(0);
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [ipfsHash, setIpfsHash] = useState('');
    const [isPublic, setIsPublic] = useState(true);

    const handleRegister = async () => {
        if (!userSession.isUserSignedIn()) {
            alert("Please connect wallet first");
            return;
        }

        const functionArgs = [
            stringUtf8CV(name),
            stringUtf8CV(descripton),
            stringUtf8CV(dataType),
            uintCV(Math.floor(Date.now() / 1000)), // Unix timestamp
            uintCV(minAlt),
            uintCV(maxAlt),
            intCV(lat),
            intCV(long),
            stringAsciiCV(ipfsHash),
            boolCV(isPublic)
        ];

        // Assuming standard devnet address for local dev, or user can configure
        const contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
        const contractName = 'atmos';

        await openContractCall({
            contractAddress,
            contractName,
            functionName: 'register-dataset',
            functionArgs,
            onFinish: data => {
                console.log('Transaction ID:', data.txId);
                alert(`Transaction broadcasted: ${data.txId}`);
            },
            onCancel: () => {
                console.log('Transaction cancelled');
            },
        });
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '20px' }}>
            <h2>Register Dataset</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <textarea placeholder="Description" value={descripton} onChange={e => setDescription(e.target.value)} />
                <input placeholder="Data Type" value={dataType} onChange={e => setDataType(e.target.value)} />

                <label>Min Altitude: <input type="number" value={minAlt} onChange={e => setMinAlt(parseInt(e.target.value))} /></label>
                <label>Max Altitude: <input type="number" value={maxAlt} onChange={e => setMaxAlt(parseInt(e.target.value))} /></label>
                <label>Latitude (microdegrees): <input type="number" value={lat} onChange={e => setLat(parseInt(e.target.value))} /></label>
                <label>Longitude (microdegrees): <input type="number" value={long} onChange={e => setLong(parseInt(e.target.value))} /></label>

                <input placeholder="IPFS Hash" value={ipfsHash} onChange={e => setIpfsHash(e.target.value)} />
                <label>
                    Is Public?
                    <input type="checkbox" checked={isPublic} onChange={e => setIsPublic(e.target.checked)} />
                </label>

                <button onClick={handleRegister} style={{ marginTop: '10px' }}>Register Dataset</button>
            </div>
        </div>
    );
};

export default RegisterDataset;
