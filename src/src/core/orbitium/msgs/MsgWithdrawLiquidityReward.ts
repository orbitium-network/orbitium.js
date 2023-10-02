/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface MsgWithdrawLiquidityReward {
  creator: string;
  pairContractAddress: string;
}

function createBaseMsgWithdrawLiquidityReward(): MsgWithdrawLiquidityReward {
  return { creator: "", pairContractAddress: "" };
}

export const MsgWithdrawLiquidityReward = {
  encode(message: MsgWithdrawLiquidityReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pairContractAddress !== "") {
      writer.uint32(18).string(message.pairContractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLiquidityReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLiquidityReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pairContractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawLiquidityReward {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pairContractAddress: isSet(object.pairContractAddress) ? String(object.pairContractAddress) : "",
    };
  },

  toJSON(message: MsgWithdrawLiquidityReward): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.pairContractAddress !== "") {
      obj.pairContractAddress = message.pairContractAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawLiquidityReward>, I>>(base?: I): MsgWithdrawLiquidityReward {
    return MsgWithdrawLiquidityReward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLiquidityReward>, I>>(object: I): MsgWithdrawLiquidityReward {
    const message = createBaseMsgWithdrawLiquidityReward();
    message.creator = object.creator ?? "";
    message.pairContractAddress = object.pairContractAddress ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
