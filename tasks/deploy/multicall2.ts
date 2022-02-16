import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

const {abi, bytecode} = require("../../artifacts/contracts/MultiCall2.sol/MultiCall2.json");

task("deploy:MultiCall2")
    .setAction(async function (taskArguments: TaskArguments, { ethers }) {
        const factoryFactory = await ethers.getContractFactory(abi, bytecode);
        const factory = await factoryFactory.deploy();
        console.log("Greeter deployed to: ", factory.address);
    });
