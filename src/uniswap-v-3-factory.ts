import { Address, BigInt, DataSourceContext } from "@graphprotocol/graph-ts";
import { Pool, SwapData } from "../generated/schema";

export function createOrLoadPool(id: string): Pool {
  let pool = Pool.load(id);
  if (pool == null) {
    pool = new Pool(id);
    pool.count = BigInt.fromI32(0);
  }
  return pool;
}

export function createOrLoadSwapData(id: string): SwapData {
  let data = SwapData.load(id);
  if (data == null) {
    data = new SwapData(id);
    data.sender = new Address(0);
    data.receiver = new Address(0);
    data.origin = new Address(0);
    data.sqrtPriceX96 = BigInt.fromI32(0);
    data.tick = BigInt.fromI32(0);
    // data.cumulativeTicks = BigInt.fromI32(0);
    data.timestamp = BigInt.fromI32(0);
    data.blockNumber = BigInt.fromI32(0);
    data.liquidity = BigInt.fromI32(0);
  }
  return data;
}
