import { JSONSerializable } from '../../../util/json';
import { MsgWithdrawLiquidityReward as MsgWithdrawLiquidityReward_pb } from './proto/MsgWithdrawLiquidityReward';
import { Any } from '@terra-money/terra.proto/google/protobuf/any';

export class MsgWithdrawLiquidityReward extends JSONSerializable<
  MsgWithdrawLiquidityReward.Amino,
  MsgWithdrawLiquidityReward.Data,
  MsgWithdrawLiquidityReward.Proto
> {
  /**
   * @param creator
   * @param pairContractAddress
   */
  constructor(
    public creator: string,
    public pairContractAddress: string,
  
  ) {
    super();
  }

  public static fromAmino(
    data: MsgWithdrawLiquidityReward.Amino,
    _?: boolean
  ): MsgWithdrawLiquidityReward {
    const {
      value: { creator, pairContractAddress },
    } = data;
    return new MsgWithdrawLiquidityReward(
      creator,
      pairContractAddress,
   
    );
  }

  public toAmino(_: any): MsgWithdrawLiquidityReward.Amino {
    const { creator, pairContractAddress } = this;
    return {
      type: 'orbitium/MsgWithdrawLiquidityReward',
      value: {
        creator,
        pairContractAddress,
       
      },
    };
  }

  public static fromProto(
    proto: MsgWithdrawLiquidityReward.Proto,
    _?: boolean
  ): MsgWithdrawLiquidityReward {
    return new MsgWithdrawLiquidityReward(
      proto.creator,
      proto.pairContractAddress,
    );
  }

  public toProto(_?: boolean): MsgWithdrawLiquidityReward.Proto {
    const { creator, pairContractAddress} = this;
    return MsgWithdrawLiquidityReward_pb.fromPartial({
      creator: creator,
      pairContractAddress: pairContractAddress,
    });
  }

  public packAny(_?: boolean): Any {
    return Any.fromPartial({
      typeUrl: '/orbitium.orbitium.MsgWithdrawLiquidityReward',
      value: MsgWithdrawLiquidityReward_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgWithdrawLiquidityReward {
    return MsgWithdrawLiquidityReward.fromProto(MsgWithdrawLiquidityReward_pb.decode(msgAny.value));
  }

  public static fromData(data: MsgWithdrawLiquidityReward.Data): MsgWithdrawLiquidityReward {
    const { creator, pairContractAddress } = data;
    return new MsgWithdrawLiquidityReward(
      creator,
      pairContractAddress,
    );
  }

  public toData(): MsgWithdrawLiquidityReward.Data {
    const { creator, pairContractAddress } = this;
    return {
      '@type': '/orbitium.orbitium.MsgWithdrawLiquidityReward',
      creator,
      pairContractAddress,
    };
  }
}

export namespace MsgWithdrawLiquidityReward {
  export interface Amino {
    type: 'orbitium/MsgWithdrawLiquidityReward';
    value: {
      creator: string;
      pairContractAddress: string;
    };
  }

  export interface Data {
    '@type': '/orbitium.orbitium.MsgWithdrawLiquidityReward';
    creator: string;
    pairContractAddress: string;
  }

  export type Proto = MsgWithdrawLiquidityReward_pb;
}
