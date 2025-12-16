import React, { useState } from 'react';
import { showConnect, AppConfig, UserSession } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

const ConnectWallet = () => {
    const [userData, setUserData] = useState(null);

    const handleConnect = () => {
        // logic will be implemented in next branch
        console.log("Connect clicked");
    };

    if (userData) {
        return (
            <div className="connect-wallet">
                <p>Connected: {userData.profile.stxAddress.mainnet}</p>
            </div>
        )
    }

    return (
        <div className="connect-wallet">
            <button onClick={handleConnect} className="btn-connect">
                Connect Wallet
            </button>
        </div>
    );
};

export default ConnectWallet;
