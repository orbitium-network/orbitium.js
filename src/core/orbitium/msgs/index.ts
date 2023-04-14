import { MsgClaimDailyReward } from './MsgClaimDailyReward';
export * from './MsgClaimDailyReward';

import { MsgCreateUser } from './MsgCreateUser';
export * from './MsgCreateUser';

export type OrbitiumMsg = MsgClaimDailyReward | MsgCreateUser;

export namespace OrbitiumMsg {
  export type Amino = MsgClaimDailyReward.Amino | MsgCreateUser.Amino;
  export type Data = MsgClaimDailyReward.Data | MsgCreateUser.Data;
  export type Proto = MsgClaimDailyReward.Proto | MsgCreateUser.Proto;
}
