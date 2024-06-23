"use client";

import { useState } from "react";

import Switch from "./Switch";

import { prepareContractCall } from "thirdweb";

import { useActiveAccount, useSendTransaction } from "thirdweb/react";

import { CONTRACT } from "@/utils/constants";

const Form = () => {
  const [name, setName] = useState("");
  const [ticker, setTicker] = useState("");
  const [intialSupply, setInitialSupply] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [to, setTo] = useState("");

  const account = useActiveAccount();

  const { mutate: sendTransaction, isPending } = useSendTransaction();

  const [hasCustomRecipient, setHasCustomRecipient] = useState(false);

  const createToken = async (e) => {
    e.preventDefault();

    if (
      !account ||
      name == "" ||
      ticker == "" ||
      intialSupply == 0 ||
      totalSupply == 0
    )
      return;

    if (hasCustomRecipient && to == "") {
      setTo(account.address);
    } else if (!hasCustomRecipient) {
      setTo(account.address);
    }

    const tx = await prepareContractCall({
      contract: CONTRACT,
      method: "deployToken",
      params: [name, ticker, intialSupply, totalSupply, to],
    });

    sendTransaction(tx);
  };

  return (
    <div className="max-w-md">
      <div className="card">
        <input
          type="text"
          placeholder="Enter Token Name"
          className="input"
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
    </div>
  );
};

export default Form;
