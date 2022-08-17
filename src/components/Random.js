import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import arrayOfAddresses from "./arrayOfAddresses";

const Random = () => {
  const [result, setResult] = useState("");

  const generateFn = () => {
    let num = Math.floor(Math.random() * arrayOfAddresses.length);
    let newAddr = arrayOfAddresses[num];
    let ternary = result === newAddr ? true : false;
    if (ternary) {
      generateFn();
      console.log("repeat");
    } else {
      setResult(newAddr);
    }

    console.log(ternary);
  };

  return (
    <div className=" border-2 h-full rounded-lg border-slate-400 relative">
      <div className="flex justify-center mt-[10%] ">
        <button
          onClick={generateFn}
          className=" shadow-lg inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-500 rounded-md group-hover:bg-opacity-0">
            Generate
          </span>
        </button>
      </div>

      {/* -------------------- */}
      <div className="flex items-stretch h-[60%] sm:h-[50%] align-middle">
        <div className=" flex justify-center mx-4 w-full  border-2 border-slate-400 rounded-lg p-1 self-end">
          <input
            readOnly
            type="text"
            className=" pl-2 rounded-l-md text-sm w-full"
            value={result}
            placeholder="generate ERC-20 address"
          />
          <CopyToClipboard text={result}>
            <button className="bg-slate-400 rounded-r-md p-1 flex hover:bg-amber-400 hover:opacity-50">
              <ClipboardCopyIcon className="w-4 cursor-pointer " />
              <h1 className="text-xs cursor-pointer">Copy</h1>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Random;
