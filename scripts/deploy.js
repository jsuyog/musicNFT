const hre = require("hardhat");

async function main() {
  const musicNFT = await hre.ethers.getContractFactory("Lock");

  // Start deployment, returning a promise that resolves to a contract object
  const dmusicNFT = await musicNFT.deploy();

  // Wait for deployment to complete
  await dmusicNFT.deployed();

}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
}
);