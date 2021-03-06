import { ethers } from "ethers"; // Ethers
import Onboard from "bnc-onboard"; // BNC Onboard
import { useState, useEffect } from "react"; // Local state management
import { createContainer } from "unstated-next"; // Global state provider

// Onboarding wallet providers
const wallets = [
  { walletName: "metamask" },
  {
    walletName: "walletConnect",
    infuraKey: process.env.NEXT_PUBLIC_INFURA_MAINNET,
  },
];

function useETHState() {
  const [address, setAddress] = useState(null); // User address
  const [onboard, setOnboard] = useState(null); // Onboard provider
  const [provider, setProvider] = useState(null); // Ethers provider
  const [rawAddress, setRawAddress] = useState(null); // Non-ENS address
  const [network, setNetowrk] = useState(null); // User Network
  const [signer, setSigner] = useState(null); // Ethers signer

  /**
   * Unlock wallet, store ethers provider and address
   */
  const unlock = async () => {
    // Enables wallet selection via BNC onboard
    await onboard.walletSelect();
    await onboard.walletCheck();
  };

  // --> Lifecycle: on mount
  useEffect(async () => {
    // Onboard provider
    const onboard = Onboard({
      // Ethereum network
      networkId: 1,
      // Hide Blocknative branding
      hideBranding: true,
      // Setup custom wallets for selection
      walletSelect: {
        heading: "Connect to Samsarah",
        description: "Please select a wallet to authenticate with Samsarah.",
        wallets: wallets,
      },
      // Track subscriptions
      subscriptions: {
        // On wallet update
        address: setAddress,
        network: setNetowrk,
        wallet: async (wallet) => {
          // If wallet provider exists
          if (wallet.provider) {
            // Collect ethers provider
            const provider = new ethers.providers.Web3Provider(wallet.provider);

            // Collect address
            const signer = await provider.getSigner();
            const address = await signer.getAddress();

            // Collect ENS name
            const ensName = await provider.lookupAddress(address);

            // Update provider, address, and raw address
            setProvider(provider);
            setRawAddress(address);
            setAddress(ensName ? ensName : address);
            setSigner(signer);
          } else {
            // Nullify data
            setProvider(null);
            setRawAddress(null);
            setAddress(null);
            setSigner(null);
          }
        },
      },
      // Force connect on walletCheck for WalletConnect
      walletCheck: [{ checkName: "connect" }],
    });

    // Update onboard
    setOnboard(onboard);
  }, []);

  return {
    onboard,
    provider,
    address,
    rawAddress,
    unlock,
    network,
    signer
  };
}

// Create unstated-next container
const state = createContainer(useETHState);
export default state;