import React from "react";
import imgOne from "../media/eth.png";
import imgTwo from "../media/ftx.png";
import imgThree from "../media/bnb.png";
import { ClipboardCopyIcon } from "@heroicons/react/outline";
import AddressExample from "./AddressExample";

const Examples = () => {
  return (
    <div>
      <div className=" flex flex-row justify-items-center border-2 border-slate-400 rounded-md bg-slate-500 text-white p-2">
        <div className="basis-1/6 text-center ml-6">Holder</div>
        <div className="basis-5/6 text-center">Address</div>
      </div>
      <AddressExample
        name={"ETH"}
        address={"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"}
        image={imgOne}
      />
      <AddressExample
        name={"FTX"}
        address={"0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2"}
        image={imgTwo}
      />
      <AddressExample
        name={"BNB"}
        address={"0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"}
        image={imgThree}
      />
      

    </div>
  );
};

export default Examples;
