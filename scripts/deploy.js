// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 
  const owners = [ "0xa5E4645137a9024bA06Ad7d65513E4a08cB9131f",
                   "0x1a5516BeDB0CaAB297c8cecaBdFe96325469EF2d",
                    "0x49c85E433896351b88d7B92b890747DE98768487"
  ];
  const required = 2; // Number of required owner signatures
  const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
  const multiSigWallet = await MultiSigWallet.deploy(owners, required);
  await multiSigWallet.deployed();

  console.log(
    `MultiSigWallet address ${multiSigWallet.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
