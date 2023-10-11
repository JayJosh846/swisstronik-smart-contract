require('dotenv').config();
const { Web3 } = require('web3');

// Initialize Web3 for Mumbai and Swisstronik testnets
const mumbaiProvider = process.env.MUMBAI_RPC;
const swisstronikProvider = process.env.SWISSTRONIK_RPC;
const web3Mumbai = new Web3(mumbaiProvider);
const web3Swisstronik = new Web3(swisstronikProvider);

// Contract address on Mumbai and Swisstronik
const mumbaiContractAddress = process.env.MUMBAI_CA;
const swisstronikContractAddress = process.env.SWISSTRONIK_CA;

// Function to retrieve the state variable
async function getStateVariable(web3, contractAddress) {
    const slot = 0; // Slot#0 for the state variable

    const data = await web3.eth.getStorageAt(contractAddress, slot);
    console.log(`Value at slot ${slot} in the contract at address ${contractAddress}: ${data}`);
}

// Call the function for both testnets
getStateVariable(web3Mumbai, mumbaiContractAddress);
getStateVariable(web3Swisstronik, swisstronikContractAddress);
