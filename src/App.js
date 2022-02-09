import './App.css';

import { useEffect, useState, React } from 'react';
// import {ethers } from 'ethers';
import Game from './Game.js';

function App() {
    const [currentAccount, setCurrentAccount] = useState(null);

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have Metamask Installed");
            return;
        } else {
            console.log("Wallet exists! Ready to go!");
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account: ", account);
            setCurrentAccount(account);
        } else {
            console.log("No authorized account found");
        }
    }
    const connectWalletHandler = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Please Install Metamask");
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Found an account! Address: ", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err);
        }
    }

    // const mintHandler = async() => {
    //   try {
    //     const {ethereum} = window;
    //     if (ethereum) {
    //       const provider = new ethers.providers.Web3Provider(ethereum);
    //       const signer = provider.getSigner();
    //       try {
    //         const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    //         // setCurrentAccount(accounts[0]);

    //         console.log("Initialize Minting");
    //         // testnet
    //         const web3 = new ethers('https://data-seed-prebsc-1-s1.binance.org:8545'); 
    //         const bull = new EtherscanProvider.Contract(bullContractAddress, bullABI, signer);
    //         const tokenName = await bull.name();
    //         const tokenSymbol = await bull.tokenSymbol();
    //       } catch(err) {
    //         console.log(err);
    //       }
    //     }
    //   } catch(err) {
    //     console.log(err);
    //   }
    // Minting the token on account
    // const smartContract = new EtherscanProvider.Contract(bullContractAddress, bullABI, signer);
    // const tokenName = await smartContract.name();
    // const tokenSymbol = await smartContract.symbol();
    // const tokenSupply = await smartContract.totalSupply();
    // console.log(tokenName)
    // console.log(tokenSymbol)
    // console.log(tokenSupply)
    // const contracttxn = await smartContract.mint("0x614254759C4b3D076EBb568FBB095bDa1D9e258D",1000000);
    // setTxn([contracttxn])
    // let bullTxn = await bullContract.
    // let nftTxn = await nftContract.mintNFTs(1, {value:ethers.utils.parseEther("0.01")});
    // console.log("Mining...please wait");
    // await nftTxn.wait();
    // console.log("Mined, see transaction: https://rinkeby.etherscan.io.tx/${nftTxn.hash}");
    // }

    const connectWalletButton = () => {
        return (
            <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>Connect Wallet</button>
        );
    }

    // const contractButton = () => {
    //     return (
    //         <button onClick={contractHandler} className='cta-button contract-button'>Pay BNB</button>
    //     )
    // }

    // const mintButton = () => {
    //   return (
    //     <button onClick={mintHandler} className='cta-button mint-button'>Mint 1 Token</button>
    //   )
    // }

    useEffect(() => {
        checkWalletIsConnected();
    }, [])

    return (
        <div className='main-app'>
            <h1>Connect to Metamask && Sudoku Demo!!</h1>
            <div>
                {currentAccount ? <Game /> : connectWalletButton()}
            </div>
        </div>
    )
}

export default App;
