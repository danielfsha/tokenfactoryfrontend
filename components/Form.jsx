"use client";

import { useState } from "react";
import Switch from "./Switch";

import { prepareContractCall, sendTransaction } from "thirdweb";

import { useActiveAccount } from "thirdweb/react";

import { CONTRACT } from "@/utils/constants";

const Form = () => {
  const [name, setName] = useState("");
  const [ticker, setTicker] = useState("");
  const [intialSupply, setInitialSupply] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [to, setTo] = useState("");

  const account = useActiveAccount();

  const [hasCustomRecipient, setHasCustomRecipient] = useState(false);

  const createToken = async (e) => {
    e.preventDefault();
    if (account == undefined) return;

    const recipient = hasCustomRecipient ? to : account.address;

    if (
      name.length == 0 ||
      ticker.length == 0 ||
      intialSupply == 0 ||
      totalSupply == 0 ||
      recipient == undefined
    )
      return;

    const transaction = await prepareContractCall({
      contract: CONTRACT,
      method: "deployToken",
      params: [name, ticker, intialSupply, totalSupply, to],
    });

    sendTransaction(transaction);
  };

  return (
    <form className="max-w-md" onSubmit={createToken}>
      <div class="card">
        <input
          type="text"
          placeholder="Enter Token Name"
          class="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Ticker Symbol"
          className="input"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter inital supply"
          className="input"
          value={intialSupply}
          onChange={(e) => setInitialSupply(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter total supply"
          className="input"
          value={totalSupply}
          onChange={(e) => setTotalSupply(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <p className="text-white">Custom Recipient</p>

          <Switch
            isActive={hasCustomRecipient}
            toggle={() => setHasCustomRecipient(!hasCustomRecipient)}
          />
        </div>

        {hasCustomRecipient && (
          <input
            type="text"
            placeholder="Enter the recipient address of intial supply"
            className="input"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        )}

        <button onClick={createToken} className="btn w-full">
          Create Token
        </button>
      </div>
    </form>
  );
};

export default Form;
