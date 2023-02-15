import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// hardhat.config.ts
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  // networks: {
  //   ropsten: {
  //     url: process.env.ROPSTEN_URL || "",
  //     accounts: 
  //       process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
  //   }
  // }

};

export default config;

