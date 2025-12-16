import React, { useState } from 'react';

const RegisterDataset = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [coords, setCoords] = useState({ altMin: 0, altMax: 0, lat: 0, long: 0 });

    const handleCoordChange = (field, value) => {
        setCoords(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="register-dataset">
            <h2>Register Dataset</h2>
            <form>
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
            </form>
        </div>
    );
};

export default RegisterDataset;
