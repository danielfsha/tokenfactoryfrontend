import Link from "next/link";

import Form from "./Form";

const Heading = () => {
  return (
    <div className="wrapper flex items-center justify-center text-center flex-col lg:text-left lg:flex-row">
      <div>
        <Link
          href="https://www.linkedin.com/in/daniel-fisseha-b1b74b203/"
          target="_blank"
          rel="noopener noreferrer"
          className="link font-mono text-sm"
        >
          Designed and developed by daniel fisseha
        </Link>
        <p class="mt-4 text-4xl font-semibold tracking-tight text-white lg:text-5xl">
          Token Creation Factory
        </p>
        <p class="max-w-xl mt-4 text-lg text-gray-400 pb-12">
          Easily create ERC20 Tokens on polygon ZkEVM Cardona testnet.
        </p>
      </div>

      <Form />
    </div>
  );
};

export default Heading;
