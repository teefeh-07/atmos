import React, { useState } from 'react';

const RegisterDataset = () => {
    const [name, setName] = useState('');

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
                {/* Form fields */}
            </form>
        </div>
    );
};

export default RegisterDataset;
