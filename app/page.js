'use client'

import { useState } from "react";

import Heading from "@/components/Heading";
import Nav from "@/components/Nav";
import Tokens from "@/components/Tokens";

import { useActiveAccount, useReadContract } from "thirdweb/react";

import { CONTRACT } from "@/utils/constants";

export default function Home() {
  const [tokens, setTokens] = useState([
    { name: "Uniswap", symbol: "UNI", address: "0x1f98431C8aCbE8DB78FcDf1EEd3aC2b9a04F2E41" },
    { name: "Chainlink", symbol: "LINK", address: "0x5149366a2aC76DdBdFbC3ac68A42BdCe1E7Efef0" },
    { name: "Dai", symbol: "DAI", address: "0x6B175474E89094C44Da09a3E140B8C1Fe5593dE1" },
  ]);

  const account = useActiveAccount()

  const { data, isLoading } = useReadContract({
    contract: CONTRACT,
    method: "getTokensByUser",
    params: [account?.address]
  })

  console.log(data)


  return (
    <section class="bg-[#1a1d27] relative overflow-hidden min-h-screen">
      <Nav />
      <Heading />
      {
        account && (
          <Tokens tokens={account && data == undefined ? [] : data} />
        )
      }
    </section>
  );
}
