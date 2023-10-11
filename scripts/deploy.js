const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying from account:", deployer.address);

    const initialValue = "Hello, World!"; // Set the initial value here

    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy(initialValue);
    await simpleStorage.deployed();

    console.log("SimpleStorage deployed to:", simpleStorage.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });