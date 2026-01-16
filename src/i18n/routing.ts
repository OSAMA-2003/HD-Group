import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'fr', 'de' , 'ru', 'zh'],
  defaultLocale: 'en',
localePrefix: 'as-needed'

});