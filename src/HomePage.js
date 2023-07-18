import { useWeb3Modal } from '@web3modal/react';
import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
// import Web3 from 'web3';

function HomePage() {
  const { open } = useWeb3Modal();
  const account = useAccount();
  
  const [walletAddress, setWalletAddress] = useState('');
  useEffect(() => {
    if (account) {
      setWalletAddress(account.address);
    
    }
  }, [account]);

  const handlesubmitforConnect = () => {
    open();
  };

  return (
    <div>
      
      <button onClick={handlesubmitforConnect}>Connect</button>
      <p>Wallet Address: {walletAddress}</p>
    </div>
  );
}

export default HomePage;
