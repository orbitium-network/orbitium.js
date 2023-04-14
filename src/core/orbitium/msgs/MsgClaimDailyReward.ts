import { JSONSerializable } from '../../../util/json';
import { Any } from '@terra-money/terra.proto/google/protobuf/any';
import { MsgClaimDailyReward as MsgClaimDailyReward_pb } from './proto/MsgClaimDailyReward';

export class MsgClaimDailyReward extends JSONSerializable<
  MsgClaimDailyReward.Amino,
  MsgClaimDailyReward.Data,
  MsgClaimDailyReward.Proto
> {
  /**
   * @param creator
   */
  constructor(public creator: string) {
    super();
  }

  public static fromAmino(
    data: MsgClaimDailyReward.Amino,
    _?: boolean
  ): MsgClaimDailyReward {
    const {
      value: { creator },
    } = data;
    return new MsgClaimDailyReward(creator);
  }

  public toAmino(_?: boolean): MsgClaimDailyReward.Amino {
    const { creator } = this;

    return {
      type: 'orbitium/MsgClaimDailyReward',
      value: {
        creator,
      },
    };
  }

  public static fromData(
    data: MsgClaimDailyReward.Data,
    _?: boolean
  ): MsgClaimDailyReward {
    const { creator } = data;
    return new MsgClaimDailyReward(creator);
  }

  public toData(_?: boolean): MsgClaimDailyReward.Data {
    const { creator } = this;
    return {
      '@type': '/orbitium.orbitium.MsgClaimDailyReward',
      creator,
    };
  }

  public static fromProto(
    proto: MsgClaimDailyReward.Proto,
    _?: boolean
  ): MsgClaimDailyReward {
    _;
    return new MsgClaimDailyReward(proto.creator);
  }

  public toProto(_?: boolean): MsgClaimDailyReward.Proto {
    const { creator } = this;
    return MsgClaimDailyReward_pb.fromPartial({
      creator: creator,
    });
  }

  public packAny(_?: boolean): Any {
    return Any.fromPartial({
      typeUrl: '/orbitium.orbitium.MsgClaimDailyReward',
      value: MsgClaimDailyReward_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any, __?: boolean): MsgClaimDailyReward {
    return MsgClaimDailyReward.fromProto(
      MsgClaimDailyReward_pb.decode(msgAny.value)
    );
  }
}

export namespace MsgClaimDailyReward {
  export interface Amino {
    type: 'orbitium/MsgClaimDailyReward';
    value: {
      creator: string;
    };
  }

  export interface Data {
    '@type': '/orbitium.orbitium.MsgClaimDailyReward';
    creator: string;
  }

  export type Proto = MsgClaimDailyReward_pb;
}
