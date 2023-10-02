import { MsgClaimDailyReward } from './MsgClaimDailyReward';
export * from './MsgClaimDailyReward';

import { MsgCreateUser } from './MsgCreateUser';
export * from './MsgCreateUser';

import { MsgRemoveUser } from './MsgRemoveUser';
export * from './MsgRemoveUser';

import { MsgWithdrawLiquidityReward } from './MsgWithdrawLiquidityReward';
export * from './MsgWithdrawLiquidityReward'

export type OrbitiumMsg = MsgClaimDailyReward | MsgCreateUser | MsgRemoveUser | MsgWithdrawLiquidityReward;

export namespace OrbitiumMsg {
  export type Amino =
    | MsgClaimDailyReward.Amino
    | MsgCreateUser.Amino
    | MsgRemoveUser.Amino
    | MsgWithdrawLiquidityReward.Amino;
  export type Data =
    | MsgClaimDailyReward.Data
    | MsgCreateUser.Data
    | MsgRemoveUser.Data
    | MsgWithdrawLiquidityReward.Data;
  export type Proto =
    | MsgClaimDailyReward.Proto
    | MsgCreateUser.Proto
    | MsgRemoveUser.Proto
    | MsgWithdrawLiquidityReward.Proto;
}
