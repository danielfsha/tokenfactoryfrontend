const Tokens = ({ tokens }) => {
  return (
    <div className="wrapper">
      <h1 className="text-white pb-4">Previous Deployments</h1>

      {/* table */}
      <table className="card w-full p-4 mb-8 text-white">
        <thead>
          <tr>
            <th>Token Name</th>
            <th>Symbol</th>
            <th>Contract Address</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td>{token.symbol}</td>
              <td>
                <a
                  href={`https://etherscan.io/address/${token.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {token.address.slice(0, 6)}...{token.address.slice(-6)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tokens;
