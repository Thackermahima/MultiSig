require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env" });

/** @type import('hardhat/config').HardhatUserConfig */
const pk = process.env.REACT_APP_PRIVATE_KEY;
const polygonURL = process.env.POLYGON_URL;
module.exports = {
  solidity: "0.8.18",
  networks : {
  mumbai : {
    url : polygonURL,
    accounts : [pk],
  }
  },
};
