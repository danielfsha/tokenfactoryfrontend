const Tokens = ({ tokens }) => {
  console.log(tokens);
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
              <td>{token.ticker}</td>
              <td>
                <a
                  href={`https://sepolia.etherscan.io/address/${token.tokenDeploymentAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {token.tokenDeploymentAddress.slice(0, 6)}...
                  {token.tokenDeploymentAddress.slice(-6)}
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
