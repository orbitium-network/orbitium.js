import { JSONSerializable } from '../../../util/json';
import { MsgCreateUser as MsgCreateUser_pb } from './proto/MsgCreateUser';
import { Any } from '@terra-money/terra.proto/google/protobuf/any';

export class MsgCreateUser extends JSONSerializable<
  MsgCreateUser.Amino,
  MsgCreateUser.Data,
  MsgCreateUser.Proto
> {
  /**
   * @param creator
   * @param username
   * @param referralCode
   * @param countryCode
   * @param faceId
   */
  constructor(
    public creator: string,
    public username: string,
    public referralCode: string,
    public countryCode: string,
    public faceId: string
  ) {
    super();
  }

  public static fromAmino(
    data: MsgCreateUser.Amino,
    _?: boolean
  ): MsgCreateUser {
    const {
      value: { creator, username, referralCode, countryCode, faceId },
    } = data;
    return new MsgCreateUser(
      creator,
      username,
      referralCode,
      countryCode,
      faceId
    );
  }

  public toAmino(_: any): MsgCreateUser.Amino {
    const { creator, username, referralCode, countryCode, faceId } = this;
    return {
      type: 'orbitium/MsgCreateUser',
      value: {
        creator,
        username,
        referralCode,
        countryCode,
        faceId,
      },
    };
  }

  public static fromProto(
    proto: MsgCreateUser.Proto,
    _?: boolean
  ): MsgCreateUser {
    return new MsgCreateUser(
      proto.creator,
      proto.username,
      proto.referralCode,
      proto.countryCode,
      proto.faceId
    );
  }

  public toProto(_?: boolean): MsgCreateUser.Proto {
    const { creator, username, referralCode, countryCode, faceId } = this;
    return MsgCreateUser_pb.fromPartial({
      creator: creator,
      username: username,
      referralCode: referralCode,
      countryCode: countryCode,
      faceId: faceId,
    });
  }

  public packAny(_?: boolean): Any {
    return Any.fromPartial({
      typeUrl: '/orbitium.orbitium.MsgCreateUser',
      value: MsgCreateUser_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgCreateUser {
    return MsgCreateUser.fromProto(MsgCreateUser_pb.decode(msgAny.value));
  }

  public static fromData(data: MsgCreateUser.Data): MsgCreateUser {
    const { creator, username, referralCode, countryCode, faceId } = data;
    return new MsgCreateUser(
      creator,
      username,
      referralCode,
      countryCode,
      faceId
    );
  }

  public toData(): MsgCreateUser.Data {
    const { creator, username, referralCode, countryCode, faceId } = this;
    return {
      '@type': '/orbitium.orbitium.MsgCreateUser',
      creator,
      username,
      referralCode,
      countryCode,
      faceId,
    };
  }
}

export namespace MsgCreateUser {
  export interface Amino {
    type: 'orbitium/MsgCreateUser';
    value: {
      creator: string;
      username: string;
      referralCode: string;
      countryCode: string;
      faceId: string;
    };
  }

  export interface Data {
    '@type': '/orbitium.orbitium.MsgCreateUser';
    creator: string;
    username: string;
    referralCode: string;
    countryCode: string;
    faceId: string;
  }

  export type Proto = MsgCreateUser_pb;
}
