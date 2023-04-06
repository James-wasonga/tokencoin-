const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const GreetWorld = artifacts.require("GreetWorld");
const Rectangle = artifacts.require("Rectangle");
const web3clubtoken = artifacts.require("web3clubtoken");


module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(GreetWorld);
  deployer.deploy(Rectangle);
  deployer.deploy(web3clubtoken);
};
