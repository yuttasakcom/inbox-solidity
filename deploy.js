const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "cargo prison arrange guard tray swear garbage stool minor sister choose base",
  "https://rinkeby.infura.io/I3fvzZn0oRpnnMIboXFZ"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("accounts", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("result: ", result);
};

deploy();
