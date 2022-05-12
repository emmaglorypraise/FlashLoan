require("dotenv").config({ path: ".env" });

// Mainnet DAI Address
const DAI = process.env.DAI;
// Random user's address that happens to have a lot of DAI on Polygon Mainnet
const DAI_WHALE = process.env.DAI_WHALE;

// Mainnet Pool contract address
const POOL_ADDRESS_PROVIDER = process.env.POOL_ADDRESS_PROVIDER;
module.exports = {
  DAI,
  DAI_WHALE,
  POOL_ADDRESS_PROVIDER,
};