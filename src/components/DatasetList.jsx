import React, { useState } from 'react';

const DatasetList = () => {
    const [datasets, setDatasets] = useState([]);

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
