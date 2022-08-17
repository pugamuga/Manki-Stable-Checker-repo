import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/759536ec958243cd80ab8dc32fb4812c"
);

const USDTaddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // address of erc20 (usdt here)
const USDCaddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const DAIaddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const BUSDaddress = "0x4Fabb145d64652a948d72533023f6E7A623C7C53";

const yourAddress = "0x2dc928f505c152C362De746d90700a623ED49Ed3"; // your address

const erc20ABI = [
  "function name() view returns(string)",
  "function symbol() view returns(string)",
  "function decimals() view returns(uint)",

  "function balanceOf(address) view returns (uint)",

  "function transfer(address to, uint amount)",

  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const erc20ContractUSDT = new ethers.Contract(USDTaddress, erc20ABI, provider);
const erc20ContractUSDC = new ethers.Contract(USDCaddress, erc20ABI, provider);
const erc20ContractDAI = new ethers.Contract(DAIaddress, erc20ABI, provider);
const erc20ContractBUSD = new ethers.Contract(BUSDaddress, erc20ABI, provider);

const allAddresses = [
  erc20ContractUSDT,
  erc20ContractUSDC,
  erc20ContractDAI,
  erc20ContractBUSD,
];

const mainAmount = async (number = 0) => {
  const balanceOfme = await allAddresses[number].balanceOf(yourAddress);
  const decimals = await allAddresses[number].decimals();
  const amount = ethers.utils.formatUnits(balanceOfme, decimals);

  const finalAmount = Math.floor(amount * 100) / 100;
  console.log(finalAmount);
  return finalAmount;
};

const mainSumbol = async (number = 0) => {
  const nameToken = await allAddresses[number].name();
  const symbol = await allAddresses[number].symbol();
  console.log(symbol);
  return nameToken;
};

export { mainAmount, mainSumbol };
