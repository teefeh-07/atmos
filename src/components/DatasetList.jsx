import React, { useState, useEffect } from 'react';
import { callReadOnlyFunction, uintCV } from '@stacks/transactions';

const DatasetList = () => {
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const fetchDatasets = async () => {
            // For demo, just try to fetch dataset-id 1
            // In real app, fetch count first
            const options = {
                contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
                contractName: 'atmos',
                functionName: 'get-dataset',
                functionArgs: [uintCV(1)],
                network: 'devnet',
                senderAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
            };

            try {
                const result = await callReadOnlyFunction(options);
                // Parse result (simplification)
                if (result.value) {
                    // Assuming result is (ok (tuple ...)) or (err ...)
                    // logic to parse would go here. 
                    // For now, let's just log it and set dummy data if actual fetch fails or is complex to parse without helper
                    console.log(result);
                    // setDatasets([{id: 1, name: "Fetched Data", description: "From Chain"}]);
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchDatasets();
    }, []);

    return (
        <div className="dataset-list">
            <h2>Available Datasets</h2>
            <div className="list-container">
                {datasets.length === 0 ? <p>No datasets found.</p> : null}
                {datasets.map((dataset) => (
                    <div key={dataset.id} className="dataset-card">
                        <h3>{dataset.name}</h3>
                        <p>{dataset.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DatasetList;
