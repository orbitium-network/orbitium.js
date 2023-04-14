import { bech32 } from 'bech32';

/** `orb-` prefixed account address */
export type AccAddress = string;

/** `orbvaloper-` prefixed validator operator address */
export type ValAddress = string;

/** `orbvalcons-` prefixed validator consensus address */
export type ValConsAddress = string;

/** `orbpub-` prefixed account public key */
export type AccPubKey = string;

/** `orbvaloperpub-` prefixed validator public key */
export type ValPubKey = string;

function checkPrefixAndLength(
  prefix: string,
  data: string,
  length: number
): boolean {
  try {
    const vals = bech32.decode(data);
    return vals.prefix === prefix && data.length == length;
  } catch (e) {
    return false;
  }
}

export namespace AccAddress {
  /**
   * Checks if a string is a valid Orb account address.
   *
   * @param data string to check
   */
  export function validate(data: string): boolean {
    // 44 for normal account and 64 for contract account
    return (
      checkPrefixAndLength('orb', data, 42) ||
      checkPrefixAndLength('orb', data, 62)
    );
  }

  /**
   * Converts a validator address into an account address
   *
   * @param address validator address
   */
  export function fromValAddress(address: ValAddress): AccAddress {
    const vals = bech32.decode(address);
    return bech32.encode('orb', vals.words);
  }
}

export namespace AccPubKey {
  /**
   * Checks if a string is a Orb account's public key
   * @param data string to check
   */

  export function validate(data: string): boolean {
    return checkPrefixAndLength('orbpub', data, 45);
  }

  /**
   * Converts a Orb validator pubkey to an account pubkey.
   * @param address validator pubkey to convert
   */
  export function fromAccAddress(address: AccAddress): AccPubKey {
    const vals = bech32.decode(address);
    return bech32.encode('orbpub', vals.words);
  }
}

export namespace ValAddress {
  /**
   * Checks if a string is a Orb validator address.
   *
   * @param data string to check
   */
  export function validate(data: string): boolean {
    return checkPrefixAndLength('orbvaloper', data, 49);
  }

  /**
   * Converts a Orb account address to a validator address.
   * @param address account address to convert
   */
  export function fromAccAddress(address: AccAddress): ValAddress {
    const vals = bech32.decode(address);
    return bech32.encode('orbvaloper', vals.words);
  }
}

export namespace ValPubKey {
  /**
   * Checks if a string is a Orb validator pubkey
   * @param data string to check
   */
  export function validate(data: string): boolean {
    return checkPrefixAndLength('orbvaloperpub', data, 52);
  }

  /**
   * Converts a Orb validator operator address to a validator pubkey.
   * @param valAddress account pubkey
   */
  export function fromValAddress(valAddress: ValAddress): ValPubKey {
    const vals = bech32.decode(valAddress);
    return bech32.encode('orbvaloperpub', vals.words);
  }
}

export namespace ValConsAddress {
  /**
   * Checks if a string is a Orb validator consensus address
   * @param data string to check
   */

  export function validate(data: string): boolean {
    return checkPrefixAndLength('orbvalcons', data, 49);
  }
}
