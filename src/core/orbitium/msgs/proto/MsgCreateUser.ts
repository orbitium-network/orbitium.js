/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

export interface MsgCreateUser {
  creator: string;
  username: string;
  referralCode: string;
  countryCode: string;
  faceId: string;
}

function createBaseMsgCreateUser(): MsgCreateUser {
  return {
    creator: '',
    username: '',
    referralCode: '',
    countryCode: '',
    faceId: '',
  };
}

export const MsgCreateUser = {
  encode(
    message: MsgCreateUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.username !== '') {
      writer.uint32(18).string(message.username);
    }
    if (message.referralCode !== '') {
      writer.uint32(26).string(message.referralCode);
    }
    if (message.countryCode !== '') {
      writer.uint32(34).string(message.countryCode);
    }
    if (message.faceId !== '') {
      writer.uint32(42).string(message.faceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.referralCode = reader.string();
          break;
        case 4:
          message.countryCode = reader.string();
          break;
        case 5:
          message.faceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      username: isSet(object.username) ? String(object.username) : '',
      referralCode: isSet(object.referralCode)
        ? String(object.referralCode)
        : '',
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : '',
      faceId: isSet(object.faceId) ? String(object.faceId) : '',
    };
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    message.referralCode !== undefined &&
      (obj.referralCode = message.referralCode);
    message.countryCode !== undefined &&
      (obj.countryCode = message.countryCode);
    message.faceId !== undefined && (obj.faceId = message.faceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUser>, I>>(
    object: I
  ): MsgCreateUser {
    const message = createBaseMsgCreateUser();
    message.creator = object.creator ?? '';
    message.username = object.username ?? '';
    message.referralCode = object.referralCode ?? '';
    message.countryCode = object.countryCode ?? '';
    message.faceId = object.faceId ?? '';
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
