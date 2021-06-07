import { ChainId, Token } from "@becoswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0x8fe4D28476cDd43D36a12EB47dC3243C1925f263";
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_BNB_FARM = "0x93bA7cA08fcB20d0a3381052B8c24bdFb0a9fec7";
export const MASTERCHEF_CONTRACT = "0x2aE8E3166fF75aF8aBB9bea2D453F084cBcd8FDA";
export const LOTTERY_CONTRACT = "0x091fF4ee8b12dF117a9b3A9F3D7E8fd5f6F79ac1";
export const MULTICALL_CONTRACT = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.MAINNET, CAKE_BNB_FARM, 18);
