import { useState } from "react";
import { ethers } from "ethers";
import SyncLoader from "react-spinners/SyncLoader";

const EtherComponent = () => {
  const [data, setData] = useState(null);
  const [inputData, setInputData] = useState("");
  const [state, setState] = useState(null);
  const [select, setSelect] = useState(0);
  const [stableName, setStableName] = useState(null);
  const [correct, setCorrect] = useState(true);
  const [hiddenReset, setHiddenReset] = useState(false);

  //   here start ether code ----------------------------------------------
  const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/759536ec958243cd80ab8dc32fb4812c"
  );

  const USDTaddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // address of erc20 (usdt here)
  const USDCaddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const DAIaddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const BUSDaddress = "0x4Fabb145d64652a948d72533023f6E7A623C7C53";
  const TUSDaddress = "0x0000000000085d4780B73119b644AE5ecd22b376";

  const yourAddress = data; // your address

  const erc20ABI = [
    "function name() view returns(string)",
    "function symbol() view returns(string)",
    "function decimals() view returns(uint)",

    "function balanceOf(address) view returns (uint)",

    "function transfer(address to, uint amount)",

    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];

  const erc20ContractUSDT = new ethers.Contract(
    USDTaddress,
    erc20ABI,
    provider
  );
  const erc20ContractUSDC = new ethers.Contract(
    USDCaddress,
    erc20ABI,
    provider
  );
  const erc20ContractDAI = new ethers.Contract(DAIaddress, erc20ABI, provider);
  const erc20ContractBUSD = new ethers.Contract(
    BUSDaddress,
    erc20ABI,
    provider
  );
  const erc20ContractTUSD = new ethers.Contract(
    TUSDaddress,
    erc20ABI,
    provider
  );

  const allAddresses = [
    erc20ContractUSDT,
    erc20ContractUSDC,
    erc20ContractDAI,
    erc20ContractBUSD,
    erc20ContractTUSD,
  ];

  const mainAmount = async (number = select) => {
    const balanceOfme = await allAddresses[number].balanceOf(yourAddress);
    const decimals = await allAddresses[number].decimals();
    const amount = ethers.utils.formatUnits(balanceOfme, decimals);

    const finalAmount = Math.floor(amount * 100) / 100;
    return finalAmount;
  };

  const mainSumbol = async (number = select) => {
    const nameToken = await allAddresses[number].name();
    const symbol = await allAddresses[number].symbol();
    return symbol;
  };

  //   here end ether code ----------------------------------------------

  const myLoader = (
    <SyncLoader className=" -ml-2 mt-1 scale-50" color="#94a3b8" />
  );
  const selectFunc = (event) => {
    setSelect(event.target.value);
  };

  async function fetchData() {
    try {
      setCorrect(true);
      setState(myLoader);
      setStableName(null);
      const res = await mainAmount(select);
      const resName = await mainSumbol(select);
      setState(res);
      setStableName(resName);
      setHiddenReset(true);
    } catch (error) {
      setCorrect(false);
      setState("Poshel nahui");
    }
  }

  const inputFunc = (event) => {
    setData(event.target.value);
    setInputData(event.target.value);
    setCorrect(true);
    setHiddenReset(true);
  };

  const resetClick = () => {
    setInputData("");
    setCorrect(true);
    setState(null);
    setStableName(null);
    setData(null);
    setHiddenReset(false);
  };

  return (
    <div className="relative">
      <div className="flex align-middle justify-center">
        <select
          name="select"
          className="px-3 py-2 rounded-l-xl font-bold text-[20px] sm:text-[20px] bg-slate-400  text-white border-[1px] border-slate-500 hover:border-slate-400 "
          onChange={selectFunc}
        >
          <option value={0}>USDT</option>
          <option value={1}>USDC</option>
          <option value={2}>DAI</option>
          <option value={3}>BUSD</option>
          <option value={4}>TUSD</option>
        </select>
        <input
          value={inputData}
          type="text"
          className={
            correct
              ? "rounded-r-xl px-3 py-2  bg-slate-600 text-white border-[1px] border-slate-400 hover:border-slate-300 w-[80%] "
              : "rounded-r-xl px-3 py-2  bg-slate-600 text-white border-[1px] border-slate-400 hover:border-slate-300 w-[80%] ring-2 ring-red-600 ring-offset-1"
          }
          onChange={inputFunc}
          placeholder="0x000000000000000000000000000000000000000"
        />
      </div>
      <button
        onClick={async () => {
          let TEXT = await navigator.clipboard.readText();
          setData(TEXT);
          setInputData(TEXT);
          setHiddenReset(true);
        }}
        className={
          !inputData
            ? " bg-indigo-500 border-[2px] border-indigo-300 rounded-md p-1 text-xs px-1 font-bold text-black absolute mt-1 hover:opacity-50 right-2"
            : "hidden"
        }
      >
        Paste
      </button>
      <div
        className={
          correct
            ? "hidden "
            : " absolute ml-24 text-red-600 sm:text-[12px] mt-1 text-[6px] "
        }
      >
        Incorrect address type. Check Examples
      </div>
      <div className="flex justify-center mt-[14%] sm:mt-[8%]">
        <button
          onClick={fetchData}
          className=" relative shadow-lg inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-500 rounded-md group-hover:bg-opacity-0">
            Check balance
          </span>
        </button>
        <button
          id="reset"
          onClick={resetClick}
          type="button"
          className={
            hiddenReset
              ? " absolute mt-14 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800   shadow-sm shadow-red-800/80 font-medium rounded-lg text-md px-3 py-1 text-center "
              : "hidden absolute mt-14 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800  shadow-sm shadow-red-800/80 font-medium rounded-lg text-md px-3 py-1 text-center "
          }
        >
          Reset
        </button>
      </div>
      <div>
        <h1 className="text-black ml-2 flex justify-center mt-[30%] sm:mt-[18%]  text-2xl sm:text-3xl">
          {state} {stableName}
        </h1>
      </div>
    </div>
  );
};

export { EtherComponent };
