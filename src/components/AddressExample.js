import React from "react";
import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const AddressExample = ({ name, image, address }) => {
  return (
    <div className=" flex flex-row justify-items-center border-2 border-slate-100 rounded-md bg-slate-200 text-slate-800 p-2 mt-2 align-middle">
      <div className="basis-1/6 text-center flex align-middle">
        <img
          src={image}
          alt="1"
          className=" w-5 h-5 mt-[1px] rounded-full ring-2 ring-gray-500"
        />
        <div>
          <h1 className="ml-2 text-[10px] mt-[4px]">{name}</h1>
        </div>
      </div>
      <div className="basis-5/6 text-center ">
        <div className="flex justify-end align-middle">
          <input
            readOnly
            type="text"
            className="w-full ml-4 rounded-l-md text-sm pl-1"
            value={address}
          />
          <h1 className=""></h1>
          <CopyToClipboard text={address}>
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

export default AddressExample;
