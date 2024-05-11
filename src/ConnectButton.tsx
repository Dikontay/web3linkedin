// ConnectButton.jsx
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectButton = () => {
  const { connect, connected } = useWallet();

  return (
    <button onClick={() => connect()} disabled={connected}>
      {connected ? 'Connected' : 'Connect to My Wallet'}
    </button>
  );
};

export default ConnectButton;
