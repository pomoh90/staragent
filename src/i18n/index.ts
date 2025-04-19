import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({requestLocale}) => ({
  messages: (await import(`../locales/${requestLocale}.json`)).default,
  timeZone: 'Europe/London'
}));
