import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress } from '../../bech32';
import { Any } from '@terra-money/legacy.proto/google/protobuf/any';
import { CommunityPoolSpendProposal as TreasuryPoolSpendProposal_pb } from '@terra-money/terra.proto/cosmos/distribution/v1beta1/distribution';

export class TreasuryPoolSpendProposal extends JSONSerializable<
  TreasuryPoolSpendProposal.Amino,
  TreasuryPoolSpendProposal.Data,
  TreasuryPoolSpendProposal.Proto
> {
  public amount: Coins;
  /**
   * @param title proposal's title
   * @param description proposal's description
   * @param recipient recipient address
   * @param amount amount to give recipient
   */
  constructor(
    public title: string,
    public description: string,
    public recipient: AccAddress,
    amount: Coins.Input
  ) {
    super();
    this.amount = new Coins(amount);
  }

  public static fromAmino(
    data: TreasuryPoolSpendProposal.Amino,
    _?: boolean
  ): TreasuryPoolSpendProposal {
    _;
    const {
      value: { title, description, recipient, amount },
    } = data;
    return new TreasuryPoolSpendProposal(
      title,
      description,
      recipient,
      Coins.fromAmino(amount)
    );
  }

  public toAmino(isClassic?: boolean): TreasuryPoolSpendProposal.Amino {
    const { title, description, recipient, amount } = this;
    return {
      type: isClassic
        ? 'distribution/TreasuryPoolSpendProposal'
        : 'cosmos-sdk/TreasuryPoolSpendProposal',
      value: {
        title,
        description,
        recipient,
        amount: amount.toAmino(),
      },
    };
  }

  public static fromData(
    data: TreasuryPoolSpendProposal.Data,
    _?: boolean
  ): TreasuryPoolSpendProposal {
    _;
    const { title, description, recipient, amount } = data;
    return new TreasuryPoolSpendProposal(
      title,
      description,
      recipient,
      Coins.fromData(amount)
    );
  }

  public toData(_?: boolean): TreasuryPoolSpendProposal.Data {
    _;
    const { title, description, recipient, amount } = this;
    return {
      '@type': '/orbitium.treasury.TreasuryProposal',
      title,
      description,
      recipient,
      amount: amount.toData(),
    };
  }

  public static fromProto(
    proto: TreasuryPoolSpendProposal.Proto,
    _?: boolean
  ): TreasuryPoolSpendProposal {
    _;
    return new TreasuryPoolSpendProposal(
      proto.title,
      proto.description,
      proto.recipient,
      Coins.fromProto(proto.amount)
    );
  }

  public toProto(_?: boolean): TreasuryPoolSpendProposal.Proto {
    _;
    const { title, description, recipient, amount } = this;
    return TreasuryPoolSpendProposal_pb.fromPartial({
      amount: amount.toProto(),
      description,
      recipient,
      title,
    });
  }

  public packAny(isClassic?: boolean): Any {
    return Any.fromPartial({
      typeUrl: '/orbitium.treasury.TreasuryProposal',
      value: TreasuryPoolSpendProposal_pb.encode(
        this.toProto(isClassic)
      ).finish(),
    });
  }

  public static unpackAny(
    msgAny: Any,
    isClassic?: boolean
  ): TreasuryPoolSpendProposal {
    return TreasuryPoolSpendProposal.fromProto(
      TreasuryPoolSpendProposal_pb.decode(msgAny.value),
      isClassic
    );
  }
}

export namespace TreasuryPoolSpendProposal {
  export interface Amino {
    type:
      | 'distribution/TreasuryPoolSpendProposal'
      | 'cosmos-sdk/TreasuryPoolSpendProposal';
    value: {
      title: string;
      description: string;
      recipient: AccAddress;
      amount: Coins.Amino;
    };
  }

  export interface Data {
    '@type': '/orbitium.treasury.TreasuryProposal';
    title: string;
    description: string;
    recipient: AccAddress;
    amount: Coins.Data;
  }

  export type Proto = TreasuryPoolSpendProposal_pb;
}
