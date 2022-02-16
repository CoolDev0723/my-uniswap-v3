import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

const {abi, bytecode} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");

task("deploy:UniswapV3Factory")
    .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const factoryFactory = await ethers.getContractFactory(abi, bytecode);
    const factory = await factoryFactory.deploy();
    console.log("Greeter deployed to: ", factory.address);
  });
