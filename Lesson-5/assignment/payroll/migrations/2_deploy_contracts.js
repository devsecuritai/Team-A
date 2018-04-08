var SafeMath = artifacts.require("./SafeMath.sol");
var Payroll = artifacts.require("./Payroll.sol");
var Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(Ownable);

  deployer.link(SafeMath, Payroll);
  deployer.link(Ownable, Payroll);
  deployer.deploy(Payroll);
};