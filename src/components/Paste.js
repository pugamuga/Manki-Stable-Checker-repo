import React from "react";
import { useState } from "react";

const Paste = () => {
  const [copy, setCopy] = useState("");

  return (
    <div className="flex flex-col">
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(
            document.getElementById("h1").value
          );
        }}
        className=" bg-slate-400 p-2 m-2"
      >
        Copy
      </button>
      <h1 id="h1">Text for copy</h1>
      <button
        onClick={async () => {
          let text = await navigator.clipboard.readText();
          setCopy(text)
        }}
        className=" bg-slate-400 p-2 m-2"
      >
        Paste
      </button>
      <h1>Pastehere</h1>
      <input type="text" value={copy}/>
    </div>
  );
};

export default Paste;
