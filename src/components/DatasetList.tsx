import React, { useEffect, useState } from 'react';
import { StacksMocknet } from '@stacks/network';
import { callReadOnlyFunction, cvToJSON, uintCV } from '@stacks/transactions';

interface Dataset {
    name: { value: string };
    description: { value: string };
    "data-type": { value: string };
    "altitude-min": { value: string };
    "altitude-max": { value: string };
    latitude: { value: string };
    longitude: { value: string };
    "ipfs-hash": { value: string };
    "is-public": { value: boolean };
    owner: { value: string };
}

const DatasetList = () => {
    const [datasets, setDatasets] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Using Mocknet for local development
    const network = new StacksMocknet();
    const contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
    const contractName = 'atmos';

    useEffect(() => {
        fetchDatasets();
    }, []);

    const fetchDatasets = async () => {
        setLoading(true);
        try {
            // First get the count
            const countResult = await callReadOnlyFunction({
                contractAddress,
                contractName,
                functionName: 'get-dataset-count',
                functionArgs: [],
                senderAddress: contractAddress,
                network,
            });

            const count = parseInt(cvToJSON(countResult).value);
            console.log('Dataset count:', count);

            const items = [];
            // Fetch each dataset (naive approach, in production use an indexer)
            for (let i = 1; i <= count; i++) {
                const datasetResult = await callReadOnlyFunction({
                    contractAddress,
                    contractName,
                    functionName: 'get-dataset',
                    functionArgs: [uintCV(i)],
                    senderAddress: contractAddress,
                    network,
                });
                const dataset = cvToJSON(datasetResult).value.value; // unwrapping (ok ...)
                if (dataset) {
                    items.push({ id: i, ...dataset });
                }
            }
            setDatasets(items);
        } catch (error) {
            console.error("Error fetching datasets:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading datasets...</div>;

    return (
        <div style={{ marginTop: '40px' }}>
            <h2>Available Datasets</h2>
            {datasets.length === 0 ? <p>No datasets found.</p> : (
                <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    {datasets.map((ds) => (
                        <div key={ds.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                            <h3>{ds.name.value}</h3>
                            <p><strong>Type:</strong> {ds['data-type'].value}</p>
                            <p>{ds.description.value}</p>
                            <div style={{ fontSize: '0.9em', color: '#666' }}>
                                <p>Altitude: {ds['altitude-min'].value} - {ds['altitude-max'].value}</p>
                                <p>Location: {ds.latitude.value}, {ds.longitude.value}</p>
                                <p>Owner: {ds.owner.value}</p>
                            </div>
                            {ds['is-public'].value ? <span style={{ color: 'green' }}>Public</span> : <span style={{ color: 'red' }}>Private</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DatasetList;
