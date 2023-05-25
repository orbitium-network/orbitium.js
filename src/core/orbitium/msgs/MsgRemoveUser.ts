import { JSONSerializable } from '../../../util/json';
import { MsgRemoveUser as MsgRemoveUser_pb } from './proto/MsgRemoveUser';
import { Any } from '@terra-money/terra.proto/google/protobuf/any';

export class MsgRemoveUser extends JSONSerializable<
  MsgRemoveUser.Amino,
  MsgRemoveUser.Data,
  MsgRemoveUser.Proto
> {
  /**
   * @param creator
   * @param address
   */
  constructor(public creator: string, public address: string) {
    super();
  }

  public static fromAmino(
    data: MsgRemoveUser.Amino,
    _?: boolean
  ): MsgRemoveUser {
    const {
      value: { creator, address },
    } = data;
    return new MsgRemoveUser(creator, address);
  }

  public toAmino(_: any): MsgRemoveUser.Amino {
    const { creator, address } = this;
    return {
      type: 'orbitium/MsgRemoveUser',
      value: {
        creator,
        address,
      },
    };
  }

  public static fromProto(
    proto: MsgRemoveUser.Proto,
    _?: boolean
  ): MsgRemoveUser {
    return new MsgRemoveUser(proto.creator, proto.address);
  }

  public toProto(_?: boolean): MsgRemoveUser.Proto {
    const { creator, address } = this;
    return MsgRemoveUser_pb.fromPartial({
      creator: creator,
      address: address,
    });
  }

  public packAny(_?: boolean): Any {
    return Any.fromPartial({
      typeUrl: '/orbitium.orbitium.MsgRemoveUser',
      value: MsgRemoveUser_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgRemoveUser {
    return MsgRemoveUser.fromProto(MsgRemoveUser_pb.decode(msgAny.value));
  }

  public static fromData(data: MsgRemoveUser.Data): MsgRemoveUser {
    const { creator, address } = data;
    return new MsgRemoveUser(creator, address);
  }

  public toData(): MsgRemoveUser.Data {
    const { creator, address } = this;
    return {
      '@type': '/orbitium.orbitium.MsgRemoveUser',
      creator,
      address,
    };
  }
}

export namespace MsgRemoveUser {
  export interface Amino {
    type: 'orbitium/MsgRemoveUser';
    value: {
      creator: string;
      address: string;
    };
  }

  export interface Data {
    '@type': '/orbitium.orbitium.MsgRemoveUser';
    creator: string;
    address: string;
  }

  export type Proto = MsgRemoveUser_pb;
}
