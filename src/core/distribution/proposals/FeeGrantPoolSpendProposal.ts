import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress } from '../../bech32';
import { Any } from '@terra-money/legacy.proto/google/protobuf/any';
import { CommunityPoolSpendProposal as FeeGrantPoolSpendProposal_pb } from '@terra-money/terra.proto/cosmos/distribution/v1beta1/distribution';

export class FeeGrantPoolSpendProposal extends JSONSerializable<
  FeeGrantPoolSpendProposal.Amino,
  FeeGrantPoolSpendProposal.Data,
  FeeGrantPoolSpendProposal.Proto
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
    data: FeeGrantPoolSpendProposal.Amino,
    _?: boolean
  ): FeeGrantPoolSpendProposal {
    _;
    const {
      value: { title, description, recipient, amount },
    } = data;
    return new FeeGrantPoolSpendProposal(
      title,
      description,
      recipient,
      Coins.fromAmino(amount)
    );
  }

  public toAmino(isClassic?: boolean): FeeGrantPoolSpendProposal.Amino {
    const { title, description, recipient, amount } = this;
    return {
      type: isClassic
        ? 'distribution/FeeGrantPoolSpendProposal'
        : 'cosmos-sdk/FeeGrantPoolSpendProposal',
      value: {
        title,
        description,
        recipient,
        amount: amount.toAmino(),
      },
    };
  }

  public static fromData(
    data: FeeGrantPoolSpendProposal.Data,
    _?: boolean
  ): FeeGrantPoolSpendProposal {
    _;
    const { title, description, recipient, amount } = data;
    return new FeeGrantPoolSpendProposal(
      title,
      description,
      recipient,
      Coins.fromData(amount)
    );
  }

  public toData(_?: boolean): FeeGrantPoolSpendProposal.Data {
    _;
    const { title, description, recipient, amount } = this;
    return {
      '@type': '/orbitium.treasury.FeeGrantProposal',
      title,
      description,
      recipient,
      amount: amount.toData(),
    };
  }

  public static fromProto(
    proto: FeeGrantPoolSpendProposal.Proto,
    _?: boolean
  ): FeeGrantPoolSpendProposal {
    _;
    return new FeeGrantPoolSpendProposal(
      proto.title,
      proto.description,
      proto.recipient,
      Coins.fromProto(proto.amount)
    );
  }

  public toProto(_?: boolean): FeeGrantPoolSpendProposal.Proto {
    _;
    const { title, description, recipient, amount } = this;
    return FeeGrantPoolSpendProposal_pb.fromPartial({
      amount: amount.toProto(),
      description,
      recipient,
      title,
    });
  }

  public packAny(isClassic?: boolean): Any {
    return Any.fromPartial({
      typeUrl: '/orbitium.treasury.FeeGrantProposal',
      value: FeeGrantPoolSpendProposal_pb.encode(
        this.toProto(isClassic)
      ).finish(),
    });
  }

  public static unpackAny(
    msgAny: Any,
    isClassic?: boolean
  ): FeeGrantPoolSpendProposal {
    return FeeGrantPoolSpendProposal.fromProto(
      FeeGrantPoolSpendProposal_pb.decode(msgAny.value),
      isClassic
    );
  }
}

export namespace FeeGrantPoolSpendProposal {
  export interface Amino {
    type:
      | 'distribution/FeeGrantPoolSpendProposal'
      | 'cosmos-sdk/FeeGrantPoolSpendProposal';
    value: {
      title: string;
      description: string;
      recipient: AccAddress;
      amount: Coins.Amino;
    };
  }

  export interface Data {
    '@type': '/orbitium.treasury.FeeGrantProposal';
    title: string;
    description: string;
    recipient: AccAddress;
    amount: Coins.Data;
  }

  export type Proto = FeeGrantPoolSpendProposal_pb;
}
