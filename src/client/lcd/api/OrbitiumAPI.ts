import { BaseAPI } from './BaseAPI';
import { AccAddress, Coin } from '../../../core';
import { LCDClient } from '../LCDClient';

export interface Referral {
  referrer: string;
  timestamp: number;
  referralID: number;
  referrant: string;
  randomlySelected: boolean;
}

export interface Reward {
  userAddress: string;
  timestamp: number;
  dauReward: Coin;
  referralReward: Coin;
  communityGift: Coin;
  c2eValidFrom: number;
  c2eId: number;
}

export interface User {
  address: string;
  username: string;
  lastC2EL: number;
  referrer: string;
  countryCode: string;
  registrationDate: number;
}

export interface CommunityGiftParams {
  enabled: boolean;
  maxAmount: Coin;
  minUsers: number;
  minReferrals: number;
}

export interface IsAddressRegisteredRes {
  registered: boolean;
  username: string;
}

export interface IsUsernameAvailableRes {
  available: boolean;
}

export interface GetClaimableRewardsRes {
  dau: Coin;
  referral: Coin;
  commnityGift: Coin;
}

export interface GetTotalReferralsRes {
  referrals: number;
}

export interface GetUserInfoRes {
  user: User;
}

export interface GetUserReferralsRes {
  referrals: Array<Referral>;
}

export interface GetUserRewardsRes {
  rewards: Array<Reward>;
}

export interface ClickToEarnInfo {
  totalDAU: Coin;
  totalReferralReward: Coin;
  totalUsers: number;
  validFrom: number;
  id: number;
  communityGift: Coin;
  prevCommunityGift: Coin;
  communityGiftParams: CommunityGiftParams;
  prevCommunityGiftParams: CommunityGiftParams | null;
}

export interface GetClickToEarnInfoRes {
  ClickToEarnInfo: ClickToEarnInfo;
}

export class OrbitiumAPI extends BaseAPI {
  constructor(public lcd: LCDClient) {
    super(lcd.apiRequester);
  }

  public async isAddressRegistered(
    address: AccAddress
  ): Promise<IsAddressRegisteredRes> {
    return this.c
      .get<IsAddressRegisteredRes>(
        `/orbitium/orbitium/is_address_registered/${address}`
      )
      .then(d => d);
  }

  public async isUsernameAvailable(
    username: string
  ): Promise<IsUsernameAvailableRes> {
    return this.c
      .get<IsUsernameAvailableRes>(
        `/orbitium/orbitium/is_username_available/${username}`
      )
      .then(d => d);
  }

  public async getClaimableRewards(
    userAddress: AccAddress
  ): Promise<GetClaimableRewardsRes> {
    return this.c
      .get<GetClaimableRewardsRes>(
        `/orbitium/orbitium/get_claimable_rewards/${userAddress}`
      )
      .then(d => d);
  }

  public async getTotalReferrals(
    userAddress: AccAddress
  ): Promise<GetTotalReferralsRes> {
    return this.c
      .get<GetTotalReferralsRes>(
        `/orbitium/orbitium/get_total_referrals/${userAddress}`
      )
      .then(d => d);
  }

  public async getUserInfo(userAddress: AccAddress): Promise<GetUserInfoRes> {
    return this.c
      .get<GetUserInfoRes>(`/orbitium/orbitium/get_user_info/${userAddress}`)
      .then(d => d);
  }

  public async getUserReferrals(
    userAddress: AccAddress,
    epochStart: number,
    epochEnd: number
  ): Promise<GetUserReferralsRes> {
    return this.c
      .get<GetUserReferralsRes>(
        `/orbitium/orbitium/get_user_referrals/${userAddress}/${epochStart}/${epochEnd}`
      )
      .then(d => d);
  }

  public async getUserRewards(
    userAddress: AccAddress,
    epochStart: number,
    epochEnd: number
  ): Promise<GetUserRewardsRes> {
    return this.c
      .get<GetUserRewardsRes>(
        `/orbitium/orbitium/get_user_rewards/${userAddress}/${epochStart}/${epochEnd}`
      )
      .then(d => d);
  }

  public async getClickToEarnInfo(): Promise<GetClickToEarnInfoRes> {
    return this.c
      .get<GetClickToEarnInfoRes>(`/orbitium/orbitium/click_to_earn_info`)
      .then(d => d);
  }
}
