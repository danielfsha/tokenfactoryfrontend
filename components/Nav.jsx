import React from "react";
import Button from "./Button";
import { ConnectButton } from "thirdweb/react";
import { chain, client } from "@/utils/constants";

const Nav = () => {
  return (
    <nav className="wrapper flex items-center justify-between py-4">
      <p className="text-xl font-semibold tracking-tight text-white">
        TokenFactory
      </p>

      <ConnectButton client={client} chain={chain} />
    </nav>
  );
};

export default Nav;
