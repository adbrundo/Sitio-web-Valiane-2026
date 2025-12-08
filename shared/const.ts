export const COOKIE_NAME = "manus-session";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';

// Brand Colors
export const BRAND_COLORS = {
  deepViolet: '#4A148C',
  turquoise: '#00BCD4',
  sandBeige: '#D7CCC8',
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#2C2C2C',
  lightGray: '#F5F5F5',
} as const;

// Product Links
export const AMAZON_LINKS = {
  pricklyPear: 'https://a.co/d/c4C9lUO',
  baobabCacay: 'https://a.co/d/idElMpy',
} as const;

// Social Media
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/valianevalkyria',
} as const;

// Company Info
export const COMPANY_INFO = {
  name: 'DuoTwins LLC',
  email: 'info@duotwins.market',
  address: 'Santa Fe, NM, USA',
  website: 'valiane.com',
} as const;

// Language
export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
} as const;

export const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Language Storage Key
export const LANGUAGE_STORAGE_KEY = 'valiane-language';
