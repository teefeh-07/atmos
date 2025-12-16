import React, { useState } from 'react';

const RegisterDataset = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

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
                {/* Form fields */}
            </form>
        </div>
    );
};

export default RegisterDataset;
