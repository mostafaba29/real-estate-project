import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enNavbar from './src/locales/en/navbar.json';
import arNavbar from './src/locales/ar/navbar.json';

export const formatToArabicNumber = (number)=>{
    return new  Intl.NumberFormat('ar-EG').format(number);
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources:{
        en:{
            navbar: enNavbar
        },
        ar:{
            navbar: arNavbar,
        }
    },
    lng:'en',
    fallbackLng:'en',
    ns:['navbar'],  
    interpolation: {
        escapeValue: false,
        format:(value, format) =>{
            if(format === 'number' || typeof value === 'number'){
                return formatToArabicNumber(value);
            }
            return value;
        }
      }
});

export const useArabicNumber = () =>{
    return {
        formatNumber:formatToArabicNumber
    }
}

i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  });

export default i18n;