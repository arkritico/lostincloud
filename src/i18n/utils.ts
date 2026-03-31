export type Locale = 'pt' | 'en';
export const defaultLocale: Locale = 'pt';
export const locales: Locale[] = ['pt', 'en'];

import ptStrings from './pt.json';
import enStrings from './en.json';

const strings: Record<Locale, Record<string, any>> = { pt: ptStrings, en: enStrings };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let val: any = strings[locale];
  for (const k of keys) { val = val?.[k]; }
  return typeof val === 'string' ? val : key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : 'pt';
}

export function getPathWithLocale(path: string, locale: Locale): string {
  const clean = path.replace(/^\/(en\/)?/, '/');
  return locale === 'en' ? `/en${clean}` : clean;
}
