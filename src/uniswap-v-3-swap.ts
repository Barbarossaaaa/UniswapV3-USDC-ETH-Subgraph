import { BigInt, dataSource } from "@graphprotocol/graph-ts"
import {
  Swap
} from "../generated/UniswapV3USDCETHPool/USDCETHPool"
import { Pool, SwapData } from "../generated/schema"

import { createOrLoadPool, createOrLoadSwapData } from "./uniswap-v-3-factory";

export function handleSwap(event: Swap): void {
  let poolId = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8";
  let pool = createOrLoadPool(poolId);
  let swapData = createOrLoadSwapData(
    event.transaction.hash.toHexString() + "#" + poolId + "#" + ((pool.swap).length).toString() 
  );

  let swaps = pool.swap;

  //   swapData.pool = poolId;
  swapData.sender = event.params.sender;
  swapData.receiver = event.params.recipient;
  swapData.origin = event.transaction.from;
  swapData.sqrtPriceX96 = event.params.sqrtPriceX96;
  swapData.tick = BigInt.fromI32(event.params.tick);
  swapData.liquidity = event.params.liquidity;
  swapData.timestamp = event.block.timestamp;
  swapData.blockNumber = event.block.number;

    //cumulative ticks -- stores the cumulative tick data of previous timestamp.
    // if (swaps.length == 0) {
    //   swapData.cumulativeTicks = BigInt.fromI32(0);
    // } else {
    //   let prevSwap = createOrLoadSwapData(swaps[swaps.length - 1]);
    //   let prevTickTime = prevSwap.timestamp;
    //   let duration = event.block.timestamp.minus(prevTickTime);
    //   let prevTick = prevSwap.tick;
    //   swapData.cumulativeTicks = prevTick.times(duration);
    // }

  swaps.push(swapData.id);
  pool.count = pool.count.plus(BigInt.fromI32(1));
  pool.swap = swaps;

  swapData.save();
  pool.save();
}