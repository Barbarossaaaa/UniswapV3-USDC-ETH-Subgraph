# UniswapV3-USDC-ETH-Subgraph

### Mainnet deployment

- USDC-ETH: [https://thegraph.com/hosted-service/subgraph/richa-iitr/usdc-eth-pool-tick-data?selected=playground](https://thegraph.com/hosted-service/subgraph/richa-iitr/usdc-eth-pool-tick-data?selected=playground)
- DAI-ETH:[https://thegraph.com/hosted-service/subgraph/richa-iitr/dai-eth-pool-tickdata?selected=playground](https://thegraph.com/hosted-service/subgraph/richa-iitr/dai-eth-pool-tickdata?selected=playground)

Query:

<pre>
{
  pools {
    id
    count
  }
  swapDatas{
    id
    sender
    receiver
    origin
    sqrtPriceX96
    tick
    timestamp
    blockNumber
    logIndex
    transactionLogIndex
    liquidity
    initialTick
    initialSqrtPriceX96
  }
}

</pre>

