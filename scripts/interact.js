// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const token_adress = "0x1D501a53CfeBd958Ff2aD225Fa1e86EC4a42E0e2"
    const token = await hre.ethers.getContractAt("MultiplyToken", token_adress);

    console.log("total supply: ", await token.totalSupply());

    await token.multiply(5);

    console.log("total supply: ", await token.totalSupply());


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
