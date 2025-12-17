import React, { useState, useEffect } from 'react';
import { showConnect, AppConfig, UserSession } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

const ConnectWallet = () => {
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        if (userSession.isUserSignedIn()) {
            setUserData(userSession.loadUserData());
        } else if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then(userData => {
                setUserData(userData);
            });
        }
    }, []);

    const authenticate = () => {
        showConnect({
            appDetails: {
                name: 'Atmos Data Registry',
                icon: window.location.origin + '/vite.svg',
            },
            redirectTo: '/',
            onFinish: () => {
                const userData = userSession.loadUserData();
                setUserData(userData);
            },
            userSession,
        });
    };

    const disconnect = () => {
        userSession.signUserOut("/");
        setUserData(null);
    };

    if (userData) {
        return (
            <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
                <p>Connected as: <strong>{userData.profile.stxAddress.testnet}</strong></p>
                <button onClick={disconnect}>Disconnect</button>
            </div>
        );
    }

    return (
        <button onClick={authenticate} style={{ padding: '10px 20px', fontSize: '16px', background: '#5546FF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Connect Wallet
        </button>
    );
};

export default ConnectWallet;
